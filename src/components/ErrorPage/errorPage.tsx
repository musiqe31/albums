import React from 'react';
import { Link } from 'react-router-dom';
import './notFound.css';
import boat from '../../assets/images/boat.jpeg'
import { errors } from '../../messages'

const NotFound = () => {
    return (
        <div className='container'>
            <h1 className='header'>{errors.NotFound}</h1>
            <img alt='error' src={boat} height={300} width={300} className='boat'/>
            <Link to='/'>{errors.Back}</Link>
        </div>
    );
    };

export default NotFound;