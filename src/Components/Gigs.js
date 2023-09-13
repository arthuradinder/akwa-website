import React from 'react';

function Gigs() {
  return (
    <div className="container-wrapper gigs-container">
      <div className="gig-opaque-overlay">&nbsp;</div>
      <div className="container-fluid  content-container ">
        {/* Gigs */}
        <section id="gigs">
          <div className="row">
            <div className="col-xs-12">
              <div className="page-header">
                <h2 className="text-title white-title">Gigs</h2>
                <hr className="block-divider block-divider--white" />
                <p className="gigs-text text-muted">See us live in action! </p>
                <br />
              </div>
            </div>
          </div>
          <div className="row gigs-section">
            <div className="col-xs-12 col-md-12 ">
              <div className="media">
                <div className="gigs-table text-center">
                  <table className="table gigs-table ">
                    <thead></thead>
                    <tbody className="text-center">
                      <tr className="visible-sm visible-md visible-lg">
                        <td className="soldout">28/12/17</td>
                        <td className="soldout">Brooklyn, New York</td>
                        <td className="soldout"> Beacon Theatre</td>
                        <td className="dead-link soldout">
                          <h4><span className="label label-danger">Sold Out! </span></h4>
                        </td>
                      </tr>
                      <tr>
                        <td>04/05/18</td>
                        <td>Los Angeles, California</td>
                        <td>The Roxy</td>
                        <td><a href="#">Buy Tickets</a></td>
                      </tr>
                      <tr>
                        <td>08/06/18</td>
                        <td>Chicago, Illinois</td>
                        <td>House of Blues</td>
                        <td><a href="#"> Buy Tickets</a></td>
                      </tr>
                      <tr>
                        <td>19/09/18</td>
                        <td>Toronto, Canada</td>
                        <td>Massey Hall</td>
                        <td><a href="#"> Buy Tickets</a></td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                </div>
                <div className="booking-container text-center">
                  <button
                    type="button"
                    className="btn btn-info btn-lg"
                    data-toggle="modal"
                    data-target="#bookingModal"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /.gigs */}
      </div>
    </div>
  );
}

export default Gigs;
