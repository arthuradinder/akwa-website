import React from 'react';

function Band() {
  return (
    <div className="container-wrapper">
      <div className="container band-container content-container">
        <section id="band">
          <div className="row">
            <div className="col-xs-12">
              <div className="page-header">
                <h2 className="text-title">Band</h2>
                <hr className="block-divider block-divider--black" />
                <p className="text-muted">About our band</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <p className="section-text">
                The Monkees are an American rock and pop band originally active between 1965 and 1971. They were formed in Los Angeles in 1965 for the American television series The Monkees, which aired from 1966 to 1968. The musical acting quartet was composed of Americans Micky Dolenz, Michael Nesmith and Peter Tork and British stage and television actor and singer Davy Jones.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div className="media band-member">
                <div className="media-left">
                  <img src="./images/dj.jpg" alt="Davy Jones" className="img-circle media-object" height="100" width="100" />
                </div>
                <div className="media-body">
                  <blockquote className="quote">
                    <p>"Once you're in, you're in. It's like the Mafia. Once a Monkee, always a Monkee."</p>
                    <footer>Davy Jones - <cite title="Twitter">Vocals</cite></footer>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="media band-member">
                <div className="media-left">
                  <img src="./images/pt.jpg" alt="Peter Tork" className="img-circle media-object" height="100" width="100" />
                </div>
                <div className="media-body">
                  <blockquote className="quote">
                    <p>"Pop music, disco music, and heavy metal music is about shutting out the tensions of life, putting it away."</p>
                    <footer>Peter Tork - <cite title="Twitter">Bass</cite></footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div className="media band-member">
                <div className="media-left">
                  <img src="./images/mn.jpg" alt="Michael Nesmith" className="img-circle media-object" height="100" width="100" />
                </div>
                <div className="media-body">
                  <blockquote className="quote">
                    <p>"I will honor your spine with a walk across it. Down peasant!"</p>
                    <footer>Michael Nesmith - <cite title="Twitter">Guitar</cite></footer>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="media band-member">
                <div className="media-left">
                  <img src="./images/md.jpg" alt="Mickey Dolenz" className="img-circle media-object" height="100" width="100" />
                </div>
                <div className="media-body">
                  <blockquote className="quote">
                    <p>"Before the Monkees I actually did have a life...I had another rock 'n roll band. One called Micky and the One Nighters. 'Cause that was it, one night. But what a night it was."</p>
                    <footer>Micky Dolenz - <cite title="Twitter">Vocals, Drums</cite></footer>
                  </blockquote>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Band;
