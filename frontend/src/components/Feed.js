import React from 'react';
import { connect } from 'react-redux';
import '../css/Feed.css';
import BleatOptions from './BleatOptions'

const Feed = (props) => {
    return props.feed.length !== 0 ?
        (<div className='feed'>
            {props.feed.map(bleat => {
                console.log(bleat)
                return(
                    <div className='bleat'>
                        <h5 className='name'>{bleat.user.name}</h5>
                        <h5 className='username'>{` @${bleat.user.username}`}</h5>
                        <p>{bleat.content}</p>
                        {<BleatOptions bleat={bleat}/>}
                    </div>
                )
            })}
        </div>)
        :
        (
        <div>
            <h3>Right now, your feed is empty. To get started, follow some of your friends and start bleating!</h3>
        </div>
        )

}

const mapStateToProps = (state) => {
    return {
        feed: state.user.feed
    }
}

export default connect(mapStateToProps)(Feed)