import React, { useState } from "react";
import "./courses.css";
import Vid from "../home/Vid";

const Courses = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="courses section" id="courses">
      <h2 className="section_title courses" id="course-title">
        Featured Courses
      </h2>
      <span className="section_subtitle" id="course-subtitle">
        Explore popular courses
      </span>

      <div className="courses_container container grid">
        <div className="courses_content">
          <div>
            <i className="uil uil-react courses_icon"></i>
            <h3 className="courses_title">Learn React</h3>
          </div>

          <span className="courses_button" onClick={() => toggleTab(1)}>
            Go to course
            <i
              className="uil uil-arrow-right 
            courses_button-icon"
            ></i>
          </span>

          <div
            className={
              toggleState === 1 ? "courses_modal active-modal" : "courses_modal"
            }
          >
            <div className="courses_modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times courses_modal-close"
              ></i>

              <h3 className="courses_modal-title">Learn React JS</h3>
              <p className="courses_modal-description">
                REASONS TO LEARN REACT
              </p>

              <ul className="courses_modal-courses grid">
                <li className="courses_modal-service">
                  <i
                    className="uil uil-check-circle 
                            courses_modal-icon"
                  ></i>
                  <p className="courses_modal-info">
                    Build modern and dynamic user interfaces that are fast and
                    responsive, making your web applications more engaging and
                    user-friendly.
                  </p>
                </li>

                <li className="courses_modal-service">
                  <i
                    className="uil uil-check-circle 
                            courses_modal-icon"
                  ></i>
                  <p className="courses_modal-info">
                    Collaborate more effectively with other developers, as
                    React's component-based architecture makes it easier to
                    break down complex UIs into manageable, reusable pieces of
                    code.
                  </p>
                </li>

                <li className="courses_modal-service">
                  <i
                    className="uil uil-check-circle 
                            courses_modal-icon"
                  ></i>
                  <p className="courses_modal-info">
                    Stay up-to-date with industry trends and increase your
                    employability by adding React JS to your skillset, as many
                    companies are adopting this technology to build their web
                    applications.
                  </p>
                </li>


                {/* Replace the list item with a button */}
                <li className="courses_modal-service">
                  <a
                    href="https://www.udemy.com/courses/search/?q=react+js&src=sac&kw=react"
                    target="_blank"
                  >
                    <button className="button button--flex">
                      {" "}
                      Check out this course&nbsp;&nbsp;
                      <i className="uil uil-location-arrow"></i>
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="courses_content">
          <div>
            <i className="uil uil-java-script courses_icon"></i>
            <h3 className="courses_title">Learn JavaScript</h3>
          </div>

          <span onClick={() => toggleTab(2)} className="courses_button">
            Go to course{" "}
            <i
              className="uil uil-arrow-right 
            courses_button-icon"
            ></i>
          </span>

          <div
            className={
              toggleState === 2 ? "courses_modal active-modal" : "courses_modal"
            }
          >
            <div className="courses_modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times
                    courses_modal-close"
              ></i>

              <h3 className="courses_modal-title">Learn JavaScript</h3>
              <p className="courses_modal-description">
                REASONS TO LEARN JAVASCRIPT
              </p>

              <ul className="courses_modal-courses grid">
                <li className="courses_modal-service">
                  <i
                    className="uil uil-check-circle 
                            courses_modal-icon"
                  ></i>
                  <p className="courses_modal-info">
                    Create interactive and dynamic websites and web applications
                    that can respond to user actions in real-time, improving the
                    user experience.
                  </p>
                </li>

                <li className="courses_modal-service">
                  <i
                    className="uil uil-check-circle 
                            courses_modal-icon"
                  ></i>
                  <p className="courses_modal-info">
                    Build a foundation for learning other popular front-end
                    frameworks and libraries, such as React, Angular, and Vue.
                  </p>
                </li>

                <li className="courses_modal-service">
                  <i
                    className="uil uil-check-circle 
                            courses_modal-icon"
                  ></i>
                  <p className="courses_modal-info">
                    Develop server-side applications and command-line tools
                    using Node.js, a popular JavaScript runtime built on
                    Chrome's V8 engine.
                  </p>
                </li>

                <li className="courses_modal-service">
                  <a
                    href="https://medium.com/javarevisited/10-best-online-courses-to-learn-javascript-in-2020-af5ed0801645"
                    target="_blank"
                  >
                    <button className="button button--flex">
                      {" "}
                      Check out this course&nbsp;&nbsp;
                      <i className="uil uil-location-arrow"></i>
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="courses_content">
          <div>
            <i className="uil uil-html5-alt courses_icon"></i>
            <h3 className="courses_title">Learn HTML / CSS </h3>
          </div>

          <span onClick={() => toggleTab(3)} className="courses_button">
            Go to course{" "}
            <i
              className="uil uil-arrow-right 
            courses_button-icon"
            ></i>
          </span>

          <div
            className={
              toggleState === 3 ? "courses_modal active-modal" : "courses_modal"
            }
          >
            <div className="courses_modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times courses_modal-close"
              ></i>

              <h3 className="courses_modal-title">HTML 5 & CSS 3</h3>
              <p className="courses_modal-description">
                REASONS TO LEARN HTML/CSS
              </p>

              <ul className="courses_modal-courses grid">
                <li className="courses_modal-service">
                  <i
                    className="uil uil-check-circle 
                            courses_modal-icon"
                  ></i>
                  <p className="courses_modal-info">
                    Build and design visually appealing and responsive websites
                    that can adapt to various devices and screen sizes.
                  </p>
                </li>

                <li className="courses_modal-service">
                  <i
                    className="uil uil-check-circle 
                            courses_modal-icon"
                  ></i>
                  <p className="courses_modal-info">
                    Learn the foundational languages of the web and gain a
                    better understanding of how web pages are structured and
                    styled.
                  </p>
                </li>

                <li className="courses_modal-service">
                  <i
                    className="uil uil-check-circle 
                            courses_modal-icon"
                  ></i>
                  <p className="courses_modal-info">
                    Increase your employability, as knowledge of HTML/CSS is
                    essential for most front-end web development jobs and can
                    also be useful for jobs in marketing, design, and content
                    creation.
                  </p>
                </li>

                <li className="courses_modal-service">
                  <a
                    href="https://www.coursera.org/courses?query=html%20css"
                    target="_blank"
                  >
                    <button className="button button--flex">
                      {" "}
                      Check out this course&nbsp;&nbsp;
                      <i className="uil uil-location-arrow"></i>
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
