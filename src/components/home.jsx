import '../styles/home.css';
import { Link } from 'react-router-dom';
import Image from '../images/kansas.jpg';

const Home = () => {
    return (
        <div className="home-container">
            <div className="header-container">
                <img src={Image} alt="Kansas Carradine" className="header-image"/>
            </div>
            <div className="subtitle-container">
                <h1 className="services-title">Services</h1>
            </div>
            <div className="info-container">
                <div className="info">
                    <h2 className="info-title">Live Events</h2>
                    <p className="info-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin malesuada urna sed luctus. Morbi vel condimentum sem, in laoreet leo. Integer eu augue vel risus egestas accumsan ut ac tellus.</p>
                    <Link to="/events">
                        <button className="info-btn">Learn More</button>
                    </Link>
                </div>
                <div className="info">
                    <h2 className="info-title">HeartMath</h2>
                    <p className="info-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin malesuada urna sed luctus. Morbi vel condimentum sem, in laoreet leo. Integer eu augue vel risus egestas accumsan ut ac tellus.</p>
                    <Link to="/heartmath">
                    <button className="info-btn">Learn More</button>
                    </Link>
                </div>
                <div className="info">
                    <h2 className="info-title">Equine Therapy</h2>
                    <p className="info-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin malesuada urna sed luctus. Morbi vel condimentum sem, in laoreet leo. Integer eu augue vel risus egestas accumsan ut ac tellus.</p>
                    < Link to="/education">
                    <button className="info-btn">Learn More</button>
                    </Link>
                </div>  
            </div>
            <div className="payment-container">
                <button className="pay-btn">Pay</button>
            </div>
            <div className="footer">
                <p>circuscowgirl © 2023</p>
            </div>
        </div>
    )
}

export default Home