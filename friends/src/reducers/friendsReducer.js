import {
    LOGIN_START,
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    ADD_FRIEND_START,
    ADD_FRIEND_SUCCESS
} from '../actions';


const initialState = {
    friends: [],
    fetchingData: false,
    isLoggingIn: false,
    addingFriend: false
}

export const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START: {
            return {
                ...state,
                isLoggingIn: true
            };
        }

        case ADD_FRIEND_START: {
            return {
                ...state,
                addingFriend: true
            }
        }

        case ADD_FRIEND_SUCCESS: {
            return {
                ...state,
                addingFriend: false,
                error:'',
                friends: action.payload
            }
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