import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/Feed.css';

const Feed = (props) => (
    <div className='feed'>
        {props.feed.map(bleat => {
            return(
                <div className='bleat'>
                    <h5 className='name'>{bleat.user.full_name}</h5>
                    <h5 className='username'>{` @${bleat.user.username}`}</h5>
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