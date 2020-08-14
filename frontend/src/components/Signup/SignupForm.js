import React, { Component } from 'react';
import './SignupLogin.css';
import { createUser } from '../../actions/loginActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class SignupForm extends Component {

    state = {
        username: '',
        password: '',
        passwordConfirmation: '',
        email: '',
        firstName: '',
        lastName: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.createUser(this.state)
        this.setState({
            username: '',
            password: '',
            passwordConfirmation: '',
            email: '',
            firstName: '',
            lastName: ''
        })    
    }

    render() {
        return this.props.loggedIn ?
        (<Redirect to='/home' /> )
        :
        (
            <div className='signup'>
                <form onSubmit={this.handleSubmit}>
                    <p>We're so happy you decided to join us!</p>
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

const mapStateToProps = state => {
    return {
        user: state.user,
        loggedIn: state.loggedIn
    }
}

const mapDispatchToProps = dispatch => ({
    createUser: user => {dispatch(createUser(user))}
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)