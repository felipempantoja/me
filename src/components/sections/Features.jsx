import React from 'react';

import './Features.css';

const Features = () => {
  return (
    <section className="section-features">
      <div className="row">
        <h2>What do you need?</h2>
        <p className="long-copy">
          Tell me about your company needs. You need a brand new website? Or maybe automatize some internal processes?
           I can help you out with this and further more...
        </p>
      </div>

      <div className="row">
        <div className="col span-1-of-4 box">
          <i className="ion-md-thumbs-up icon-big"></i>
          <h3>Strong technical experience</h3>
          <p className="">
            With 12+ years of experience I can provide solution
            a wide-range of applications from e-commerce, web and system tools, small CRM and so on.
          </p>
        </div>
        <div className="col span-1-of-4 box">
          <i className="ion-md-heart icon-big"></i>
          <h3>Java, Javascript, PHP, what else?</h3>
          <p className="">
            I have a vast experience in developing Java EE applications, but also Javascript
            witch I've been working with lately. AngularJS is an old friend and React a new one, and we get along well.
            As a senior developer I must say that a development platform is never a problem
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
  );
};

export default Features;
