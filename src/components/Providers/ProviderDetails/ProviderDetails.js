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
    const [providers] = useState([
        {
            id: 0,
            location: "Durres, Plazh",
            image_url: "https://www.floridacareercollege.edu/wp-content/uploads/sites/4/2020/08/12-Reasons-to-Become-an-Automotive-Mechanic-Florida-Career-College.png",
            name: "Mekanik Tiku",
            bio: "Rregullojm makina"
        },
        {
            id: 1,
            location: "Durres, Shkozet",
            image_url: "https://okazion.online/uploads/2021/08/12/852_1628757655.jpg",
            name: "Emili Elektroauto",
            bio: "Rregullojm makina"
        },
        {
            id: 2,
            location: "Durres, Qender",
            image_url: "https://performanceautospecialists.com/wp-content/uploads/2019/05/46212975_m.jpg",
            name: "Oficina Shpetimi",
            bio: "Rregullojm makina"
        }
    ]);
    const [provider, setProvider] = useState({});
    const [owner] = useState(true);
    const [services] = useState([
        {
            id: 0,
            title: "OIL CHNAGE",
            image_url: "https://parkers-images.bauersecure.com/wp-images/177357/gettyimages-adding-engine-oil.jpg",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.",
            providers_id: 0,
            price: "$50",
            category_id: 1
        },
        {
            id: 0,
            title: "GEAR ADJUST",
            image_url: "https://www.uti.edu/images/default-source/racetrack-pages/how-an-automotive-transmission-works-from-universal-technical-institute-automotive-program.webp",
            description: "Lorem ipsum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.",
            providers_id: 0,
            price: "$200",
            category_id: 1
        },
        {
            id: 0,
            title: "OIL CHNAGE",
            image_url: "https://parkers-images.bauersecure.com/wp-images/177357/gettyimages-adding-engine-oil.jpg",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.",
            providers_id: 0,
            price: "$200",
            category_id: 1
        },
        {
            id: 0,
            title: "OIL CHNAGE",
            image_url: "https://parkers-images.bauersecure.com/wp-images/177357/gettyimages-adding-engine-oil.jpg",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.",
            providers_id: 0,
            price: "$200",
            category_id: 1
        },
        {
            id: 0,
            title: "OIL CHNAGE",
            image_url: "https://parkers-images.bauersecure.com/wp-images/177357/gettyimages-adding-engine-oil.jpg",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.",
            providers_id: 0,
            price: "$200",
            category_id: 1
        },
        {
            id: 0,
            title: "OIL CHNAGE",
            image_url: "https://parkers-images.bauersecure.com/wp-images/177357/gettyimages-adding-engine-oil.jpg",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.",
            providers_id: 0,
            price: "$200",
            category_id: 1
        },
        {
            id: 0,
            title: "OIL CHNAGE",
            image_url: "https://parkers-images.bauersecure.com/wp-images/177357/gettyimages-adding-engine-oil.jpg",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.",
            providers_id: 0,
            price: "$200",
            category_id: 1
        },
        {
            id: 0,
            title: "OIL CHNAGE",
            image_url: "https://parkers-images.bauersecure.com/wp-images/177357/gettyimages-adding-engine-oil.jpg",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.",
            providers_id: 0,
            price: "$200",
            category_id: 1
        },
        {
            id: 0,
            title: "OIL CHNAGE",
            image_url: "https://parkers-images.bauersecure.com/wp-images/177357/gettyimages-adding-engine-oil.jpg",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.",
            providers_id: 0,
            price: "$200",
            category_id: 1
        },
        {
            id: 0,
            title: "OIL CHNAGE",
            image_url: "https://parkers-images.bauersecure.com/wp-images/177357/gettyimages-adding-engine-oil.jpg",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.",
            providers_id: 0,
            price: "$200",
            category_id: 1
        },
        {
            id: 0,
            title: "OIL CHNAGE",
            image_url: "https://parkers-images.bauersecure.com/wp-images/177357/gettyimages-adding-engine-oil.jpg",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum.",
            providers_id: 0,
            price: "$200",
            category_id: 1
        }
    ]);
    const [city, setCity] = useState("");
    const [open, setOpen] = useState(false);
    const [openService, setOpenService] = useState(false);
    const [category, setCategory] = useState("");

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

    useEffect(()=>{
        setProvider(...providers.filter((pr)=>{
            return pr.id === Number(id)
        }));
    }, [id, providers]);

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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatem quis repellat delectus ut.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatem quis repellat delectus ut.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatem quis repellat delectus ut.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatem quis repellat delectus ut.
                    </p>
                    <Divider />
                    <Button type="primary" className="button">Add Reservation</Button>
                </div>
                <div className="services">
                    <div className="buttons">
                        {
                            owner ? 
                            <Button type="primary" style={{ fontSize: "18px", height: "100%" }} onClick={handleClickOpenService}>Add service <PlusOutlined /></Button>
                            :
                            <Button type="primary" style={{ fontSize: "18px", height: "100%" }} onClick={handleClickOpen}>Create Provider <PlusOutlined /></Button>
                        }
                    </div>
                    <CreateProvider open={open} handleClose={handleClose} city={city} setCity={setCity} />
                    <CreateService openService={openService} handleCloseService={handleCloseService} category={category} setCategtory={setCategory} />
                    <Divider><h3>Services <span><Badge count={9} color="rgb(40, 47, 140)" style={{ fontSize: '102%', marginBottom: "2px" }} /></span></h3></Divider>
                    {
                        services.map((service)=>{
                            return <ServiceCardProvider service={service} key={service.id} />
                        })
                    }
                    { owner && <Button type="primary" style={{ fontSize: "15px", marginTop: "20px" }}>Add service <PlusOutlined /></Button> }
                </div>
            </div>
        </ConfigProvider>
     );
}
 
export default ProviderDetails;