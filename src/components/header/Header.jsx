import React, { useState } from 'react'
import '../header/header.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const Header = () => {
    /* ==========Toggle Menu ============ */
    const[Toggle, showMenu] = useState(false);

  return (
   <header className='header'>
      <nav className='nav container'>
{/* Header LOGO */}
          <a href='index.html' className='nav_logo'>StudyHUB</a>

          <div className={ Toggle ? "nav_menu show-menu" : "nav_menu" }>
              
{/* navigation links START */}
              <ul className='nav_list grid'>
                  <li className='nav_item'>
                      <a href='#home' className='nav_link active-link'>
                          <i className='uil uil-estate nav_icon'></i> Home
                      </a>
                  </li>

                  <li className='nav_item'>
                      <a href='#profile' className='nav_link'>
                          <i className='uil uil-user nav_icon'></i> Profile
                      </a>
                  </li>

                  <li className='nav_item'>
                      <a href='#resources' className='nav_link'>
                          <i className='uil uil-puzzle-piece nav_icon'></i> Resources
                      </a>
                  </li>

                  <li className='nav_item'>
                      <a href='#contact' className='nav_link'>
                          <i className='uil uil-megaphone nav_icon'></i> Contact
                      </a>
                  </li>

    
              </ul>

          
       

{/* navigation links END */}

{/* Mobile menu toggle */}
              <i class="uil uil-times nav_close" onClick={() => showMenu
          (!Toggle)}></i>
          </div>

          <div className='nav_toggle' onClick={() => showMenu
          (!Toggle)}>
              <i class="uil uil-apps"></i>
          </div>
      </nav>
      
   </header>
  )
}

export default Header