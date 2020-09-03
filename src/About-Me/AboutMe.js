import React, { Component } from "react";
import config from "./workexperience";

var techlist = [
  "jQuery",
  "AJAX",
  "Typescript",
  "Java",
  "C++",
  "C#",
  "SQL",
  "Python",
  "HTML",
  "JavaScript",
  "CSS",
  ".NET",
  "Vue",
  "React",
  "Preact",
  "Django",
  "Windows",
  "MacOS",
  "Ubuntu",
  "Chrome Dev. Tools",
  "GitHub",
  "GitLab",
  "VS Code",
  "Node",
  "Jest",
];

export default class AboutMe extends Component {
  state = {
    skills: techlist,
    filter: "",
  };

  handleChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { filter, skills } = this.state;

    const filteredSkills = skills.filter((item) => {
      return item.toLowerCase().includes(filter.toLowerCase());
    });

    return (
      <div className="aboutMe">
        <BodyHeader labelName="About Me" />
        <div className="aboutMeBody">
          Hello world. I am a computer science student at the{" "}
          <span style={{ color: "#7f0000" }}>
            University of Cincinnati (UC)
          </span>
          , and I hope you enjoy this React project. Throughout my time at UC, I
          have been exposed to the digital world in the form of classroom and
          professional experience. I love it. I hope to continue my work upon
          graduation (04/2021) and begin my career as a software developer and
          designer.
        </div>
        <BodyHeader labelName="Work Experience" />
        <div className="workContainer">
          {config.map((company) => {
            return (
              <div
                className="WEContainer"
                style={{ backgroundColor: company.PrimaryColor }}
              >
                <div class="WEName">
                  {company.Name}
                  <span className="WELocation">{company.Location}</span>
                </div>
                {company.Projects.map((project) => (
                  <div className="WEProject">{project}</div>
                ))}
              </div>
            );
          })}
        </div>
        <BodyHeader labelName="My Skills" />
        <div className="searchBar">
          <input
            className="searchBarModule"
            type="text"
            value={filter}
            onChange={this.handleChange}
            placeholder="Search Skills"
          />
        </div>
        <div className="skillContainer">
          {filteredSkills.map((skill) => {
            return <div class="skill">{skill}</div>;
          })}
        </div>
      </div>
    );
  }
}

const BodyHeader = (props) => {
  return (
    <div className="bodyHeaderContainer">
      <b className="headerSpan">{props.labelName}</b>
      <hr />
    </div>
  );
};
