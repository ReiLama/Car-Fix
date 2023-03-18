import { Button } from 'antd';
import './ProviderDetailsStyles.scss';

const ServiceCardProvider = ({ service }) => {
    return ( 
        <div className="service-card">
            <h3 className='category'><Button className='category-link'><b>MECHANICAL</b></Button></h3>
            <div className="img-container">
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
                    <Button type="primary" className='primary'><b>ADD RESERVATION</b></Button>
                </div>
            </div>
        </div>
     );
}
 
export default ServiceCardProvider;