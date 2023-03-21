import React from "react";
import Form from "react-bootstrap/Form";
import "./home.css";
import SearchBar from "../main/SearchBar"; 

const Data = () => {
  return (
    
    <div className="home_data">
      {/* Render the SearchBar component */}
  <SearchBar />
      <h1 className="home_title"> StudyHUB</h1>

      {/* introduction title/BIO */}
      <h3 className="home_subtitle">
        Empowering Minds Through Collaborative Learning
      </h3>
      <p className="home_description">
        Keep up with the latest happenings in your community and learn something new every day!
      
        StudyHub is a dynamic and innovative collaborative learning platform
        designed to empower students with the knowledge and skills they need to
        succeed. Our cutting-edge study tools and resources enable students to
        engage with their peers, share ideas, and collaborate on projects in
        real-time. With StudyHub, students can explore new subjects, master
        challenging concepts, and work together to achieve their academic goals
      </p>

    </div>
  );
};

export default Data;
