import React, { useState } from 'react';
import ProviderCard from './ProviderCard';
import './ProviderStyles.scss';

const Providers = () => {

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
        },
        {
            id: 2,
            location: "Durres, Qender",
            image_url: "https://performanceautospecialists.com/wp-content/uploads/2019/05/46212975_m.jpg",
            name: "Oficina Shpetimi",
            bio: "Rregullojm makina"
        },
        {
            id: 2,
            location: "Durres, Qender",
            image_url: "https://performanceautospecialists.com/wp-content/uploads/2019/05/46212975_m.jpg",
            name: "Oficina Shpetimi",
            bio: "Rregullojm makina"
        },
        {
            id: 2,
            location: "Durres, Qender",
            image_url: "https://performanceautospecialists.com/wp-content/uploads/2019/05/46212975_m.jpg",
            name: "Oficina Shpetimi",
            bio: "Rregullojm makina"
        },
        {
            id: 2,
            location: "Durres, Qender",
            image_url: "https://performanceautospecialists.com/wp-content/uploads/2019/05/46212975_m.jpg",
            name: "Oficina Shpetimi",
            bio: "Rregullojm makina"
        },
        {
            id: 2,
            location: "Durres, Qender",
            image_url: "https://performanceautospecialists.com/wp-content/uploads/2019/05/46212975_m.jpg",
            name: "Oficina Shpetimi",
            bio: "Rregullojm makina"
        },
        {
            id: 2,
            location: "Durres, Qender",
            image_url: "https://performanceautospecialists.com/wp-content/uploads/2019/05/46212975_m.jpg",
            name: "Oficina Shpetimi",
            bio: "Rregullojm makina"
        },
    ]);

    return (
        <div className="providers-container">
            {
                providers.map((provider)=>{
                    return <ProviderCard provider={provider} key={provider.id} />
                })
            }
        </div>
    )
};

export default Providers;