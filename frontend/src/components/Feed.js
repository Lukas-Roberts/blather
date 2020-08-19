import React, { Component } from 'react';
import { connect } from 'react-redux';

const Feed = (props) => (
    <div className='feed'>
        {props.feed.map(bleat => {
            return(
                <div className='bleat'>
                    <h2>{bleat.user.username}</h2>
                    <p>{bleat.content}</p>
                </div>
            )
        })}
    </div>
)

const mapStateToProps = (state) => {
    return {
        feed: state.user.feed
    }
}

export default connect(mapStateToProps)(Feed)