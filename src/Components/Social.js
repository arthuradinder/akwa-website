import React from 'react';

function SocialFooter() {
  return (
    <div className="container-wrapper social-container">
      <footer>
        <div className="container-fluid content-container">
          <div className="row">
            <div className="col-xs-12">
              <div className="page-header">
                <h2 className="text-title social-title">Follow The Monkees</h2>
                <hr className="block-divider block-divider--black" />
                <br />
              </div>
              <ul className="social-list list-inline">
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>
              </ul>
              <br />
              <form className="contact-form" id="signup" method="get">
                <input
                  className="email-box"
                  name="email"
                  placeholder="Enter email to get updates"
                  required
                  type="email"
                />
                <input
                  className="btn--cta"
                  id="submit-button"
                  type="submit"
                  value="Subscribe"
                />
              </form>
              <br />
              <br />
              <p className="text-muted text-center">Created By Cian O'Gralaigh.</p>
              <br />
              <p className="text-center">
                <a id="back" href="#top">
                  Back to top
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SocialFooter;
