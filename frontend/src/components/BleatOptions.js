import React, { Component } from 'react';
import '../css/BleatOptions.css';
import { connect } from 'react-redux';
import { getSelectedBleat } from '../actions/bleatActions';
import { Redirect } from 'react-router-dom';

class BleatOptions extends Component {

    handleLike = (event) => {
        event.preventDefault()

    }

    handleComment = (event) => {
        event.preventDefault()
        this.props.getSelectedBleat(event.target.value)
    }
    
    render() {
        return this.props.selectedBleat ?
        (<Redirect to={`/bleat/${this.props.selectedBleat.id}`}/>)
        :
        (
            <div className='bleatOptions'>
                <button className='link' onClick={this.handleLike}>♡ {this.props.bleat.likes}</button>
                <button className='link' onClick={this.handleComment} value={this.props.bleat.id}>&#x1F5E8; {this.props.bleat.comments_count}</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedBleat: state.selectedBleat
    }
}

const mapDispatchToProps = dispatch => ({
    getSelectedBleat: bleatId => {dispatch(getSelectedBleat(bleatId))}
})

export default connect(mapStateToProps, mapDispatchToProps)(BleatOptions);