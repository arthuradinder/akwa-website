import React from 'react';

function Video() {
  return (
    <div className="container-wrapper video-container">
      <div className="container-fluid content-container">
        {/* Video */}
        <section id="video">
          <div className="row">
            <div className="col-xs-12">
              <div className="page-header">
                <h2 className="text-title white-title">Video</h2>
                <hr className="block-divider block-divider--white" />
                <p id="video-text" className="text-muted">
                  Watch our music video for "Daydream Believer"
                </p>
                <br />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <div>
                <video controls preload="metadata">
                  <source
                    src="./video/TheMonkees.mp4#t=0.5"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>
        {/* /.video */}
      </div>
    </div>
  );
}

export default Video;
