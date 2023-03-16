import React from 'react'
import './home.css';
import Social from './Social';
import Data from './Data';
import mp4 from '../../assets/pixel-animation.mp4';


const Home = () => {
  return (
    <section className='home section' id='home'>
        <div className='home_container container grid'>
            <div className='home_content grid'>
                <Social />

{/* PROFILE pic / url added to CSS */}
                <div className='home_img'>
                <video autoPlay loop muted className='home_img mp4'>
                  <source src={mp4} type='video/mp4' />
                </video>
                </div>

                <Data />
            </div>

            
        </div>
    </section>
  )
}

export default Home