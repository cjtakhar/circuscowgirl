import Image from '../images/kansas-clinic.jpeg';

const Clinics = () => {
    return (
        <div className="clinics-container">
            <div className="clinics-image-container">
                <img src={Image} alt="Kansas Carradine" className="clinics-image"/>
            </div>
            <h1 className="title">Clinics</h1>
        </div>
    )
}
export default Clinics