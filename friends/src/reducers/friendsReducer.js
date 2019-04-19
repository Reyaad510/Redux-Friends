import {
    LOGIN_START,
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
} from '../actions';


const initialState = {
    friends: [],
    fetchingData: false,
    isLoggingIn: false
}

export const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START: {
            return {
                ...state,
                isLoggingIn: true
            };
        }

        case FETCH_DATA_START:
        return {
            ...state,
            error:'',
            fetchingData: true
        };
        case FETCH_DATA_SUCCESS:
        return {
            ...state,
            error:'',
            fetchingData: false,
            friends: action.payload
        };
        default:
        return state;

    }
}