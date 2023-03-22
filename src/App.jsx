import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Courses from "./components/courses/Courses";
import Player from "./components/courses/Player";
import VideoCard from './components/courses/VideoCard';
import GridCard from './components/timeline/GridCard';
import TimelineColor from "./components/timeline/Timeline";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Skills from "./components/skills/Skills";
import ResourcesDisplay from "./components/resources/ResourcesDisplay";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  const { user, authIsReady } = useAuthContext();
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              {user && <Header />}
              {user && <Home />}
              {user && <Courses />}
              {/* {user && <VideoCard />} */}
              {user && <Player />}
             

              {user && <GridCard />}
              {/* {user && <TimelineColor />} */}
              {user && <Skills />}
              {user && <Footer />}
              {!user && <Redirect to="/login" />}
            </Route>

            <Route exact path="/resources">
              {user && <Header />}
              {user && <ResourcesDisplay />}
              {user && <Footer />}
              {!user && <Redirect to="/login" />}
            </Route>

            <Route exact path="/contact">
              {user && <Header />}
              {user && <Contact />}
              {user && <Footer />}
              {!user && <Redirect to="/login" />}
            </Route>

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
