import {
    SET_USER,
    CLEAR_USER,
    FOLLOW_USER
} from '../actionTypes/index'

export function setUser(userObj) {
    return {
        type: SET_USER,
        payload: userObj
    }
}

export function clearUser() {
    return {
        type: CLEAR_USER
    }
}

export function followUser() {
    return {
        type: FOLLOW_USER
    }
}
