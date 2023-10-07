import { useState } from "react";
import { Link } from "react-router-dom";
import photo1 from "../images/kansas-horse-1.jpg";
import photo2 from "../images/kansas-horse-2.jpg";
import photo3 from "../images/kansas-horse-3.jpg";
import photo4 from "../images/kansas-horse-4.jpg";
import photo5 from "../images/kansas-horse-5.jpg";
import Testimonial1 from "./testimonial1";
import "../styles/horsemanship.css";

const Horsemanship = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const photos = [photo1, photo2, photo3, photo4, photo5];

  const nextPhoto = () => {
    setCurrentPhoto((prevPhoto) => (prevPhoto + 1) % photos.length);
  };
  const prevPhoto = () => {
    setCurrentPhoto((prevPhoto) => (prevPhoto === 0 ? photos.length - 1 : prevPhoto - 1));
  };
  
  

  return (
    <div className="horsemanship">
      <h1 className="title">Horsemanship</h1>
      <div className="horsemanship-container">
        <button className="nav-button left" onClick={prevPhoto}>
          {"<"}
        </button>
        <div className="photo-corral">
          <img
            src={photos[currentPhoto]}
            alt="horsemanship photos"
            className="horsemanship-image"
          />
        </div>
        <button className="nav-button right" onClick={nextPhoto}>
          {">"}
        </button>
      </div>

      <div className="horsemanship-info">
        <div className="info-title-container">
          <h2 className="info-title">Connection. Trust. Unity.</h2>
        </div>
        <div className="horsemanship-paragraph">
          <p>These noble qualities are the goals for most horse lovers.</p>
          <p>How do we achieve them?</p>
          <p>
            To navigate through the wealth of information available today, we
            need to be able to access our inner guidance. I feel it is a
            privilege to aid individuals in establishing a clear connection with
            themselves, understand their conscious and unconscious movements,
            and work on removing limiting inner attitudes that interfere with
            clear communicaton. The goal is for my clients to be able to connect
            with the wisdom of their own hearts in order to know what is the
            appropriate action to take when working with their equine partner,
            either mounted or on the ground. My background in English, Western,
            Classical Dressage, Liberty, Roman Riding and Trick Riding means
            that I adapt my approach to the needs of each situation.
          </p>
          <p>
            More and more, I see the value of connecting with our horses on an
            energetic level that is not dependent on physical proximity. I am
            delighted to begin to publicly share these skills and techniques
            that I have used privately for the past decade in my work with
            horses in entertainment venues around the world.
          </p>
          <p>
            I teach breathwork, HeartMath and Self-awareness practices to
            support a confident connection as you navigate through the vast
            ocean of modern horsemanship.
          </p>
          <p>
            From a place of greater self-awareness and receptivity, then the
            technical part of working with your horse can be addressed.
          </p>
        </div>
      </div>
      <div>
        <Testimonial1 />
      </div>
      <div className="booking-container">
        <Link to="/book">
          <button className="pay-btn">Book</button>
        </Link>
      </div>
    </div>
  );
};
export default Horsemanship;
