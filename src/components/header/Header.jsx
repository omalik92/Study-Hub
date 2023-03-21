import React, { useEffect, useState } from "react";
import "../header/header.css";
import "bootstrap/dist/css/bootstrap.min.css";
//required for app drawer
import { styled, alpha } from "@mui/system";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

//firebase imports
import { useLogout } from "../../hooks/useLogout";

const Header = () => {
  const { logout } = useLogout();
  /* ==========Toggle Menu ============ */
  const [Toggle, showMenu] = useState(false);

  const [drawer, setDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setDrawer(true);
  };

  const handleDrawerClose = () => {
    setDrawer(false);
  };

  const [scrolled, setScrolled] = useState(false);

  // Select the header element
  const header = document.querySelector(".header");
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  //   // Select the header element
  // const header = document.querySelector('.header');

  // Listen for the scroll event
  window.addEventListener("scroll", () => {
    // If the user has scrolled down at least 50 pixels
    if (window.scrollY >= 50) {
      // Add the 'scrolled' class to the header element
      header.classList.add("scrolled");
    } else {
      // Otherwise, remove the 'scrolled' class
      header.classList.remove("scrolled");
    }
  });

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav container">
        {/* Header LOGO */}
        <a href="#home" className="nav_logo">
          StudyHUB
        </a>

        <div className="nav_menu">
          {/* navigation links START */}

          <ul className="nav_list grid">
            <li className="nav_item">
              <a href="#home" className="nav_link">
                <i className="uil uil-estate nav_icon"></i> Home
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
            {/* Profile link and drawer */}
            <li className="nav_item">
              <a href="#" className="nav_link" onClick={handleDrawerOpen}>
                <i className="uil uil-user nav_icon"></i> Profile
              </a>
            </li>

            {/* Drawer */}
            <Drawer anchor="right" open={drawer} onClose={handleDrawerClose}>
              <div
                className="drawer-content"
                style={{ width: "300px", padding: "16px" }}
              >
                <a onClick={logout} href="#" className="nav_link_logout">
                  Logout
                </a>
              </div>
            </Drawer>
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
