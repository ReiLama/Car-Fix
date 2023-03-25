import { Button } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ServicesStyles.scss';

const ServiceCard = ({ service }) => {

    const [provider, setProvider] = useState({});

    useEffect(()=>{
        fetch("http://localhost:5001/api/providers/" + service.providers_id)
        .then((res)=> res.json())
        .then((data)=> {
            setProvider(data.data)
        })
    }, [service]);

    return ( 
        <div className="service-card">
            <div className="img-container">
                <img src={service.image_url} alt="img" />
            </div>
            <div className="content">
                <div className="service-details">
                    <div className="service-info">
                        <h3>{service.title}</h3>
                        <h3>${service.price}</h3>
                    </div>
                    <div className="provider-info">
                        <h3>{provider.name}</h3>
                        <h3>{provider.location}</h3>
                    </div>
                </div>
                <p>{service.description}</p>
                <div className="service-buttons">
                    <Button><Link to={`/provider_details/${service.providers_id}`}><b>SHOW PROVIDER</b></Link></Button>
                    <Button type="primary" className='primary'><b>ADD RESERVATION</b></Button>
                </div>
            </div>
        </div>
     );
}
 
export default ServiceCard;