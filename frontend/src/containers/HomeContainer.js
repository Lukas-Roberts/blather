import React from 'react';
import { connect } from 'react-redux';
import '../css/HomeContainer.css';
import BleatInput from '../components/Bleats/BleatInput';
import Feed from '../components/Feed';
import { Redirect } from 'react-router-dom';

const HomeContainer = (props) => (
    props.loggedIn ?
    <div className='home'>
        <BleatInput /><br/>
        <Feed />
    </div>
    :
    (<Redirect to='/' />)
)

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn
    }
}

export default connect(mapStateToProps)(HomeContainer);