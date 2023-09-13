import React from 'react';

function Gallery() {
  return (
    <div className="container-wrapper gallery-container">
      <div className="opaque-overlay">&nbsp;</div>
      <div className="container-fluid content-container">
        <section id="gallery">
          <div className="row">
            <div className="col-xs-12">
              <div className="page-header">
                <h2 className="text-title white-title">Gallery</h2>
                <hr className="block-divider block-divider--white" />
                <p id="gallery-text" className="text-muted">
                  See our gallery
                </p>
                <br />
              </div>
            </div>
          </div>
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="item active">
                <img className="center-block gallery-img" src="./images/album.jpg" alt="The Monkees" />
                <div className="carousel-caption">
                  <h3>More Greatest Hits of The Monkees</h3>
                </div>
              </div>
              <div className="item">
                <img className="center-block gallery-img" src="./images/album2.jpg" alt="album cover" />
                <div className="carousel-caption">
                  <h3>The Very Best of The Monkees</h3>
                </div>
              </div>
              <div className="item">
                <img className="center-block gallery-img" src="./images/band.jpg" alt="New York" />
                <div className="carousel-caption">
                  <h3>The Monkees</h3>
                </div>
              </div>
            </div>
            <br /><br /><br /><br />
            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Gallery;
