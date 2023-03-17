import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

export default function TimelineColor() {
  return (

    <section className="roadMap section" style={{marginTop:'100px'}}>
      <h2 className="section_title">Developer Road Map</h2>
      <span className="section_subtitle">Explore your learning journey</span>
    
    <div className="timelines-container">
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent>Secondary</TimelineContent>
        </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" />
        </TimelineSeparator>

        <TimelineContent>Success</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent>Secondary</TimelineContent>
        </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" />
        </TimelineSeparator>

        <TimelineContent>Success</TimelineContent>
      </TimelineItem>
      
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent>Secondary</TimelineContent>
        </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" />
        </TimelineSeparator>

        <TimelineContent>Success</TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent>Secondary</TimelineContent>
        </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" />
        </TimelineSeparator>

        <TimelineContent>Success</TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent>Secondary</TimelineContent>
        </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" />
        </TimelineSeparator>

        <TimelineContent>Success</TimelineContent>
      </TimelineItem>
      
    </Timeline>
    </div>
    

    </section>
  );
}
