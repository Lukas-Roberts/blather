import {
    SET_USER,
    CLEAR_USER
} from '../actionTypes/index';

export default function loginReducer(state= {user: null, loggedIn:false}, action) {
    switch(action.type) {
        case SET_USER:
            console.log(action)
            return {
                ...state,
                user: action.payload.user,
                loggedIn: true
            }
        
        case CLEAR_USER:
            return {
                ...state,
                user: null,
                loggedIn: false
            }

        default:
            return {
                ...state
            }
    }
}