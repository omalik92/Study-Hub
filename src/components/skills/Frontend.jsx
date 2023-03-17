
import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const Frontend = () => {
  return (
    <div className="skills_content">
        <h3 className="skills_title">Frontend Developer</h3>

        <div className="skills_box">
                <div className="skills_group">

                <div className="skills_data">
                <i className="bx bx-badge-check"></i>

                <div>
                    <h3 className="skills_name">HTML</h3>
                    <span className="skills_level">Basic</span>
                </div>
                </div>

                <div className="skills_data">
                <i className="bx bx-badge-check"></i>

                <div>
                    <h3 className="skills_name">CSS</h3>
                    <span className="skills_level">Advanced</span>
                </div>
            </div>

            <div className="skills_data">
                <i className="bx bx-badge-check"></i>

                <div>
                    <h3 className="skills_name">JavaScript</h3>
                    <span className="skills_level">Basic</span>
                </div>
            </div>
        </div>

        <div className="skills_group">
                <div className="skills_data">
                <i className="bx bx-badge-check"></i>

                <div>
                    <h3 className="skills_name">Bootstrap</h3>
                    <span className="skills_level">Intermediate</span>
                </div>
                </div>

                <div className="skills_data">
                <i className="bx bx-badge-check"></i>

                <div>
                    <h3 className="skills_name">GIT</h3>
                    <span className="skills_level">Intermediate</span>
                </div>
            </div>

            <div className="skills_data">
                <i className="bx bx-badge-check"></i>

                <div>
                    <h3 className="skills_name">React</h3>
                    <span className="skills_level">Basic</span>
                </div>
            </div>

            
        </div>
      </div>
    </div>

  );
};

export default Frontend;
