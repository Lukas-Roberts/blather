import {
    SET_USER,
    CLEAR_USER
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
