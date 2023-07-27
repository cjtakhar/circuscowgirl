import '../styles/home.css';
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
                    <button className="info-btn">Learn More</button>
                </div>
                <div className="info">
                    <h2 className="info-title">Individual Sessions</h2>
                    <p className="info-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin malesuada urna sed luctus. Morbi vel condimentum sem, in laoreet leo. Integer eu augue vel risus egestas accumsan ut ac tellus.</p>
                    <button className="info-btn">Learn More</button>
                </div>
                <div className="info">
                    <h2 className="info-title">Equine Therapy</h2>
                    <p className="info-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin malesuada urna sed luctus. Morbi vel condimentum sem, in laoreet leo. Integer eu augue vel risus egestas accumsan ut ac tellus.</p>
                    <button className="info-btn">Learn More</button>
                </div>  
            </div>
            <div className="payment-container">
            <h2 className="pay-header">E-Payment Accepted</h2>
                <button className="pay-btn">Pay</button>
            </div>
            <div className="footer">
                <p>circuscowgirl © 2024</p>
            </div>
        </div>
    )
}

export default Home