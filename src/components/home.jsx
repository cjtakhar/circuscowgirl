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
                    <p className="info-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin malesuada urna sed luctus.</p>
                    <Link to="/events">
                        <button className="info-btn">Learn More</button>
                    </Link>
                </div>
                <div className="info">
                    <h2 className="info-title">Clinics</h2>
                    <p className="info-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin malesuada urna sed luctus.</p>
                    <Link to="/clinics">
                    <button className="info-btn">Learn More</button>
                    </Link>
                </div>
                <div className="info">
                    <h2 className="info-title">News</h2>
                    <p className="info-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin malesuada urna sed luctus.</p>
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