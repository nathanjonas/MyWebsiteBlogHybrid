import React, { Component } from "react";
import axios from "axios";
import "./Contact.css";

export default class Contact extends Component {
  state = {
    name: "",
    message: "",
    email: "",
    sent: false,
    buttonText: "Send Message",
  };

  formSubmit = (e) => {
    e.preventDefault();

    this.setState({
      buttonText: "...sending",
    });

    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };

    axios
      .post("https://contact-me-service-git-zeit-branch.nathanjonas.vercel.app/", data)
      .then((res) => {
        this.setState({ sent: true }, this.resetForm());
      })
      .catch(() => {
        console.log("Message not sent");
      });
  };

  resetForm = () => {
    this.setState({
      name: "",
      message: "",
      email: "",
      buttonText: "Message Sent",
    });
  };

  render() {
    return (
      <form className="contact-form" onSubmit={(e) => this.formSubmit(e)}>
        <div className="formComponent">
          <div className="labelText">Name:</div>
          <input
            onChange={(e) => this.setState({ name: e.target.value })}
            name="name"
            className="inputContainer"
            type="text"
            placeholder="Name..."
            value={this.state.name}
          />
        </div>
        <div className="formComponent">
          <div className="labelText">Email:</div>
          <input
            onChange={(e) => this.setState({ email: e.target.value })}
            name="email"
            className="inputContainer"
            type="email"
            placeholder="your@email.com"
            required
            value={this.state.email}
          />
        </div>
        <div className="formComponent">
          <div className="labelText">Message:</div>
          <textarea
            onChange={(e) => this.setState({ message: e.target.value })}
            name="message"
            className="inputContainer messageContainer"
            type="text"
            placeholder="Please write your message here"
            value={this.state.message}
            required
          />
        </div>

        <div className="formButton">
          <button className="button" type="submit">
            {this.state.buttonText}
          </button>
        </div>
      </form>
    );
  }
}
