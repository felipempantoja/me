import React from 'react';
import TypedJSWrapper from './TypedJSWrapper';

import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="row">
          <img className="avatar" src="/me/img/avatar.png" alt="Avatar" />
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
          <TypedJSWrapper strings={[`Hi^300, I'm Felipe.^500 <br />I'm a software developer <br />based in Rio de Janeiro, Brazil.^500 <br />Contact me.^200 Any time.`]} />
        </h1>
        <div className="btn-group fadeIn">
          <a className="btn btn-full" href="#">Contact</a>
          <a className="btn btn-ghost" href="#">More about me</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
