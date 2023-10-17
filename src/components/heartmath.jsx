import { Link } from 'react-router-dom';
import Image3 from '../images/coherence-science.jpg';
import Testimonial2 from './testimonial2';
import '../styles/heartmath.css';

const HeartMath = () => {
    return (
        <div className="heartmath-container">
            <h1 className="title">HeartMath</h1>
            <div className="heartmath-info">
                <img src={Image3} alt="HeartMath Hands" className="hm-hand"/>
                <div className="paragraph-container">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum risus ut iaculis vestibulum. Nulla massa sapien, laoreet sit amet accumsan vel, venenatis ut quam. Nunc nec bibendum diam. Cras sodales pretium bibendum. Aliquam pellentesque tellus a fermentum pellentesque. Donec sed accumsan elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                <p> Curabitur vulputate nibh eget enim consequat, sed congue turpis laoreet. Vestibulum lobortis arcu in justo bibendum vestibulum. Etiam porta egestas tortor ut varius. Integer vel urna ultrices, dignissim risus eget, faucibus ante. Donec metus arcu, pretium non tempor ut, tincidunt at quam. Nam felis lectus, tincidunt a turpis vel, vestibulum iaculis elit. Integer lacinia luctus felis eget pellentesque.</p>
                <p>Proin ornare, felis eget finibus iaculis, ligula dui varius arcu, vitae laoreet dui turpis sed nulla. Praesent porttitor consectetur congue.</p>
                </div>
            </div>
            <div className="testimonial-section">
                {/* < Testimonial2 /> */}
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