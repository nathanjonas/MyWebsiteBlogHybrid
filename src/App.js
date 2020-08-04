import React, { useState } from "react";
import "./App.css";
import Contact from "./Contact/Contact";
import AboutMe from "./About-Me/AboutMe";
import Projects from "./Projects/Projects";
import Home from "./Home/Home";
import { Route, NavLink, HashRouter } from "react-router-dom";
import NavListItem from "./layout/NavListItem";
import SocialMediaHeader from "./layout/SocialMediaHeader";
import CssProject from "./Projects/ColorTheFace/CssProject";

const homeRoute = "/";
const aboutMeRoute = "/aboutme";
const projectsRoute = "/projects";
const contactRoute = "/contact";
const cssRoute = "/testProject";

function App() {
  const [isHomepage, setIsHomepage] = useState(false);

  return (
      <HashRouter>
        <SocialMediaHeader />

        <div className="HeaderBar">
          <div className={isHomepage ? "HeaderName" : "MinimizedHeaderName"}>
            <NavLink
              className="NavLink"
              exact
              to={homeRoute}
              onClick={() => setIsHomepage(true)}
            >
              <span className="HeaderBarDescriber">Designer | </span>
              Nathan Jonas
              <span className="HeaderBarDescriber">| Developer</span>
            </NavLink>
          </div>

          <div className={isHomepage ? "NavBar" : "MinimizedNavBar"}>
            <ul className="HeaderUl">
              <NavListItem
                route={aboutMeRoute}
                linkText="Who am I?"
                clickHandler={() => setIsHomepage(false)}
              />
              <NavListItem
                route={projectsRoute}
                linkText="Projects"
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

        <div className="content">
          <Route exact path={homeRoute} component={Home} />
          <Route path={aboutMeRoute} component={AboutMe} />
          <Route path={projectsRoute} component={Projects} />
          <Route path={contactRoute} component={Contact} />
          <Route path={cssRoute} component={CssProject} />
        </div>
      </HashRouter>
  );
}

export default App;
