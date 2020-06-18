import React, { Component } from "react";
import "./Contact.css";
 
export default class Contact extends Component {
  render() {
    return (
      <div className="ContactComponent">
        <span className="ContactHeader">Contact Me</span>
        <p>The easiest thing to do is post on
        our <a href="http://forum.kirupa.com">forums</a>.
        </p>
      </div>
    );
  }
}