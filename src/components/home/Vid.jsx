import React from 'react'
import mp4 from '../../assets/Liquid-goo.mp4';
import './vid.css';

const vid = () => {
  return (
    <div className=''>
                <video autoPlay loop muted className='home_img'>
                  <source src={mp4} type='video/mp4' />
                </video>
    </div>
  )
}

export default vid