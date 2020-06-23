import React, { useState } from "react";
import "./App.css";
// import AllPlayers from './Players/playerComponent'
import Contact from "./Contact/Contact";
import AboutMe from "./About-Me/AboutMe";
import Destinations from "./Destinations/Destinations";
import Home from "./Home/Home";
import { Route, NavLink, HashRouter } from "react-router-dom";
import NavListItem from "./layout/NavListItem";
import SocialMediaHeader from "./layout/SocialMediaHeader";

function App() {
  const homeRoute = "/";
  const aboutMeRoute = "/aboutme";
  const destinationsRoute = "/destinations";
  const contactRoute = "/contact";

  const [isHomepage, setIsHomepage] = useState(true);

  return (
    <HashRouter>
      <SocialMediaHeader />

      <div className="HeaderBar">
        <div className={isHomepage ? "HeaderName" : "MinimizedHeaderName"}>
          <NavLink className="NavLink" exact to={homeRoute} onClick={() => setIsHomepage(true)}>
            Nathan's Travel Blog
          </NavLink>
        </div>

        <div className={isHomepage ? "NavBar" : "MinimizedNavBar"}>
          <ul className="HeaderUl">
            <NavListItem
              route={aboutMeRoute}
              linkText="About Me"
              clickHandler={() => setIsHomepage(false)}
            />
            <NavListItem
              route={destinationsRoute}
              linkText="Destinations"
              clickHandler={() => setIsHomepage(false)}
            />
            <NavListItem
              route={contactRoute}
              linkText="Contact"
              clickHandler={() => setIsHomepage(false)}
            />
          </ul>
        </div>

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
