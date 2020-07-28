import React, { Component } from 'react

export default class LoginForm extends Component {

    state = {
        username: '',
        password: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })

        handleSubmit = event {
            event.preventDefault()
            fetch('http://localhost:3001/sessions', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            })
                .then(resp => resp.json())
                .then(json => console.log(json))
                .catch(error => console.log(error))
        }
    }
}