import { useState } from "react";
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services] = useState([
        {
            id: 0,
            title: "General Revision",
            image_url: "#",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe veritatis nihil quam sint illo minus! Natus adipisci voluptas libero harum voluptatem! Neque, id dolorum amet distinctio voluptatum unde aliquam fuga?",
            providers_id: 0,
            price: "$200",
            
        },
    ]);

    return ( 
        <div className="services">
            {
                services.map((service)=>{
                    <ServiceCard service={service} key={service.id}/>
                })
            }
        </div>
     );
}
 
export default Services;