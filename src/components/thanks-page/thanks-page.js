import React from 'react';
import './thanks-page.sass';
import { Link } from 'react-router-dom';

const ThanksPage = () => {
    
    return (
        <div className='thanks-page'>
          <p>Thank you for shopping in our store!</p>  
          <div className='link_wrapper'>
            <Link to='/' className='link'>
                <button className='btn'>Continue shopping</button>
            </Link>
          </div>
        </div>
    );
}

export default ThanksPage;