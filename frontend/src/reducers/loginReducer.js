import {
    SET_USER,
    CLEAR_USER,
    CREATE_BLEAT,
    FOLLOW_USER
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

        case CREATE_BLEAT:
            return {
                ...state,
                user: {
                    ...state.user,
                    bleats: [
                        ...state.user.bleats,
                        action.payload
                    ],
                    feed: [
                        action.payload,
                        ...state.user.feed
                    ]
                }
            }

        case FOLLOW_USER:
            return {
                ...state
            }

        default:
            return {
                ...state
            }
    }
}