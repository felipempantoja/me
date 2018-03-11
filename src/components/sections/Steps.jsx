import React from 'react';

import './Steps.css'

const Steps = () => {
  return (
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
  );
};

export default Steps;
