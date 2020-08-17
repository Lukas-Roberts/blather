import React from 'react';
import { connect } from 'react-redux';
import '../css/HomeContainer.css';
import BleatInput from '../components/Bleats/BleatInput';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const HomeContainer = (props) => (
    props.loggedIn ?
    <div className='home'>
        <BleatInput />
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