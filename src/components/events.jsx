import { Link } from 'react-router-dom';
import Image1 from '../images/heartmathhorsemanship.jpeg';
import Image2 from '../images/kansas-clinic-flyer.jpeg';
const Events = () => {
    return (
        <div className="events-container">
            <h1 className="title">Events</h1>
            <div className="events">
                <img src={Image1} alt="Kansas Carradine" className="events-image"/>
                <img src={Image2} alt="Kansas Carradine" className="events-image"/>
            </div>
            <div className="payment-container">
                < Link to="/book">
                <button className="pay-btn">Book</button>
                </Link>
            </div>
        </div>
    )
}

export default Events