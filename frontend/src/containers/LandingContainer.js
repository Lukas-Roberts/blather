import React from 'react';
import { Link } from 'react-router-dom';
import '../css/LandingContainer.css';
import sheep from '../sheep.png';

const LandingContainer = () => (
    <div className='landing'>
        <img src={sheep} alt='sheep' className='logo' />
        <h3>Join Blather today.</h3>
        <p className='links'><Link to='/login'><button><strong>Log In</strong></button></Link><br />
        <Link to='/signup'><button><strong>Sign Up</strong></button></Link></p>
    </div>
)

export default LandingContainer;