import { Link } from 'react-router-dom';
import Image1 from '../images/Fyera.jpeg';
import Image2 from '../images/heartambassadors.jpeg';

const HeartMath = () => {
    return (
        <div>
            <h1 className="title">HeartMath</h1>
            <div className="hm-image-container">
                <img src={Image1} alt="Kansas Carradine" className="hm-image"/>
            </div>
            <div className="hm-image-container">
                <img src={Image2} alt="Kansas Carradine" className="hm-image"/>
            </div>
            <div className="booking-container">
                < Link to="/book">
                <button className="pay-btn">Book</button>
                </Link>
            </div>
        </div>
    )
}

export default HeartMath