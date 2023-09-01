import Image from '../images/kansas-clinic.jpeg';

const Clinics = () => {
    return (
        <div className="clinics-container">
            <h1 className="title">Clinics</h1>
            <div className="clinics-image-container">
                <img src={Image} alt="Kansas Carradine" className="clinics-image"/>
            </div>
        </div>
    )
}
export default Clinics