import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header/Header";
import MatHeader from"./components/header/MatHeader"
import Home from "./components/home/Home";
import Courses from "./components/courses/Courses";
import TimelineColor from "./components/timeline/Timeline";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        
        <Switch>
          <Route exact path="/">
            <Home />
            <Courses />
            <TimelineColor />
            <Skills />

          </Route>
          <Route path="/courses"></Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
