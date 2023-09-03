import { useState } from 'react';
import { Link } from 'react-router-dom';
import photo1 from '../images/kansas-horse-1.jpg';
import photo2 from '../images/kansas-horse-2.jpg';
import photo3 from '../images/kansas-horse-3.jpg';
import photo4 from '../images/kansas-horse-4.jpg';
import photo5 from '../images/kansas-horse-5.jpg';
import '../styles/horsemanship.css';

const Horsemanship = () => {
    const [currentPhoto, setCurrentPhoto] = useState(0);
    const photos = [
        photo1,
        photo2,
        photo3,
        photo4,
        photo5,
    ];

    const nextPhoto = () => {
        setCurrentPhoto((prevPhoto) => (prevPhoto + 1) % photos.length);
    };

    const prevPhoto = () => {
        setCurrentPhoto((prevPhoto) => (prevPhoto - 1 + photos.length) % photos.length);
    };

    return (
        <div className="horsemanship">
        <h1 className="title">Horsemanship</h1>
        <div className="photo-corral">
  <button className="nav-button left" onClick={prevPhoto}>
    {"<"} {/* Use the < symbol */}
  </button>
  <img src={photos[currentPhoto]} alt="horsemanship photos" className="horsemanship-image"/>
  <button className="nav-button right" onClick={nextPhoto}>
    {">"} {/* Use the > symbol */}
  </button>
</div>
        <div className="booking-container">
                <Link to="/book">
                <button className="pay-btn">Book</button>
                </Link>
            </div>
        </div>
    );
}
export default Horsemanship;
