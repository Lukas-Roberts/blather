import { setUser } from './userActions';

export const loginUser = (user) => {
    return async function (dispatch) {
        try{
            const formData = { user: {
                username: user.username,
                password: user.password
            }}
            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const userObj = await response.json()
            dispatch(setUser(userObj))
            
        }
        catch(data) {
            console.log(data)
        }
    }
}