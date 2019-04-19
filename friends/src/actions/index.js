import axios from 'axios';
export const LOGIN_START = 'LOGIN_START';



export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });

    return axios
      .post('http://localhost:5000/api/login', creds)
      .then(res => {
          localStorage.setItem('token', res.data.payload);
      })
      .catch(err => {
          if(err.response.status === 403) {
              localStorage.removeItem('token');
          }
      })
}

export const ADD_FRIEND_START = 'ADD_FRIEND_START';
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS';
export const ADD_FRIEND_FAILURE = 'ADD_FRIEND_FAILURE';

export const addFriend = newFriend => dispatch => {
    dispatch({ type: ADD_FRIEND_START });

    return axios
      .post('http://localhost:5000/api/friends', newFriend, {
          headers: { Authorization: localStorage.getItem('token') }
      })
      .then(res => {
          dispatch({ type: ADD_FRIEND_SUCCESS, payload: res.data })
      })
      .catch(err => {
          console.log('i have no idea');
      })
}

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const getData = () => dispatch => {
   dispatch({ type: FETCH_DATA_START });
   axios
     .get('http://localhost:5000/api/friends', {
         headers: { Authorization: localStorage.getItem('token') }
     })
     .then(res => {
         console.log(res)
         dispatch({
             type: FETCH_DATA_SUCCESS,
             payload: res.data

         })
     })
     .catch(err => {
         if(err.response.status === 403) {
             localStorage.removeItem('token');
         }
         dispatch({ type: FETCH_DATA_FAILURE, payload: err.response  })
     })
}