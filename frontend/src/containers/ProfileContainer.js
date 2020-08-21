import React from 'react';
import { connect } from 'react-redux';
import '../css/ProfileContainer.css';
import Profile from '../components/Profile';
import { Redirect } from 'react-router-dom';

const ProfileContainer = (props) => (
    props.loggedIn ?
    <div className='profileContainer'>
        <Profile />
    </div>
    :
    (<Redirect to='/' />)
)

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn
    }
}

export default connect(mapStateToProps)(ProfileContainer);