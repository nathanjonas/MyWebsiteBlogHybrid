import React, { Component } from "react";
import "./Contact.css";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      message: "",
    };
  }

  handleFormSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <h2>Contact Me</h2>
        </div>
        <form action="/action_page.php" className="formContainer">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="First Name..."
            value={this.state.fname}
            onChange={(e) => this.setState({ fname: e.target.value })}
          />
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Last Name..."
            value={this.state.lname}
            onChange={(e) => this.setState({ lname: e.target.value })}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email Address..."
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <label htmlFor="message">Write Me A Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write something.."
            style={{ height: "170px" }}
            value={this.state.message}
            onChange={(e) => this.setState({ message: e.target.value })}
          ></textarea>
          <div style={{ textAlign: "center" }}>
            <input
              type="submit"
              value="Submit"
              className="submitButton"
              onClick={(e) => this.handleFormSubmit(e)}
            />
          </div>
        </form>
      </div>
    );
  }
}
