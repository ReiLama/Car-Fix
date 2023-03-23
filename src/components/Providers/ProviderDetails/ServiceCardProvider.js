import { Button } from 'antd';
import { useState } from 'react';
import DeleteService from '../../shared/DeleteService/DeleteService';
import EditService from '../../shared/EditService/EditService';
import './ProviderDetailsStyles.scss';

const ServiceCardProvider = ({ location, name, service, owner }) => {

    const [openDeleteService, setOpenDeleteService] = useState(false);
    const [openServiceEdit, setOpenServiceEdit] = useState(false);

    const handleClickOpenDeleteService = () => {
        setOpenDeleteService(true);
      };
    
      const handleCloseDelete = () => {
        setOpenDeleteService(false);
      };

      const handleClickOpenServiceEdit = () => {
        setOpenServiceEdit(true);
    };
    
      const handleCloseServiceEdit = () => {
        setOpenServiceEdit(false);
    };

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
                        <h3>{name}</h3>
                        <h3>{location}</h3>
                    </div>
                </div>
                <p>{service.description}</p>
                <div className="service-buttons">
                    {  !owner ?                
                    <Button type="primary" className='primary'><b>ADD RESERVATION</b></Button>
                    :
                    <>
                        <Button type="primary" className='primary' onClick={handleClickOpenServiceEdit} ><b>Edit Service</b></Button>
                        <Button danger type='primary' onClick={handleClickOpenDeleteService} ><b>Delete Service</b></Button>
                    </>
                    }
                </div>
                <EditService openServiceEdit={openServiceEdit} handleCloseServiceEdit={handleCloseServiceEdit} id={service.id} />
                <DeleteService openDeleteService={openDeleteService} handleCloseDeleteService={handleCloseDelete} id={service.id} providers_id={service.providers_id} key={service.id} />
            </div>
        </div>
     );
}
 
export default ServiceCardProvider;