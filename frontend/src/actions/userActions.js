import {
    SET_USER,
    CLEAR_USER,
    FOLLOW_USER,
    SET_SELECTED_USER,
    CLEAR_SELECTED_USER
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

export const clearSelectedUser = () => {
    return {
        type: CLEAR_SELECTED_USER
    }
}

export const getSelectedUser = (userId) => {
    return async function (dispatch) {
        try{
            const response = await fetch(`http://localhost:3001/users/${userId}`)
            const userObj = await response.json()
            dispatch({type: SET_SELECTED_USER, payload: userObj})
        }
        catch(data) {
            console.log(data)
        }
    }
}

export const queryUsers = (query) => {
    return async function (dispatch) {
        try{
            const response = await fetch(`http://localhost:3001/users/${query}`)
            const results = await response.json()
            dispatch({type: 'SET_RESULTS', payload: results})
        }
        catch(data) {
            console.log(data)
        }
    }
}
