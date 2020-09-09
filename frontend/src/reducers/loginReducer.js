import {
    SET_USER,
    CLEAR_USER,
    FOLLOW_USER,
    SET_SELECTED_USER,
    CLEAR_SELECTED_USER,
    CREATE_BLEAT,
    LIKE_BLEAT,
    SET_SELECTED_BLEAT,
    CLEAR_SELECTED_BLEAT,
    CREATE_COMMENT,
    LIKE_COMMENT,
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
                    bleatLikes: action.payload.bleat_likes,
                    commentLikes: action.payload.comment_likes,
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
            console.log(action.payload)
            return {
                ...state,
                following: action.payload[0].following,
                selectedUserFollowers: action.payload[1].followers
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
                selectedUserBleats: action.payload.bleats,
                selectedUserBleatLikes: action.payload.bleat_likes,
                selectedUserCommentLikes: action.payload.comment_likes
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
            return {
                ...state,
                user: action.payload.user,
                following: action.payload.user.following,
                bleats: action.payload.user.bleats,
                selectedBleat: action.payload.bleat
            }

        case LIKE_COMMENT:
            return {
                ...state,
                user: action.payload.user,
                following: action.payload.user.following,
                bleats: action.payload.user.bleats,
                selectedBleat: action.payload.comment.bleat,
                commentLikes: action.payload.user.comment_likes
            }

        case LIKE_BLEAT:
            return {
                ...state,
                user: action.payload.user,
                following: action.payload.user.following,
                bleats: action.payload.user.bleats,
                bleatLikes: action.payload.user.bleat_likes
            }

        default:
            return {
                ...state
            }
    }
}