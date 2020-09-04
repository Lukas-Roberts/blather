import React from 'react';
import '../css/ProfileContainer.css';
import BleatOptions from './BleatOptions'

const Profile = (props) => {
    return props.bleats ?
        <div className='profile'>
            {props.bleats.map(bleat => {
                return(
                    <div className='bleat'>
                        <h5 className='name'>{bleat.user.name}</h5>
                        <h5 className='username'>{` @${bleat.user.username}`}</h5>
                        <p>{bleat.content}</p>
                        {<BleatOptions bleat={bleat} user={props.user}/>}
                    </div>
                )
            }).reverse()}
        </div>
    :
        <div>
            <h3>Right now, your profile is empty. To get started, follow some of your friends and start bleating!</h3>
        </div>
}

export default Profile;