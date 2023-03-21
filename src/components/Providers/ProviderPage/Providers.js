import { PlusOutlined } from '@ant-design/icons';
import { Divider, Input, ConfigProvider, Dropdown, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import CreateProvider from '../../shared/CreateProviderPopup/CreateProvider';
import ProviderCard from './ProviderCard';
import './ProviderStyles.scss';

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

const Providers = () => {

    const [providers, setProviders] = useState([]);
    const [city, setCity] = useState("");
    const [open, setOpen] = useState(false);

    useEffect(()=>{
      fetch("http://localhost:5001/api/providers")
      .then((res)=> res.json())
      .then((data)=> setProviders(data.data))
    }, [providers])

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
                        <CreateProvider open={open} handleClose={handleClose} city={city} setCity={setCity} />
                        <div className='filter-container'>
                            <Dropdown menu={{items,}} placement="bottom" arrow>
                                <Button>City</Button>
                            </Dropdown>
                            <Input.Search size="large" placeholder="Search for location..." enterButton  className="search" />
                        </div>
                        <div></div>
                    </div>
                    <Divider />
                    {
                        providers.map((provider)=>{
                            return <ProviderCard provider={provider} key={provider.id} />
                        })
                    }
                </div>
            </ConfigProvider>
    )
};

export default Providers;