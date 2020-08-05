import React, { Component } from "react";

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
  "ASP.NET",
  "Vue",
  "React",
  "Django",
  "Windows",
  "MacOS",
  "Ubuntu",
  "Chrome Dev. Tools",
  "GitHub",
  "GitLab",
  "VS Code",
  "Node",
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
        <div className="aboutMeBody">
          Hello world. I am a computer science student at the <span style={{color:"#7f0000"}}>University of
          Cincinnati (UC)</span>, and I hope you enjoy this React project. Throughout
          my time at UC, I have been exposed to the digital world in the form of
          classroom and professional experience. I love it. I hope to continue
          my work upon graduation (04/2021) and begin my career as a software
          developer and designer.
        </div>
        <div className="workMethodsContainer">
          <ul className="workMethodsList">
            <li className="workMethodsOption">Front End</li>
            <li className="workMethodsOption">Back End</li>
            <li className="workMethodsOption">Data Processing</li>
          </ul>
        </div>
        <div className="searchBar">
          <input className="searchBarModule" type="text" value={filter} onChange={this.handleChange} placeholder="Search Skills"/>
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
