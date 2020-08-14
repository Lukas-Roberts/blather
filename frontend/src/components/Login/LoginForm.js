import React, { Component } from 'react';
import '../Signup/SignupLogin.css';
import { loginUser } from '../../actions/loginActions'
import { connect } from 'react-redux';


class LoginForm extends Component {

    state = {
        username: '',
        password: '',
        shouldRedirect: false
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
        return (
            <div className='login'>
                <form onSubmit={this.handleSubmit}>
                    <p>Welcome back!</p>
                    <input onChange={this.handleChange} name='username' placeholder='Username' value={this.state.username} />
                    <input onChange={this.handleChange} type='password' name='password' placeholder='Password' value={this.state.password} />
                    <button type='submit'>Login</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    loginUser: user => {dispatch(loginUser(user))}
})

export default connect(null, mapDispatchToProps)(LoginForm)
