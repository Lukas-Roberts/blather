import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import sheep from '../sheep.png'
import '../css/NavBar.css'

const NavBar = (props) => {
    return (
        <div className='navbar'>
            {props.loggedIn ? 
                <ul>
                    <li><NavLink to='/home'><img src={sheep} alt='sheep' className='navbarLogo'/></NavLink></li><br/>
                    <li><NavLink to='/home' className='links'><strong>Home</strong></NavLink></li><br/>
                    <li><NavLink to='/profile'><strong>Profile</strong></NavLink></li>
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

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn
    }
}

export default connect(mapStateToProps)(NavBar);