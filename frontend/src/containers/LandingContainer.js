import React from 'react'
import { Link } from 'react-router-dom'
import './LandingContainer.css'

const LandingContainer = () => (
    <div className='landing'>
        <h2>Welcome to Blather!</h2>
        <h3>To Start Bleating</h3>
        <p><Link to='/login'>Login</Link> or <Link to='/signup'>Signup</Link></p>
    </div>
)

export default LandingContainer;