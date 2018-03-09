import React, { Component } from 'react';
import TypedJSWrapper from './TypedJSWrapper'
import logo from './logo.svg';
import 'normalize.css';
import './App.css';
import 'ionicons/dist/css/ionicons.min.css';

class App extends Component {
  render() {
    return (
      <div>
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

        <section className="section-features">
          <div className="row">
            <h2>Get food fast &mdash; not fast food</h2>
            <p className="long-copy">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>

          <div className="row">
            <div className="col span-1-of-4 box">
              <i className="ion-md-heart icon-big"></i>
              <h3>Up to 365 days/year</h3>
              <p className="">
                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
            <div className="col span-1-of-4 box">
              <i className="ion-md-heart icon-big"></i>
              <h3>Up to 365 days/year</h3>
              <p className="">
                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
            <div className="col span-1-of-4 box">
              <i className="ion-md-heart icon-big"></i>
              <h3>Up to 365 days/year</h3>
              <p className="">
                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
            <div className="col span-1-of-4 box">
              <i className="ion-md-heart icon-big"></i>
              <h3>Up to 365 days/year</h3>
              <p className="">
                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
          </div>
        </section>

        <section className="section-projects">
          <ul className="projects-showcase clearfix">
            {[1, 1, 1, 1, 1, 1, 1, 1].map(e =>
              <li>
                <image className="project-image">
                  <img src="/me/img/mediare.png" />
                </image>
              </li>
            )}
          </ul>
        </section>

        <section className="section-steps" id="works">
          <div className="row">
            <h2>How it works &mdash; Simple as 1, 2, 3</h2>
          </div>
          <div className="row">
            <div className="col span-1-of-2 steps-box">
              <img src="/me/img/app-iPhone.png" alt="Omnifood app on iPhone" className="app-screen" />
            </div>
            <div className="col span-1-of-2 steps-box">
              <div className="works-step">
                <div>1</div>
                <p>Choose the subscription plan that best fits your needs and sign up today.</p>
              </div>
              <div className="works-step">
                <div>2</div>
                <p>Order your delicious meal using our mobile app or website. Or you can even call us!</p>
              </div>
              <div className="works-step">
                <div>3</div>
                <p>Enjoy your meal after less than 20 minutes. See you the next time!</p>
              </div>

              <a href="#" className="btn-app"><img src="/me/img/download-app.svg" alt="App Store Button" /></a>
              <a href="#" className="btn-app"><img src="/me/img/download-app-android.png" alt="Play Store Button" /></a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
