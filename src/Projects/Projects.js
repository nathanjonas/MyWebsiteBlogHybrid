import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import CssProject from "./ColorTheFace/CssProject";
import config from "./ProjectList";

const projects = Object.values(config.projects);

export default class Projects extends Component {
  render() {
    return (
      <div>
        <div className="ProjectsContainer">
          <span className="warning">
            I've only had time to upload this one so far!
          </span>
          {projects.map((project) => {
            return (
              <div
                className="ProjectContainer"
                style={{ backgroundColor: project.PrimaryColor }}
              >
                <div className="ProjectHeader">{project.Name}</div>
                <div className="ProjectDescription">
                  {project.ProjectDescription}
                </div>
                <NavLink
                  className="ViewProjectLink"
                  style={{ color: project.PrimaryColor }}
                  to={project.Route}
                >
                  Click Here!
                </NavLink>
                <Route path={project.Route} component={() => <CssProject />} />
                <div className="ViewGithubLink">
                  <a className="GithubLink" href={project.GithubLink}>
                    Check this out on Github
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
