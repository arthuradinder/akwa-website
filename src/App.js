import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.min.js'; // Import Bootstrap JavaScript

import Navbar from './Components/Navbar'; // Importing Navbar component
import Band from './Components/Band'; // Importing Band component
import BookingModal from './Components/BookingModal'; // Importing BookingModal component
import Callout from './Components/Callout'; // Importing Callout component
import Gallery from './Components/Gallery'; // Importing Gallery component
import Gigs from './Components/Gigs'; // Importing Gigs component
import Music from './Components/Music'; // Importing Music component
import Video from './Components/Video'; // Importing Video component
import Social from './Components/Social'; // Importing Social component

function App() {
  const [showGallery, setShowGallery] = useState(false);

  const openModal = () => {
    setShowGallery(true);
  };

  const closeModal = () => {
    setShowGallery(false);
  };

  const disableButton = (button) => {
    button.disabled = true;
    button.value = "Booking Sent";
    alert("Booking Sent");
    button.form.submit();
  };

  return (
    <div>
      <Navbar />
      <Callout />
      <Band />
      <Gigs />
      <Music />
      <Gallery />
      <Video />
      <Social />
      <BookingModal />

      {/* Your React components and content */}
      <button onClick={openModal}>Open Modal</button>
      {showGallery && (
        <div id="gallery" className="modal">
          <div className="modal-content">
            {/* Gallery content */}
            <span onClick={closeModal} className="close">&times;</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
