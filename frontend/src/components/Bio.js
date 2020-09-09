import React, { Component } from 'react';
import { connect } from 'react-redux';
import { followUser } from '../actions/userActions'

class Bio extends Component {

    handleClick = event => {
        event.preventDefault()
        let followUnfollow
        if(this.props.followers.map(user => user.id).includes(this.props.loggedInUser.id)) {
            followUnfollow = 'Unfollow'
        }
        else {
            followUnfollow = 'Follow'
        }
        const followingUser = {userId: this.props.loggedInUser.id, followUserId: this.props.user.id, followUnfollow: followUnfollow}
        this.props.followUser(followingUser)
    }

    followersCount = () => {
        return `${this.props.followers.length} Followers`
    }

    followingCount = () => {
        return `${this.props.following.length} Following`
    }

    isFollowing = ()  => {
        if(this.props.loggedInUser.id !== this.props.user.id) {
            const followers = this.props.followers.map(user => user.id)
            if(followers.includes(this.props.loggedInUser.id)) {
                return <button onClick={this.handleClick}>Unfollow</button>
            }
            else {
                return <button onClick={this.handleClick}>Follow</button>
            }
        }
    }

    followUser = () => {

    }

    render() {
        return(
            <div className='bio'>
                <h3>{this.props.user.name}</h3>
                <h4>@{this.props.user.username}</h4>
                <h4>{this.followingCount()} {this.followersCount()}</h4>
                {this.isFollowing()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedInUser: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        followUser: followingUser => {dispatch(followUser(followingUser))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bio);