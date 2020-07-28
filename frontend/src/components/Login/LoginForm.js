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

        
    }
}