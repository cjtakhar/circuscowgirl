import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/book.css';

const Book = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: 'Event', // Default service
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="book-container">
            <h1 className="title">Booking</h1>
            <div className="booking-form">
                <form className="form" onSubmit={handleSubmit}>
                    <label htmlFor="name"></label>
                    <input
                        className="form-input"
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="email"></label>
                    <input
                        className="form-input"
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                     <label htmlFor="phone number"></label>
                    <input
                        className="form-input"
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                    />
                    <label className="label" htmlFor="service"></label>
                    <select
                        className="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        >
                        <option className="option" value="events">Event</option>
                        <option className="option" value="clinics">Clinic</option>
                        <option className="option" value="heartmath">HeartMath</option>
                        <option className="option" value="horsemanship">Horsemanship</option>
                        <option className="option" value="media">Media</option>
                        <option className="option" value="other">Other</option>
                    </select>
                    <label htmlFor="message"></label>
                    <textarea
                        className="message-input"
                        type="text"
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleInputChange}
                    />
                    <button className="form-btn" type="submit">Submit Request</button>
                </form>
            </div>
            <div className="payment-container">
                <Link to="https://buy.stripe.com/test_6oEbMbgCidQg1qM144">
                    <button className="pay-btn">Pay</button>
                </Link>
            </div>
        </div>
    );
};

export default Book;