import { Divider, Dropdown, Button, Input, ConfigProvider } from "antd";
import { SortAscendingOutlined, SortDescendingOutlined } from '@ant-design/icons'
import { useEffect, useState } from "react";
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

    const [services, setServices] = useState([]);
    const [ascending, setAscending] = useState(false);

    useEffect(()=>{
        fetch("http://localhost:5000/api/services")
        .then((res) => res.json())
        .then((data) => {
            setServices(data.data)
        })
    }, []);

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