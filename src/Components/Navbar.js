import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-default navbar-static-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <div id="mobile-nav" className="navbar-brand visible-xs active">
            <a href="index.html">The Monkees</a>
          </div>
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li>
              <a href="#band">Band</a>
            </li>
            <li>
              <a href="#gigs">Gigs</a>
            </li>
            <li>
              <a href="#music">Music</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#video">Video</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
