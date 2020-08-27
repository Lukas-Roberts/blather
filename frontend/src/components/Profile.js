import React from 'react';
import { connect } from 'react-redux';
import '../css/ProfileContainer.css';

const Profile = (props) => (
    <div className='profile'>
        {props.bleats.map(bleat => {
        return(
            <div className='bleat'>
                <h5 className='name'>{bleat.user.full_name}</h5>
                <h5 className='username'>{` @${bleat.user.username}`}</h5>
                <p>{bleat.content}</p>
            </div>
        )
    }).reverse()}
    </div>
)

const mapStateToProps = (state) => {
    return {
        bleats: state.user.bleats
    }
}

export default connect(mapStateToProps)(Profile)