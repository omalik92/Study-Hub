import React from "react";
import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.css";
import './videoCard.css';

const videoProperties = [
  {
    src: "https://youtu.be/dGcsHMXbSOA",
    title: "Video Title 1",
    credit: "Video Credit 1",
  },
  {
    src: "https://youtu.be/jS4aFq5-91M",
    title: "Video Title 2",
    credit: "Video Credit 2",
  },
  {
    src: "https://youtu.be/mU6anWqZJcc",
    title: "Video Title 3",
    credit: "Video Credit 3",
  },
];

const VideoCard = () => {
  return (
    <div className="App">
      <Carousel>
        {videoProperties.map((videoObj, index) => {
          return (
            <Carousel.Item key={index}>
              <ReactPlayer
                url={videoObj.src}
                pip={true}
                controls={true}
                playing={true}
                
              />
              
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default VideoCard;