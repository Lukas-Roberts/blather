import {
    CREATE_BLEAT,
    DELETE_BLEAT,
    SET_SELECTED_BLEAT,
    CLEAR_SELECTED_BLEAT
} from '../actionTypes/index'

export const createBleat = (bleat) => {
    return async function (dispatch) {
        try{
            const formData = { bleat: {
                user_id: bleat.user_id,
                content: bleat.content
            }}
            const response = await fetch('http://localhost:3001/bleats', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const bleatObj = await response.json()
            dispatch({type: CREATE_BLEAT, payload: bleatObj})
        }
        catch(data) {
            console.log(data)
        }
    }
}

export const getSelectedBleat = (bleatId) => {
    return async function (dispatch) {
        try{
            const response = await fetch(`http://localhost:3001/bleats/${bleatId}`)
            const bleatObj = await response.json()
            dispatch({type: SET_SELECTED_BLEAT, payload: bleatObj})
        }
        catch(data) {
            console.log(data)
        }
    }
}

export const clearSelectedBleat = () => {
    return {
        type: CLEAR_SELECTED_BLEAT
    }
}
