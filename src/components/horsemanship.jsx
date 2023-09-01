import { Link } from 'react-router-dom';

const Horsemanship = () => {
    return (
        <div className="horsemanship">
        <h1 className="title">Horsemanship</h1>
        <div className="booking-container">
                < Link to="/book">
                <button className="pay-btn">Book</button>
                </Link>
            </div>
        </div>
    );
}
export default Horsemanship;