
import React from 'react';
import { connect } from 'react-redux';
import '../css/Feed.css';
import BleatOptions from './BleatOptions'

const getBleats = (props) => {
    let arr = [...props.userBleats]
    props.following.map(followings => {
        followings.bleats.map(bleat => {
            arr.push(bleat)
        })
    })
    return arr.sort((a, b) => b.id - a.id)
}

const Feed = (props) => {
    return props.userBleats.length !== 0 ?
        (<div className='feed'>
            {getBleats(props).map(bleat => {
                return(
                    <div className='bleat' key={bleat.id}>
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
        userBleats: state.bleats,
        following: state.following
    }
}

export default connect(mapStateToProps)(Feed)