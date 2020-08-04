import React, { Component } from "react";
import { connect } from "react-redux";
import "./CssProject.css";

const mapStateToProps = ({ colors }) => ({
  colors,
});

class CssProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eyeColor: "blue",
      mouthColor: "red",
      faceColor: "yellow",
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
        this.setState({
          faceColor: color,
        });
        break;
    }
  };

  render() {
    return (
      <div>
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
        <div className="chooseColorLine">
          Please choose a color for Mr.Smiley's{" "}
          <b>{this.state.currentFeature}</b>
        </div>
        <div className="colorContainer">
          {this.props.colors.slice(0, 600).map((color) => {
            return (
              <div
                className="colorDiv"
                style={{ backgroundColor: color.hex }}
                onClick={() =>
                  this.changeColor(color.hex, this.state.currentFeature)
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

export default connect(mapStateToProps)(CssProject);
