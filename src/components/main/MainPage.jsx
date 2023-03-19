import React, { useState } from "react";
import SearchBar from "./SearchBar";
import './searchbar.css';

const MainPage = () => {
  return (
    <div className="main-page center">
      <h1>Find your next course</h1>
      <SearchBar />
    </div>
  );
};

export default MainPage;
