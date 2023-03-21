import { Link } from 'react-router-dom';
import { Badge } from 'antd';
import './ProviderStyles.scss';

const ProviderCard = ({provider}) => {
    return ( 
        <div className="provider-card">
            <Link to={`/provider_details/${provider.id}`}>
                <img src={provider.image_url} alt="img" />
                <div className="name">
                    <h1>{provider.name}</h1>
                </div>
                <div className="info">
                    <h3>{provider.location}</h3>
                    <h3>Services <span><Badge count={11} color="rgb(40, 47, 140)" style={{ fontSize: '102%', marginBottom: "2px" }} /></span></h3>
                </div>
            </Link>
        </div>
     );
}
 
export default ProviderCard;