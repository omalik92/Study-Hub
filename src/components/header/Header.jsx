import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

import "../header/header.css";
import "bootstrap/dist/css/bootstrap.min.css";
//required for app drawer
import Drawer from "@mui/material/Drawer";
import Backdrop from "@mui/material/Backdrop";

//required for profile section
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import SettingsIcon from "@mui/icons-material/Settings";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

//firebase imports
import { useLogout } from "../../hooks/useLogout";

const Header = () => {
  const { logout } = useLogout();
  /* ==========Toggle Menu ============ */
  const [Toggle, showMenu] = useState(false);

  const [drawer, setDrawer] = useState(false);

  const { user, authIsReady } = useAuthContext();

  useEffect(() => {
    console.log("User data:", user);
  }, [user]);

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
  // //   // Select the header element
  // // const header = document.querySelector('.header');

  // // Listen for the scroll event
  // window.addEventListener("scroll", () => {
  //   // If the user has scrolled down at least 50 pixels
  //   if (window.scrollY >= 50) {
  //     // Add the 'scrolled' class to the header element
  //     header.classList.add("scrolled");
  //   } else {
  //     // Otherwise, remove the 'scrolled' class
  //     header.classList.remove("scrolled");
  //   }
  // });

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav container">
        {/* Header LOGO */}
        <a href="#home" className="nav_logo">
          StudyHUB
        </a>

        <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
          {/* navigation links START */}

          <ul className="nav_list grid">
            <li className="nav_item">
              <a href="#home" className="nav_link">
                <i className="uil uil-estate nav_icon"></i> Home
              </a>
            </li>

            <li className="nav_item">
              {/* <a href="#resources" className="nav_link">
                <i className="uil uil-puzzle-piece nav_icon"></i> Resources
              </a> */}
              <Link to="/resources" className="nav_link">
                <i className="uil uil-puzzle-piece nav_icon"></i> Resources
              </Link>
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
                style={{ width: "325px", padding: "16px" }}
              >
                <h3>Profile</h3>

                {/* User avatar and name */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "16px",
                  }}
                >
                  <Avatar sx={{ width: 56, height: 56, marginRight: 2 }}>
                    U
                  </Avatar>
                  <div>
                    <h4 style={{ margin: 0 }}>omalik92</h4>
                    <p style={{ margin: 0 }}>
                      {user?.email || "user@example.com"}
                    </p>
                  </div>
                </div>

                {/* Settings toolbar */}
                <ListItem button>
                  <ListItemIcon>
                    <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </ListItem>

                {/* Saved courses */}
                <ListItem button onClick={() => showMenu(!Toggle)}>
                  <ListItemText primary="Saved courses" />
                  {Toggle ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </ListItem>
                <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
                  {/* List of saved courses */}
                  <List component="nav" disablePadding>
                    <ListItem button>
                      <ListItemText primary="Course 1" />
                    </ListItem>
                    <ListItem button>
                      <ListItemText primary="Course 2" />
                    </ListItem>
                  </List>
                </div>

                {/* Logout */}
                <Button
                  onClick={logout}
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Logout
                </Button>
              </div>
            </Drawer>

            <Backdrop
              open={drawer}
              onClick={handleDrawerClose}
              sx={{
                zIndex: (theme) => theme.zIndex.drawer - 1,
                backdropFilter: drawer ? "blur(5px)" : "none",
              }}
            />
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
