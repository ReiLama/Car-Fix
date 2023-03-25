import { Divider, Dropdown, Button, Input, ConfigProvider } from "antd";
import { SortAscendingOutlined, SortDescendingOutlined } from '@ant-design/icons'
import { useEffect, useState } from "react";
import ServiceCard from './ServiceCard';
import './ServicesStyles.scss';

const Services = () => {

    const [search, setSearch] = useState("");
    const [services, setServices] = useState([]);
    const [ascending, setAscending] = useState(false);

    useEffect(()=>{
        fetch("http://localhost:5001/api/services")
        .then((res) => res.json())
        .then((data) => {
          setServices(data.data)
        })
    }, []);

    const filterSearch = () => {
      fetch("http://localhost:5001/api/services")
      .then((res) => res.json())
      .then((data) => {
        const tempSearch = search.toLocaleLowerCase()
        const tempSer = [...data.data];
        const newServices = tempSer.filter((ser)=> {
          let temp = ser.title.toLocaleLowerCase()
          return temp.includes(tempSearch)
        });
        setServices(newServices)
      })
    }

    const sortDescending = () => {
      const tempSer = [...services];
        tempSer.sort((a, b)=>{
          return b.price - a.price
        });
        setServices(tempSer);
        setAscending(true)
    }

    const sortAscending = () => {
      const tempSer = [...services];
        tempSer.sort((a, b)=>{
          return a.price - b.price
        });
        setServices(tempSer);
        setAscending(false)
    }

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
                    <SortAscendingOutlined type="message" style={{ fontSize: '150%' }} theme="outlined" onClick={sortAscending} />
                    :
                    <SortDescendingOutlined type="message" style={{ fontSize: '150%' }} theme="outlined" onClick={sortDescending} />
                    }
                    <Divider type="vertical" />
                    <Input.Search
                      size="large" 
                      placeholder="Search for services..." 
                      enterButton  className="search"
                      value={search}
                      onChange={(e) => {
                        setSearch(e.target.value)
                      }}
                      onSearch={filterSearch}
                    />
                </div>
                <Divider />
                {
                    services.length ?
                    services.map((service) => {
                    return <ServiceCard service={service} key={service.id} />
                    })
                    :
                    <h1 style={{ color: "grey" }}>No services found</h1>
                }
            </ConfigProvider>
        </div>
     );
}
 
export default Services;