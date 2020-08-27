import React, { Component } from 'react';
import { connect } from 'react-redux';
import { followUser } from '../actions/userActions'

class Bio extends Component {

    handleClick = event => {
        this.props.followUser()
    }

    followersCount = () => {
        return `${this.props.user.followers.length} Followers`
    }

    followingCount = () => {
        console.log(this.props.user.following)
        return `${this.props.user.following.length} Following`
    }

    render() {
        return(
            <div className='bio'>
                <h3>{this.props.user.full_name}</h3>
                <h4>@{this.props.user.username}</h4>
                <h4>{this.followingCount()}</h4>
                <h4>{this.followersCount()}</h4>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        queryUser: state.queryUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        followUser: () => {
            dispatch(followUser())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bio);