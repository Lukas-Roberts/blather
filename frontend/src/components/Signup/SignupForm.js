import React, { Component } from 'react'

export default class SignupForm extends Component {

    state = {
        username: '',
        password: '',
        passwordConfirmation: '',
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        if(this.state.password === this.state.passwordConfirmation){
            fetch('http://localhost:3001/users', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            })
                .then(resp => resp.json())
                .then(json => console.log(json))
        }
        else {
            alert('Passwords do not match!')
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} name='username' placeholder='username' value={this.state.username}/>
                    <input type='password' onChange={this.handleChange} name='password' placeholder='password' value={this.state.password}/>
                    <input type='password' onChange={this.handleChange} name='passwordConfirmation' placeholder='confirm password' value={this.state.passwordConfirmation}/>
                    <input onChange={this.handleChange} name='email' placeholder='email' value={this.state.email}/>
                    <input onChange={this.handleChange} name='firstName' placeholder='first name' value={this.state.firstName}/>
                    <input onChange={this.handleChange} name='lastName' placeholder='last name' value={this.state.lastName}/>
                    <button type='submit'>Start Bleating</button>
                </form>
            </div>
        )
    }
}