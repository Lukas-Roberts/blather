import React from 'react';
import { connect } from 'react-redux';
import '../css/ProfileContainer.css';

const Profile = (props) => {
    console.log(props.bleats)
    return props.bleats.length !== 0 ?
        <div className='profile'>
            {props.bleats.map(bleat => {
                return(
                    <div className='bleat'>
                        <h5 className='name'>{bleat.user.name}</h5>
                        <h5 className='username'>{` @${bleat.user.username}`}</h5>
                        <p>{bleat.content}</p>
                    </div>
                )
            }).reverse()}
        </div>
    :
        <div>
            <h3>Right now, your profile is empty. To get started, follow some of your friends and start bleating!</h3>
        </div>
}

const mapStateToProps = (state) => {
    return {
        bleats: state.user.bleats
    }
}

export default connect(mapStateToProps)(Profile)