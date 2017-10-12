import React, { Component } from "react";
import logo from "./logo.svg";

class App extends Component {
  handlePrefixChange() {
    const element = document.getElementsByTagName("body")[0];
    element.classList.toggle("blue");
  }
  render() {
    return (
      <div className="application">
        <header className="application__header">
          <img src={logo} className="application__logo" alt="logo" />
          <h1 className="application__title">sassy-corgi</h1>
        </header>
        <div className="content">
          <h3>1. Prefixing parent selector references</h3>
          <p>
            <a onClick={this.handlePrefixChange}>I'm a link that should be red but with a "blue" body I change</a>
          </p>
          <h3>2. Variable defaults</h3>
          <p className="message">
            A message to you, Rudy<br />
            A message to you
          </p>
          <h3>3. Data structures</h3>
          <h4>3.1 Lists</h4>
          <ol>
            <li className="color--1">somewhere</li>
            <li className="color--2">over</li>
            <li className="color--3">the</li>
            <li className="color--4">rainbow</li>
          </ol>
          <h4>3.2 Maps</h4>
          <div className="responsive-div" />
        </div>
      </div>
    );
  }
}

export default App;
