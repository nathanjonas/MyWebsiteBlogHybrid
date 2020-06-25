import React, { Component } from "react";
import ProjectList from "./ProjectList";

export default class Projects extends Component {
  render() {
    return (
      <div className="BodyComponent">
        <div className="BodyHeader">Destinations</div>
        {ProjectList.map((destination) => [
          <div>{destination.CountryName}</div>
        ])}
      </div>
    );
  }
}
