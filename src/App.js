import React, { Component } from 'react';
import logo from './logo.svg';
import 'normalize.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <div className="row">
              <img className="avatar" src="/img/avatar.png" alt="Avatar" />
              <ul className="main-nav">
                <li><a href="#">About</a></li>
                <li><a href="#">Work</a></li>
                <li><a href="#">Personal Projects</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Social</a></li>
              </ul>
            </div>
          </nav>
          <div className="hero-text-box">
            <h1>
              Hi, I'm Felipe<br />
              I'm a software developer based in Rio de Janeiro, Brazil<br />
              Contact me. Any time.<br/>
              THis portifolio is under construction. Thanks. 
            </h1>
            <a className="btn btn-full" href="#">Contact</a>
            <a className="btn btn-ghost" href="#">More about me</a>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
