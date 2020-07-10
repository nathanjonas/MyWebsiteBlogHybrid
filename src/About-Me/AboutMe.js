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
        {/* <img src="personalpic.jpg" alt="Italian Trulli" /> */}
        <h2 className="aboutMeHeader">Welcome to my site</h2>
        <div className="aboutMeBody">
          Hello world. I am a computer science student at the University of
          Cincinnati (UC), and I hope you enjoy this React project. Throughout
          my time at UC, I have been exposed to the digital world in the form of
          classroom and professional experience. I love it. I hope to continue
          my work upon graduation (04/2021) and begin my career as a software
          developer and designer.
        </div>
        <h2 className="aboutMeHeader">Check out my skills...</h2>
        <div className="searchBar">
          <input className="searchBarModule" type="text" value={filter} onChange={this.handleChange} placeholder="Search..."/>
        </div>
        <div className="skillContainer">
          {filteredSkills.map((skill) => {
            return <div class="skill">{skill}</div>;
          })}
        </div>
        <div className="test">

        </div>
      </div>
    );
  }
}
