import React from 'react'
import './home.css';
import Social from './Social';
import Data from './Data';
import mp4 from '../../assets/constalation.mp4';



const Home = () => {
  return (
    <section className='home section' >
        <div className='home_container container grid'  id='home'>
            <div className='home_content grid'>
                <Social />
                

{/* PROFILE pic / url added to CSS */}
                <div className='home_bg'>
                <video autoPlay loop muted className='home_bg-video mp4'>
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