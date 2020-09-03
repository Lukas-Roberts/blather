import {
    SET_USER,
    CLEAR_USER,
    CREATE_BLEAT,
    FOLLOW_USER,
    SET_SELECTED_USER,
    CLEAR_SELECTED_USER,
    SET_SELECTED_BLEAT,
    CLEAR_SELECTED_BLEAT,
    CREATE_COMMENT,
    SET_RESULTS
} from '../actionTypes/index';

export default function loginReducer(state= {user: null, loggedIn: false, selectedUser: null, selectedBleat: null}, action) {
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
                loggedIn: false,
                selectedUser: null,
                selectedBleat: null
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
        
        case SET_RESULTS:
            return {
                ...state,
                results: action.payload
            }

        case SET_SELECTED_USER:
            return {
                ...state,
                selectedUser: action.payload
            }

        case CLEAR_SELECTED_USER:
            return {
                ...state,
                selectedUser: null
            }

        case SET_SELECTED_BLEAT:
            return {
                ...state,
                selectedBleat: action.payload
            }

        case CLEAR_SELECTED_BLEAT:
            return {
                ...state,
                selectedBleat: null
            }

        case CREATE_COMMENT:
            console.log(action.payload)
            return {
                ...state,
                user: {
                    ...state.user,
                    comments: [
                        action.payload,
                        ...state.user.comments
                    ]
                },
                selectedBleat: action.payload.bleat
            }

        default:
            return {
                ...state
            }
    }
}