import { Link } from 'react-router-dom';
import Image from '../images/kansas-clinic.jpeg';
import '../styles/clinics.css';

const Clinics = () => {
    return (
        <div className="clinics-container">
            <h1 className="title">Clinics</h1>
            <div className="clinics-image-container">
                <img src={Image} alt="Kansas Carradine" className="clinics-image"/>
            </div>
            <div className="booking-container">
                < Link to="/book">
                <button className="pay-btn">Book</button>
                </Link>
            </div>
        </div>
    )
}
export default Clinics