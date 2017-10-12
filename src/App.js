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
        </div>
      </div>
    );
  }
}

export default App;
