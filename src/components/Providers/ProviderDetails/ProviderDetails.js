import { PlusOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Badge, Button, ConfigProvider, Divider } from 'antd';
import ServiceCardProvider from './ServiceCardProvider';
import './ProviderDetailsStyles.scss';
import CreateProvider from '../../shared/CreateProviderPopup/CreateProvider';
import CreateService from '../../shared/CreateServicePopup/CreateService';


const ProviderDetails = () => {

    const { id } = useParams();
    const [provider, setProvider] = useState({});
    const [owner] = useState(false);
    const [services, setServices] = useState([]);
    const [city, setCity] = useState("");
    const [open, setOpen] = useState(false);
    const [openService, setOpenService] = useState(false);
    const [category, setCategory] = useState("");

    useEffect(()=>{
        fetch("http://localhost:5001/api/providers/" + id)
        .then((res)=> res.json())
        .then((data)=> {
            setProvider(data.data)
        })
    }, [provider, id]);

    useEffect(()=>{
        fetch("http://localhost:5001/api/provider_services/" + id)
        .then((res)=> res.json())
        .then((data)=> {
            setServices(data.data)
        })
    }, [services, id])

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
                    <Button type="primary" className="button">Add Reservation</Button>
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
                    <CreateProvider open={open} handleClose={handleClose} city={city} setCity={setCity} />
                    <CreateService openService={openService} handleCloseService={handleCloseService} category={category} setCategtory={setCategory} />
                    <Divider><h3>Services <span><Badge count={services.length} color="rgb(40, 47, 140)" style={{ fontSize: '102%', marginBottom: "2px" }} /></span></h3></Divider>
                    {
                        services.map((service)=>{
                            return <ServiceCardProvider service={service} key={service.id} />
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