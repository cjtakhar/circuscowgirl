import { AiOutlineMail, AiOutlinePhone, AiOutlineLinkedin } from 'react-icons/ai';

const Contact = () => {
    const email = 'circuscowgirl@hushmail.com';
    const phoneNumber = '212-212-2121';
    const linkedinUrl = 'https://ca.linkedin.com/in/kansas-carradine-a6230a138';

    const handleEmailClick = () => {
        window.location.href = `mailto:${email}`;
    };

    const handlePhoneClick = () => {
        window.location.href = `tel:${phoneNumber}`;
    };
    

    return (
        <div>
            <h1 className="title">Contact</h1>
            <div className="contact-container">
                <div className="contact-info">
                    <a href={`mailto:${email}`} onClick={handleEmailClick} className="email">
                        <AiOutlineMail />
                    </a>
                    <a href={`tel:${phoneNumber}`} onClick={handlePhoneClick} className="phone">
                        <AiOutlinePhone />
                    </a>
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="linked-in">
                        <AiOutlineLinkedin />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
