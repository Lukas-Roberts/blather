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
                    user: {id: action.payload.id, name: action.payload.name, username:action.payload.name},
                    followers: action.payload.followers,
                    following: action.payload.following,
                    bleats: action.payload.bleats,
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
                followers: null,
                following: null,
                bleats: null,
                loggedIn: false,
                selectedUser: null,
                selectedUserFollowers: null,
                selectedUserFollowing: null,
                selectedUserBleats: null,
                selectedBleat: null
            }

        case CREATE_BLEAT:
            return {
                ...state,
                bleats: [action.payload, ...state.bleats]
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
            console.log(action.payload)
            return {
                ...state,
                selectedUser: {id: action.payload.id, name: action.payload.name, username: action.payload.username},
                selectedUserFollowers: action.payload.followers,
                selectedUserFollowing: action.payload.following,
                selectedUserBleats: action.payload.bleats
            }

        case CLEAR_SELECTED_USER:
            return {
                ...state,
                selectedUser: null,
                selectedUserFollowers: null,
                selectedUserFollowing: null,
                selectedUserBleats: null
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
                user: action.payload.user,
                following: action.payload.user.following,
                bleats: action.payload.user.bleats,
                selectedBleat: action.payload.bleat
            }

        default:
            return {
                ...state
            }
    }
}