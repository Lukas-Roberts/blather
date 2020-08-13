import React from 'react';
import { Link } from 'react-router-dom';
import './HomeContainer.css';
import BleatInput from '../components/Bleats/BleatInput';

const HomeContainer = () => (
    <div className='home'>
        <BleatInput />
    </div>
)

export default HomeContainer;