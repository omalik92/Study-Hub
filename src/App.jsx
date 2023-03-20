import { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import "./App.css";
import Header from "./components/header/Header";
import MatHeader from "./components/header/MatHeader";
import Home from "./components/home/Home";
import Courses from "./components/courses/Courses";
import Player from './components/courses/Player';
import TimelineColor from "./components/timeline/Timeline";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Skills from "./components/skills/Skills";
import ResourcesDisplay from "./components/resources/ResourcesDisplay";
import Contact from './components/contact/Contact';
import MainPage from './components/main/MainPage';

function App() {
  const { user, authIsReady } = useAuthContext();
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Header />
          

          <Switch>
            <Route exact path="/">
              {user && <Home />}
              {user && <Courses />}
              {user && <Player />}
              {user && <TimelineColor />}
              {user && <Skills />}
              {user && <ResourcesDisplay />}
              {user && <Contact />}
              {user && <MainPage />}

              {!user && <Redirect to="/login" />}
            </Route>


            <Route path="/courses"></Route>
            <Route path="/login">
              {!user && <Login />} {user && <Redirect to="/" />}
            </Route>
            <Route path="/signup">
              {!user && <Signup />} {user && <Redirect to="/" />}
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
