import { PlusOutlined } from '@ant-design/icons';
import { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Badge, Button, ConfigProvider, Divider } from 'antd';
import ServiceCardProvider from './ServiceCardProvider';
import './ProviderDetailsStyles.scss';
import CreateProvider from '../../shared/CreateProviderPopup/CreateProvider';
import CreateService from '../../shared/CreateServicePopup/CreateService';
import DeleteProvider from '../../shared/DeleteProvider/DeleteProvider';
import EditProvider from '../../shared/EditProvider/EditProvider';


const ProviderDetails = () => {

    const { id } = useParams();
    const [provider, setProvider] = useState({});
    const [owner] = useState(true);
    const [services, setServices] = useState([]);
    const [open, setOpen] = useState(false);
    const [openService, setOpenService] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [openProviderEdit, setOpenProviderEdit] = useState(false);

    useLayoutEffect(()=>{
        fetch("http://localhost:5001/api/providers/" + id)
        .then((res)=> res.json())
        .then((data)=> {
            setProvider(data.data)
        })
    }, [id]);

    useLayoutEffect(()=>{
        fetch("http://localhost:5001/api/provider_services/" + id)
        .then((res)=> res.json())
        .then((data)=> {
            setServices(data.data)
        })
    }, [id]);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleClickOpenService = () => {
        setOpenService(true);
    };
    
      const handleCloseService = () => {
        setOpenService(false);
    };

    const handleClickOpenDelete = () => {
      setOpenDelete(true);
    };
  
    const handleCloseDelete = () => {
      setOpenDelete(false);
    };

    const handleClickOpenProviderEdit = () => {
        setOpenProviderEdit(true);
    };
    
      const handleCloseProviderEdit = () => {
        setOpenProviderEdit(false);
    };

    return ( 
        <ConfigProvider
        theme={{
        token: {
            colorPrimary: 'rgb(40, 47, 140)',
        },
        }}
        >
            <div className="provider-details">
                <div className="side-details">
                    <img src={provider.image_url} alt="img" />
                    <h1>{provider.name}</h1>
                    <Divider />
                    <h2>{provider.location}</h2>
                    <p>{provider.bio}</p>
                    <Divider />
                    {                    
                    !owner ? 
                    <Button type="primary" className="button">Add Reservation</Button>
                    :
                    <>
                        <Button type="primary" className="button" onClick={handleClickOpenProviderEdit}><b>Edit Provider</b></Button>
                        <br/>
                        <Button danger type='primary' className="button" onClick={handleClickOpenDelete}><b>Delete Provider</b></Button>
                    </>
                    }
                    <EditProvider openProviderEdit={openProviderEdit} handleCloseProviderEdit={handleCloseProviderEdit} id={provider.id} provider={provider} />
                    <DeleteProvider openDelete={openDelete} handleCloseDelete={handleCloseDelete} id={provider.id} key={id} />
                </div>
                <div className="services">
                    <div className="buttons">
                        {
                            owner ? 
                            <Button type="primary" className="top-buttons" onClick={handleClickOpenService}>Add service <PlusOutlined /></Button>
                            :
                            <Button type="primary" className="top-buttons" onClick={handleClickOpen}>Create Provider <PlusOutlined /></Button>
                        }
                    </div>
                    <CreateProvider open={open} handleClose={handleClose} />
                    <CreateService openService={openService} handleCloseService={handleCloseService} id={id} />
                    <Divider><h3>Services <span><Badge count={services.length} color="rgb(40, 47, 140)" style={{ fontSize: '102%', marginBottom: "2px" }} /></span></h3></Divider>
                    {
                        services.map((service)=>{
                            return <ServiceCardProvider name={provider.name} location={provider.location} service={service} owner={owner} key={service.id} />
                        })
                    }
                    <Divider />
                    { owner && <Button type="primary" className="top-buttons" onClick={handleClickOpenService}>Add service <PlusOutlined /></Button> }
                </div>
            </div>
        </ConfigProvider>
     );
}
 
export default ProviderDetails;