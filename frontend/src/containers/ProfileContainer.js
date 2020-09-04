import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/ProfileContainer.css';
import Profile from '../components/Profile';
import Bio from '../components/Bio';
import { Redirect } from 'react-router-dom';

class ProfileContainer extends Component {

    render() {
        if(this.props.loggedIn){
            return (
                <div className='profileContainer'>
                    <Bio user={this.props.user} followers={this.props.followers} following={this.props.following}/>
                    <Profile user={this.props.user} bleats={this.props.bleats}/>
                </div>
            )
        }
        else{
            return (<Redirect to='/' />)
        }
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn
    }
}

export default connect(mapStateToProps)(ProfileContainer);