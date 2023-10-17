import '../styles/home.css';
import { Link } from 'react-router-dom';
import Image from '../images/kansas.jpg';

const Home = () => {
    return (
        <div className="home-container">
            <div className="header-container">
                <img src={Image} alt="Kansas Carradine" className="header-image"/>
            </div>
            <div className="info-container">
                <div className="info">
                    <h2 className="info-title">Events</h2>
                    <Link to="/events">
                        <button className="info-btn">Learn More</button>
                    </Link>
                </div>
                <div className="info">
                    <h2 className="info-title">Clinics</h2>
                    <Link to="/clinics">
                    <button className="info-btn">Learn More</button>
                    </Link>
                </div>
                <div className="info">
                    <h2 className="info-title">Media</h2>
                    < Link to="/media">
                    <button className="info-btn">Learn More</button>
                    </Link>
                </div>  
            </div>
            <div className="booking-container">
                < Link to="/book">
                <button className="pay-btn">Book</button>
                </Link>
            </div>
            <div className="footer">
                <p>circuscowgirl © 2023</p>
            </div>
        </div>
    )
}

export default Home