import { PlusOutlined } from '@ant-design/icons';
import { Divider, Input, ConfigProvider, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import CreateProvider from '../../shared/CreateProviderPopup/CreateProvider';
import ProviderCard from './ProviderCard';
import './ProviderStyles.scss';

const Providers = () => {

    const [location, setLocation] = useState("");
    const [providers, setProviders] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(()=>{
      fetch("http://localhost:5001/api/providers")
      .then((res)=> res.json())
      .then((data)=> setProviders(data.data))
    }, []);

    const filterSearch = () => {
      fetch("http://localhost:5001/api/providers")
      .then((res) => res.json())
      .then((data) => {
        const tempSearch = location.toLocaleLowerCase()
        const tempPro = [...data.data];
        const newProviders = tempPro.filter((pro)=> {
          let temp = pro.location.toLocaleLowerCase()
          return temp.includes(tempSearch)
        });
        setProviders(newProviders)
      })
    }

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
            <ConfigProvider
                theme={{
                token: {
                    colorPrimary: 'rgb(40, 47, 140)',
                },
                }}
            >
                <div className="providers-container">
                    <div className="filter">
                        <Button type="primary" className='create-button' onClick={handleClickOpen} >Create Provider <PlusOutlined /></Button>
                        <CreateProvider open={open} handleClose={handleClose} />
                        <div className='filter-container'>
                            <Input.Search 
                              size="large" 
                              placeholder="Search for location..." 
                              enterButton  
                              className="search"
                              onChange={(e) => {
                                setLocation(e.target.value)
                              }}
                              onSearch={filterSearch}
                            />
                        </div>
                        <div></div>
                    </div>
                    <Divider />
                    {
                      providers.length !== 0 ? 
                      providers.map((provider)=>{
                          return <ProviderCard provider={provider} key={provider.id} />
                      })
                      :
                      <h1 style={{ color: "grey" }}>No providers found</h1>
                    }
                </div>
            </ConfigProvider>
    )
};

export default Providers;