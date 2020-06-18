import React from "react";
import "./App.css";
// import AllPlayers from './Players/playerComponent'
import Contact from "./Contact/Contact";
import AboutMe from "./About-Me/AboutMe";
import Destinations from "./Destinations/Destinations";
import Home from "./Home/Home";
import { Route, NavLink, HashRouter } from "react-router-dom";

function App() {
  const homeRoute = "/";
  const aboutMeRoute = "/aboutme";
  const destinationsRoute = "/destinations";
  const contactRoute = "/contact";

  return (
    <HashRouter>
      <div className="HeaderBar">
        <h3>
          <NavLink className="NavLink" exact to={homeRoute}>Nathan's SPA</NavLink>
        </h3>
        <ul className="headerNav">
          <li className="HeaderNavItem">
            <NavLink className="NavLink" to={aboutMeRoute}>
              About Me
            </NavLink>
          </li>
          <li className="HeaderNavItem">
            <NavLink className="NavLink" to={destinationsRoute}>
              Destinations
            </NavLink>
          </li>
          <li className="HeaderNavItem">
            <NavLink className="NavLink" to={contactRoute}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      <body>
        <div className="content">
          <Route exact path={homeRoute} component={Home} />
          <Route path={aboutMeRoute} component={AboutMe} />
          <Route path={destinationsRoute} component={Destinations} />
          <Route path={contactRoute} component={Contact} />
        </div>
      </body>
    </HashRouter>
  );
}

export default App;
