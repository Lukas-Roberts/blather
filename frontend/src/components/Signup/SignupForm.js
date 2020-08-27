import React, { Component } from 'react';
import '../../css/SignupLogin.css';
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
            name: ''
        })    
    }

    render() {
        return this.props.loggedIn ?
        (<Redirect to='/home' /> )
        :
        (
            <div className='signup'>
                <h3>Create your account</h3>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} name='username' placeholder='Username' value={this.state.username}/>
                    <input type='password' onChange={this.handleChange} name='password' placeholder='Password' value={this.state.password}/>
                    <input type='password' onChange={this.handleChange} name='passwordConfirmation' placeholder='Confirm Password' value={this.state.passwordConfirmation}/>
                    <input onChange={this.handleChange} name='email' placeholder='Email' value={this.state.email}/>
                    <input onChange={this.handleChange} name='name' placeholder='Name' value={this.state.name}/>
                    <button type='submit'><strong>Join</strong></button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn
    }
}

const mapDispatchToProps = dispatch => ({
    createUser: user => {dispatch(createUser(user))}
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)