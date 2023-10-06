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
                    <p className="info-paragraph">View upcoming and past events</p>
                    <Link to="/events">
                        <button className="info-btn">Learn More</button>
                    </Link>
                </div>
                <div className="info">
                    <h2 className="info-title">Clinics</h2>
                    <p className="info-paragraph">Developing a deeper more meaningful connection</p>
                    <Link to="/clinics">
                    <button className="info-btn">Learn More</button>
                    </Link>
                </div>
                <div className="info">
                    <h2 className="info-title">Media</h2>
                    <p className="info-paragraph">Sights and sounds of Kansas</p>
                    < Link to="/news">
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