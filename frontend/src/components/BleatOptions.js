import React, { Component } from 'react';
import '../css/BleatOptions.css';
import { connect } from 'react-redux';
import { getSelectedBleat, likeBleat } from '../actions/bleatActions';
import { getSelectedUser } from '../actions/userActions'
import { Redirect } from 'react-router-dom';

class BleatOptions extends Component {
    state = {
        likes: this.props.bleat.likes
    }

    handleLike = (event) => {
        event.preventDefault()
        let bleatLike = {bleat_id: event.target.value, user_id: this.props.userId}
        this.props.likeBleat(bleatLike)
        if(this.props.bleat.user_id !== this.props.userId){
            this.props.getSelectedUser(this.props.bleat.user_id)
            this.props.getSelectedUser(this.props.bleat.user_id)
        }
    }

    handleComment = (event) => {
        event.preventDefault()
        this.props.getSelectedBleat(event.target.value)
    }

    liked = () => {
        let likes = this.props.bleatLikes.map(bleat => bleat.bleat_id)
        if(likes.includes(this.props.bleat.id)){
            return <button className='link liked' onClick={this.handleLike} value={this.props.bleat.id}>♥ {this.props.bleat.likes}</button>
        }
        else {
            return <button className='link' onClick={this.handleLike} value={this.props.bleat.id}>♡ {this.props.bleat.likes}</button>
        }
    }
    
    render() {
        return this.props.selectedBleat ?
        (<Redirect to={`/bleat/${this.props.selectedBleat.id}`}/>)
        :
        (
            <div className='bleatOptions'>
                {this.liked()}
                <button className='link' onClick={this.handleComment} value={this.props.bleat.id}>&#x1F5E8; {this.props.bleat.comments.length}</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedBleat: state.selectedBleat,
        userId: state.user.id,
        bleatLikes: state.bleatLikes
    }
}

const mapDispatchToProps = dispatch => ({
    getSelectedBleat: bleatId => {dispatch(getSelectedBleat(bleatId))},
    getSelectedUser: userId => {dispatch(getSelectedUser(userId))},
    likeBleat: bleatLike => {dispatch(likeBleat(bleatLike))}
})

export default connect(mapStateToProps, mapDispatchToProps)(BleatOptions);