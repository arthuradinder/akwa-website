import React from 'react';

function Callout() {
  return (
    <div className="container-fluid callout-container">
      <div className="opaque-overlay">&nbsp;</div>
      {/* Callout */}
      <div className="row">
        <div className="col-xs-12">
          <section className="callout jumbotron text-center">
            <br /><br />
            <img className="img-logo center-block" alt="logo" src="./images/logo.png" />
            <br /><br />
            <h2 className="lead music-text">The Monkees: Greatest Hits </h2>
            <hr className="block-divider block-divider--white" />
            <p className="lead music-text">Available December 27th</p> <br />
            <p className="text-center">
              <a className="music-service lead">Amazon </a>
              <a className="music-service lead">iTunes </a>
              <a className="music-service lead">Spotify </a>
            </p>
          </section>
        </div>
      </div>
      {/* /.callout */}
    </div>
  );
}

export default Callout;
