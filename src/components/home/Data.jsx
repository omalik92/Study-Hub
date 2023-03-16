import React from "react";
import Form from "react-bootstrap/Form";
import "./home.css";

const Data = () => {
  return (
    <div className="home_data">
      <h1 className="home_title"> StudyHUB</h1>

      {/* introduction title/BIO */}
      <h3 className="home_subtitle">
        Empowering Minds Through Collaborative Learning
      </h3>
      <p className="home_description">
        StudyHub is a dynamic and innovative collaborative learning platform
        designed to empower students with the knowledge and skills they need to
        succeed. Our cutting-edge study tools and resources enable students to
        engage with their peers, share ideas, and collaborate on projects in
        real-time. With StudyHub, students can explore new subjects, master
        challenging concepts, and work together to achieve their academic goals
      </p>

      {/* Into ACTION button/text */}

      <Form className="d-flex search-bar">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
      </Form>
      <a href="#contact" className="button button--flex">
        {" "}
        Explore Courses&nbsp;&nbsp;
        <i className="uil uil-location-arrow"></i>
      </a>
    </div>
  );
};

export default Data;
