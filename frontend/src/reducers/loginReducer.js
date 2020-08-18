import {
    SET_USER,
    CLEAR_USER
} from '../actionTypes/index';

export default function loginReducer(state= {user: null, loggedIn:false}, action) {
    switch(action.type) {
        case SET_USER:
            if(action.payload.username){
               return {
                    ...state,
                    user: action.payload,
                    loggedIn: true
                } 
            }
            else {
                return {
                    ...state
                }
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