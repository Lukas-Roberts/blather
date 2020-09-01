import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearUser } from '../actions/userActions'
import sheep from '../sheep.png'
import '../css/NavBar.css'

class NavBar extends Component {

    handleClick = event => {
        this.props.clearUser()
    }

    render() {
        return (
            <div className='navbar'>
                {this.props.loggedIn ? 
                    <ul>
                        <li><NavLink to='/home'><img src={sheep} alt='sheep' className='navbarLogo'/></NavLink></li><br/>
                        <li><NavLink to='/home'><strong>Home</strong></NavLink></li><br/>
                        <li><NavLink to='/profile'><strong>Profile</strong></NavLink></li><br/>
                        <li><NavLink exact to='/explore'><strong>Explore</strong></NavLink></li><br/>
                        <li><button className='linkNav' onClick={this.handleClick}><strong>Logout</strong></button></li>
                    </ul>
                    :
                    <ul>
                        <li><NavLink to='/'><img src={sheep} alt='sheep' className='navbarLogo'/></NavLink></li><br/>
                        <li><NavLink to='/login'><strong>Log In</strong></NavLink></li><br/>
                        <li><NavLink to='/signup'><strong>Sign Up</strong></NavLink></li>
                    </ul>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clearUser: () => {
            dispatch(clearUser())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);