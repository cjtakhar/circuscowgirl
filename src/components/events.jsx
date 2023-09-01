import Image1 from '../images/heartmathhorsemanship.jpeg';
import Image2 from '../images/kansas-clinic-flyer.jpeg';
const Events = () => {
    return (
        <div className="events-container">
            <div className="events">
                <img src={Image1} alt="Kansas Carradine" className="events-image"/>
                <img src={Image2} alt="Kansas Carradine" className="events-image"/>
            </div>
        </div>
    )
}

export default Events