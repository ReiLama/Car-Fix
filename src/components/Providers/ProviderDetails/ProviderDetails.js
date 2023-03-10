import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Divider } from 'antd';
import './ProviderDetailsStyles.scss';

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

    useEffect(()=>{
        setProvider(...providers.filter((pr)=>{
            return pr.id === Number(id)
        }));
    }, [id, providers]);

    return ( 
        <div className="provider-details">
            <div className="side-details">
                <img src={provider.image_url} alt="img" />
                <h1>{provider.name}</h1>
                <Divider />
                <h2>{provider.location}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem quis repellat delectus ut.
                </p>
                <Divider />
                <Button type="primary" className="button">Add Reservation</Button>
            </div>
            <div className="services">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem quis repellat delectus ut. Necessitatibus quo
                    itaque fuga tempora molestias numquam pariatur maiores doloribus
                    assumenda. At debitis expedita quod amet eligendi!Lorem Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Nam tempora sapiente,
                         quisquam veritatis, deleniti minima, doloremque quaerat voluptatibus
                          aut odit numquam corrupti cum et omnis in. Nesciunt praesentium quas sapiente!
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem quis repellat delectus ut. Necessitatibus quo
                    itaque fuga tempora molestias numquam pariatur maiores doloribus
                    assumenda. At debitis expedita quod amet eligendi!Lorem Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Nam tempora sapiente,
                         quisquam veritatis, deleniti minima, doloremque quaerat voluptatibus
                          aut odit numquam corrupti cum et omnis in. Nesciunt praesentium quas sapiente!
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem quis repellat delectus ut. Necessitatibus quo
                    itaque fuga tempora molestias numquam pariatur maiores doloribus
                    assumenda. At debitis expedita quod amet eligendi!Lorem Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Nam tempora sapiente,
                         quisquam veritatis, deleniti minima, doloremque quaerat voluptatibus
                          aut odit numquam corrupti cum et omnis in. Nesciunt praesentium quas sapiente!
                </p>
            </div>
        </div>
     );
}
 
export default ProviderDetails;