import React from "react";
import Assistant from '../Assistant/Assistant'

const Social = () => {
  return (
    <div className="home_social">
      {/* social media LINKS */}
      <a href="https://github.com/omalik92/Study-Hub" className="home_social-icon" target="_blank" rel="noreferrer">
        <i className="uil uil-github"></i>
      </a>

      {/* <a href="/" className="home_social-icon" target="_blank" rel="noreferrer">
        <i className="uil uil-robot"></i>
      </a> */}
      <Assistant />

      <a href="/" className="home_social-icon" target="_blank" rel="noreferrer">
        <i className="uil uil-fire"></i>
      </a>
      
    </div>
  );
};

export default Social;
