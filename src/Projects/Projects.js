import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import CssProject from "./ColorTheFace/CssProject";
import config from "./projectList";

const projects = Object.values(config.projects);

export default class Projects extends Component {
  render() {
    return (
      <div>
        <div className="ProjectContainer">
          <div className="ProjectContainerHeader">My Projects</div>
          {projects.map((project) => {
            return (
              <div
                className="ProjectObject"
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
                <Route
                  path={project.Route}
                  component={() => (
                    <CssProject />
                  )}
                />
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
