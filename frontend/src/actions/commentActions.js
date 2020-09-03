import {
    CREATE_COMMENT,
    DELETE_COMMENT,
    LIKE_COMMENT,
    UNLIKE_COMMENT
} from '../actionTypes/index'

export const addComment = (comment) => {
    return async function (dispatch) {
        try{
            const response = await fetch('http://localhost:3001/comments', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(comment)
            })
            const commentObj = await response.json()
            dispatch({type: CREATE_COMMENT, payload: commentObj})
        }
        catch(data) {
            console.log(data)
        }
    }
}