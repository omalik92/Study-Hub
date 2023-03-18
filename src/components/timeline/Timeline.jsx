import * as React from "react";
import './timeline.css';
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import GridCard from "./GridCard";

export default function TimelineColor() {
  return (

    
    <section className="roadMap section" style={{marginTop:'50px'}}>
      <h2 className="section_title">Developer Road Map</h2>
    
      <span className="section_subtitle">Explore your learning journey</span>

      <GridCard />
    
    <div className="timelines-container">
    <div className="timeline-left">
    
    <Timeline position="alternate">
    
    <h3 style={{textAlign:'center', marginBottom:30}}>Frontend Developer</h3>
    <p style={{textAlign:'center', marginBottom:30}}>Path</p>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent>HTML</TimelineContent>
        </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" />
        </TimelineSeparator>

        <TimelineContent>CSS</TimelineContent>
      </TimelineItem>
      
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        

        <TimelineContent>JavaScript</TimelineContent>
        </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" />
        </TimelineSeparator>

        <TimelineContent>GIT</TimelineContent>
      </TimelineItem>
      
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent>Bootstrap</TimelineContent>
        </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" />
        </TimelineSeparator>

        <TimelineContent>React</TimelineContent>
      </TimelineItem>
        </Timeline>
        </div>

    <div className="timeline-right">
    <Timeline position="alternate">
    <h3 style={{textAlign:'center', marginBottom:30}}>Backend Developer</h3>
    <p style={{textAlign:'center', marginBottom:30}}>Path</p>
      
    <TimelineItem>
        <TimelineSeparator>
        <TimelineDot style={{background:'red'}} />
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent>Node JS</TimelineContent>
        </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
        
        <TimelineDot style={{background:'#5B00DE'}} />
        </TimelineSeparator>

        <TimelineContent>Python</TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot style={{background:'red'}} />
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent>TDD/BDD</TimelineContent>
        </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
        <TimelineDot style={{background:'#5B00DE'}} />
        </TimelineSeparator>

        <TimelineContent>React STATE</TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
        <TimelineDot style={{background:'red'}} />
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent>3rd Party APIs</TimelineContent>
        </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
        <TimelineDot style={{background:'#5B00DE'}} />
        </TimelineSeparator>

        <TimelineContent>CSS</TimelineContent>
      </TimelineItem>
      
    </Timeline>
    </div>
    </div>

    </section>
  );
}
