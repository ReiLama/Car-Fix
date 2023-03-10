import { Button } from 'antd';
import './ServicesStyles.scss';

const ServiceCard = ({ service }) => {
    return ( 
        <div className="service-card">
            <div className="img">
                <img src={service.image_url} alt="img" />
            </div>
            <div className="content">
                <div className="service-details">
                    <div className="service-info">
                        <h3>{service.title}</h3>
                        <h3>{service.price}</h3>
                    </div>
                    <div className="provider-info">
                        <h3>Emili elektroauto</h3>
                        <h3>Durres, Shkozet</h3>
                    </div>
                </div>
                <p>{service.description}</p>
                <div className="service-buttons">
                    <Button>Show Provider</Button>
                    <Button type="primary" className='primary'>Add Reservation</Button>
                </div>
            </div>
        </div>
     );
}
 
export default ServiceCard;