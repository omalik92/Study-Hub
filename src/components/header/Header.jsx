import React, { useEffect, useState } from "react";
import "../header/header.css";
import "bootstrap/dist/css/bootstrap.min.css";

//firebase imports
import { useLogout } from "../../hooks/useLogout";

const Header = () => {
  const { logout } = useLogout();
  /* ==========Toggle Menu ============ */
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
//   // Select the header element
// const header = document.querySelector('.header');

// // Listen for the scroll event
// window.addEventListener('scroll', () => {
//   // If the user has scrolled down at least 50 pixels
//   if (window.scrollY >= 50) {
//     // Add the 'scrolled' class to the header element
//     header.classList.add('scrolled');
//   } else {
//     // Otherwise, remove the 'scrolled' class
//     header.classList.remove('scrolled');
//   }
// });

  return (
    <header className={`header ${scrolled ? 'scrolled' : ""}`}>
      <nav className="nav container">
        {/* Header LOGO */}
        <a href="#home" className="nav_logo">
          StudyHUB
        </a>

        <div className="nav_menu">
          {/* navigation links START */}

          <ul className="nav_list grid">
            
            <li className="nav_item">
            <a href="#login" className="nav_link">
                <i className="uil uil-estate nav_icon"></i> Login
              </a>
            </li>
            
            <li className="nav_item">
            <a href="#signup" className="nav_link">
                <i className="uil uil-estate nav_icon"></i> Signup
              </a>
            </li>
            
            <li className="nav_item" onClick={logout}>
            <a href="#logout" className="nav_link">
                <i className="uil uil-estate nav_icon"></i> Logout
              </a>
            </li>

            <li className="nav_item">
              <a href="#home" className="nav_link">
                <i className="uil uil-estate nav_icon"></i> Home
              </a>
            </li>

            <li className="nav_item">
              <a href="#profile" className="nav_link">
                <i className="uil uil-user nav_icon"></i> Profile
              </a>
            </li>

            <li className="nav_item">
              <a href="#resources" className="nav_link">
                <i className="uil uil-puzzle-piece nav_icon"></i> Resources
              </a>
            </li>

            <li className="nav_item">
              <a href="#contact" className="nav_link">
                <i className="uil uil-megaphone nav_icon"></i> Contact
              </a>
            </li>

          </ul>

          {/* navigation links END */}

          {/* Mobile menu toggle */}
          <i
            className="uil uil-times nav_close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
