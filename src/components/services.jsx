import { Link } from "react-router-dom";
import "../styles/services.css";

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="title">Services</h1>
      <div className="services">
        <div className="service-info">
          <h2 className="service-title">Horsemanship</h2>
          <p className="service-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis
          </p>
          <Link
            to="/horsemanship"
            style={{ textDecoration: "none", color: "white" }}
          >
            <button className="info-btn">Learn More</button>
          </Link>
        </div>
        <div className="service-info">
          <h2 className="service-title">HeartMath</h2>
          <p className="service-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis.
          </p>
          <Link
            to="/heartmath"
            style={{ textDecoration: "none", color: "white" }}
          >
            <button className="info-btn">Learn More</button>
          </Link>
        </div>
        <div className="service-info">
          <h2 className="service-title">Clinics</h2>
          <p className="service-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis.
          </p>
          <Link
            to="/clinics"
            style={{ textDecoration: "none", color: "white" }}
          >
            <button className="info-btn">Learn More</button>
          </Link>
        </div>
        <div className="service-info">
          <h2 className="service-title">C20</h2>
          <p className="service-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis.
          </p>
          <Link
            to="/c20"
            style={{ textDecoration: "none", color: "white" }}
          >
            <button className="info-btn">Learn More</button>
          </Link>
        </div>
      </div>
      <div className="booking-container">
        <Link to="/book">
          <button className="pay-btn">Book</button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
