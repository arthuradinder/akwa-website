import React from 'react';

function BookingModal() {
  return (
    <div className="modal fade" id="bookingModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 className="modal-title" id="myModalLabel">Book The Monkees!</h4>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="name">Full Name*</label>
                <input type="text" className="form-control" id="name" placeholder="Full Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address*</label>
                <input type="email" className="form-control" id="email" placeholder="Email" required />
                <p className="help-block">We'll never share your email address with anyone</p>
              </div>
              <div className="form-group">
                <label htmlFor="event">Event Type*</label>
                <select className="form-control" id="event" required>
                  <option disabled value="" selected hidden>
                    Select an event type
                  </option>
                  <option>Wedding</option>
                  <option>Private Function</option>
                  <option>Christmas Party</option>
                  <option>Corporate Event</option>
                  <option>Funeral</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="date">Date*</label>
                <input type="date" className="form-control" id="date" required />
                <p className="help-block">* Required</p>
              </div>
              <div className="text-center">
                <input
                  className="btn btn-success"
                  type="submit"
                  name="btnADD"
                  id="btnADD"
                  value="Submit Booking"
                  onClick={(e) => {
                    e.preventDefault();
                    // Add your booking submission logic here
                    // You can call a function or use state to handle the submission
                  }}
                />
              </div>
              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingModal;
