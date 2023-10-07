import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image1 from '../images/circuscowgirlclinic.png';
import Image2 from '../images/HeartMathHorsemanship.png';
import Image3 from '../images/heartmathhorsemanship.jpeg';
import Image4 from '../images/kansas-clinic-flyer.jpeg';
import '../styles/events.css';

const Events = () => {
  const [modalImage, setModalImage] = useState(null);

  // Function to open the modal
  const openModal = (image) => {
    setModalImage(image);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="events-container">
      <h1 className="title">Events</h1>
      <div className="events">
        {/* Map through your images and display them */}
        {[Image1, Image2, Image3, Image4].map((image, index) => (
          <div className="events-image-container" key={index}>
            <img
              src={image}
              alt={`Event ${index + 1}`}
              className="events-image"
              onClick={() => openModal(image)}
            />
          </div>
        ))}
      </div>
      <div className="booking-container">
        <Link to="/book">
          <button className="pay-btn">Book</button>
        </Link>
      </div>

      {/* Modal for full-size image */}
      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close-button" onClick={closeModal}>
            &times;
          </span>
          <img src={modalImage} alt="Full-size Event" className="modal-content" />
        </div>
      )}
    </div>
  );
};

export default Events;
