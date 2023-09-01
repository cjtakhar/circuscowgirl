import { Link } from 'react-router-dom';
import Image from '../images/kansas-roping.jpg';

const About = () => {
    return (
        <div className="about">
            <h1 className="title">About</h1>
            <div className="about-image-container">
                <img src={Image} alt="Kansas Carradine" className="about-image"/>
            </div>  
            <div className="about-container">
                <p className="about-paragraph">Kansas Carradine is a globally acclaimed professional horsewoman with a lifelong dedication to her craft. Since the age of eleven, she has entertained audiences around the world, demonstrating her exceptional talents as a trick rider, roman rider, and lasso artist.</p>
                <p className="about-paragraph">Some of her performance credits include Hidalgo, Heartland, the World Equestrian Games, Queen Elizabeth’s Diamond Jubilee, National Finals Rodeo, appearances on MTV, ESPN, CBS, Equitana, Cheval Passion and Equifest. She has been featured in publications such as Sports Illustrated, Western Horseman, Cowboy & Indians, and the LA Times. With Cavalia, she toured over five continents as a featured soloist, roper, rider, and trainer.</p>
                <p className="about-paragraph">Kansas is a HeartMath Certified Trainer and SkyHorse Equine Guided Educator and incorporates her unique skills into her training and coaching; bridging science, spirituality, horsemanship and heart. Through her workshops and teachings, she helps individuals activate their own heart intelligence for improved emotional self-regulation, self-confidence, health, connection, and performance. </p>
                <p className="about-paragraph">Following the wisdom and power of her heart, Kansas has made a positive impact through her service work with G20/C20 Presidency in India as  Project Manager for the Fyera Foundation, as well as outreach in indigenous communities and fundraising for the Humane Society, Equestrian Aid Foundation, Wild Beauty Foundation, Compton Cowboys, and Embracing the World Charities. </p>
            </div>
            <div className="payment-container">
                < Link to="/book">
                <button className="pay-btn">Book</button>
                </Link>
            </div>
        </div>
    )
}

export default About