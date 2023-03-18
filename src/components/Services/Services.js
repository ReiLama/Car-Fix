import { Divider, Dropdown, Button, Input, ConfigProvider } from "antd";
import { SortAscendingOutlined, SortDescendingOutlined } from '@ant-design/icons'
import { useState } from "react";
import ServiceCard from './ServiceCard';
import './ServicesStyles.scss';

const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item
        </a>
      ),
    },
  ];

const Services = () => {

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
    const [ascending, setAscending] = useState(false);

    return ( 
        <div className="services">
            <ConfigProvider
                theme={{
                token: {
                    colorPrimary: 'rgb(40, 47, 140)',
                },
                }}
            >
                <div className="filter-options">
                    {
                    ascending ? 
                    <SortDescendingOutlined type="message" style={{ fontSize: '150%' }} theme="outlined" onClick={()=>{setAscending(!ascending)}} /> 
                    : 
                    <SortAscendingOutlined type="message" style={{ fontSize: '150%' }} theme="outlined" onClick={()=>{setAscending(!ascending)}} />
                    }
                    <Divider type="vertical" />
                    <Dropdown
                    menu={{
                        items,
                    }}
                    placement="bottom"
                    arrow
                    >
                        <Button>Category</Button>
                    </Dropdown>
                    <Divider type="vertical" />
                    <Dropdown
                    menu={{
                        items,
                    }}
                    placement="bottom"
                    arrow
                    >
                        <Button>City</Button>
                    </Dropdown>
                    <Divider type="vertical" />
                    <Input.Search size="large" placeholder="Search for services..." enterButton  className="search" />
                </div>
                <Divider />
                {
                    services.map((service) => {
                    return <ServiceCard service={service} key={service.id} />
                    })
                }
            </ConfigProvider>
        </div>
     );
}
 
export default Services;