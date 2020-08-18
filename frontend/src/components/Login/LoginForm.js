import React, { Component } from 'react';
import '../../css/SignupLogin.css';
import { loginUser } from '../../actions/loginActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class LoginForm extends Component {

    state = {
        username: '',
        password: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.loginUser(this.state)
        this.setState({
            username: '',
            password: ''
        })
    }


    render() {
        return this.props.loggedIn ?
        (<Redirect to='/home' /> )
        :
        (
            <div className='login'>
                <h3>Log in to Blather!</h3>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} name='username' placeholder='Username' value={this.state.username} />
                    <input onChange={this.handleChange} type='password' name='password' placeholder='Password' value={this.state.password} />
                    <button type='submit'><strong>Login</strong></button>
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
    loginUser: user => {dispatch(loginUser(user))}
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
