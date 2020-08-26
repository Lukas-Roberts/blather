import {
    SET_USER,
    CLEAR_USER,
    CREATE_BLEAT
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
            console.log(action)
            console.log(state.user)
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

        default:
            return {
                ...state
            }
    }
}