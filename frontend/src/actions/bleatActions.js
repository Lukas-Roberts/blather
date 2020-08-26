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
            dispatch({type: 'CREATE_BLEAT', payload: bleatObj})
        }
        catch(data) {
            console.log(data)
        }
    }
}
