import React, { useState } from "react";
import "./player.css";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Button from "@mui/material/Button";
import ReactPlayer from "react-player";
import Vid from "../home/Vid";

export default function Player() {
  const [videoUrl, setVideoUrl] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleLinkClick = (event) => {
    event.preventDefault();
    const url = event.target.href;
    setVideoUrl(url);
    setIsPlaying(true);
  };

  const handlePlayerClick = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <Box
      sx={{
        display: "block",
        flexDirection: "column",
        alignItems: "center",
        margin: 10,
      }}
    >
     <h2 className="section_title">Featured Tutorials</h2>
    
    <span className="section_subtitle">Click below to get started</span>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          mb: 3,
        }}
      >
      
        <button
          className="button button--flex player"
          onClick={() => setVideoUrl("https://youtu.be/dGcsHMXbSOA")}
        >
          React Tutorial&nbsp;&nbsp;
          <i className="uil uil-location-arrow"></i>
        </button>
        <button
          className="button button--flex player"
          onClick={() => setVideoUrl("https://youtu.be/jS4aFq5-91M")}
        >
          JavaScript Tutorial&nbsp;&nbsp;
          <i className="uil uil-location-arrow"></i>
        </button>
        <button
          className="button button--flex player"
          onClick={() => setVideoUrl("https://youtu.be/mU6anWqZJcc")}
        >
          HTML/CSS Tutorial&nbsp;&nbsp;
          <i className="uil uil-location-arrow"></i>
        </button>
      </Box>

      <Card
        component="li"
        sx={{
          minWidth: "100%",
          minHeight: 515,
          flexGrow: 1,
          borderRadius: 8,
          
        }}
      >
        {videoUrl && (
          <ReactPlayer
            url={videoUrl}
            playing={isPlaying}
            controls
            width="100%"
            height="100%"
            onClick={handlePlayerClick}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
              padding: 12,
            }}
          />
        )}
        <Vid />
        <CardContent
          onClick={handlePlayerClick}
          style={{
            position: "relative",
            zIndex: 2,
            padding: 0,
            margin: 0,
            borderRadius: 8,
          }}
        ></CardContent>
      </Card>
    </Box>
  );
}
