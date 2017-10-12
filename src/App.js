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
          <h3>4. Content blocks</h3>
          <div className="message--subtle">
            <p>A very subtle message</p>
          </div>
          <div className="message--actionable">
            <p>A not so subtle message</p>
            <button>call to action</button>
          </div>
          <h3>5. Control directives</h3>
          <div className="article">Is it debugging?</div>
          <div className="box" />
          {[...Array(6)].map((x, i) => <div className={`item-${i + 1}`} key={i} />)}
          <h3>6. Media query bubbling</h3>
          <article>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum."
            </p>
          </article>
          <h3>7. Extending selectors</h3>
          <div className="animal">animal</div>
          <div className="dog">dog</div>
          <div className="cat">cat</div>
          <div className="giraffe">giraffe</div>
          <div className="lion">lion</div>
          <div className="join-actions">
            <button className="join-button">Join!</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
