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
                    <li><NavLink to='/home'><img src={sheep} alt='sheep' className='logo'/></NavLink></li><br/>
                    <li><NavLink to='/home'>Profile</NavLink></li>
                </ul>
                :
                <ul>
                    <li><NavLink to='/'><img src={sheep} alt='sheep' className='logo'/></NavLink></li><br/>
                    <li><NavLink to='/login'>Log In</NavLink></li><br/>
                    <li><NavLink to='/signup'>Sign Up</NavLink></li>
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