import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ProviderStyles.scss';

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
    }, [id]);

    return ( 
        <div className="details_container">
            <h1>{provider.name}</h1>
            <p>{provider.location}</p>
            <img src={provider.image_url} alt="img" />
            <h2>{provider.bio}</h2>
            <button><b>Add Reservation</b></button>
        </div>
     );
}
 
export default ProviderDetails;