import React, { Component } from "react";
import axios from "axios";
import "./CssProject.css";

export default class CssProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorArray: [],
      eyeColor: "",
      mouthColor: "",
      faceColor: "",
      currentFeature: "eyes",
    };
  }

  changeColor = (color, facialFeature) => {
    switch (facialFeature) {
      case "eyes":
        this.setState({
          eyeColor: color,
        });
        break;
      case "mouth":
        this.setState({
          mouthColor: color,
        });
        break;
      default:
        // (face)
        this.setState({
          faceColor: color,
        });
        break;
    }
  };

  componentWillMount() {
    axios
      .get("https://api.color.pizza/v1/?goodnamesonly=true")
      .then((response) => {
        let test = response.data.colors.map((color) => {
          return color.hex;
        });

        this.setState({
          colorArray: Object.values(test).slice(1, 250),
          eyeColor: "white",
          mouthColor: "red",
          faceColor: "#ffb908",
        });
        console.log(this.state.colorArray);
      });
  }

  render() {
    return (
      <div>
        <span style={{ color: "white" }}>
          Color: {this.state.currentFeature}
        </span>
        <div className="buttonContainer">
          <button
            className="buttonOption"
            onClick={() => this.setState({ currentFeature: "eyes" })}
          >
            Eyes
          </button>
          <button
            className="buttonOption"
            onClick={() => this.setState({ currentFeature: "mouth" })}
          >
            Mouth
          </button>
          <button
            className="buttonOption"
            onClick={() => this.setState({ currentFeature: "face" })}
          >
            Face
          </button>
        </div>
        <div className="colorContainer">
          {this.state.colorArray.map((color) => {
            return (
              <div
                className="colorDiv"
                style={{ backgroundColor: color }}
                onClick={() =>
                  this.changeColor(color, this.state.currentFeature)
                }
              ></div>
            );
          })}
        </div>
        <div className="face" style={{ backgroundColor: this.state.faceColor }}>
          <div
            className="eye"
            style={{ backgroundColor: this.state.eyeColor }}
          ></div>
          <div
            className="eye"
            style={{ backgroundColor: this.state.eyeColor }}
          ></div>
          <div
            className="mouth"
            style={{ backgroundColor: this.state.mouthColor }}
          ></div>
        </div>
      </div>
    );
  }
}
