import React, { Component } from "react";
import DestinationList from "./DestinationList";

export default class Destinations extends Component {
  render() {
    return (
      <div className="BodyComponent">
        <div className="BodyHeader">Destinations</div>
        {DestinationList.map((destination) => [
          <div>{destination.CountryName}</div>
        ])}
      </div>
    );
  }
}
