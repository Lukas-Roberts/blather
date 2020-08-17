import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import sheep from '../sheep.png'

const NavBar = (props) => {
    return (
        <div className='navbar'>
            {props.loggedIn ? 
                <ul>
                    <NavLink to='/home'><img src={sheep} alt='sheep' /></NavLink>
                    <NavLink to='/home'>logged in home</NavLink>
                </ul>
                :
                <ul>
                    <NavLink to='/'><img src={sheep} alt='sheep' /></NavLink>
                    <NavLink to='/login'>Login</NavLink>
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