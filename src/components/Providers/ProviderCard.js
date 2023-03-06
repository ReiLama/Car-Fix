import { Link } from 'react-router-dom';
import './ProviderStyles.scss';

const ProviderCard = ({provider}) => {
    return ( 
        <div className="provider-card">
            <Link to={`/provider_details/${provider.id}`}>
                <img src={provider.image_url} alt="img" />
                <h2>{provider.name}</h2>
                <p><b>{provider.location}</b></p>
            </Link>
        </div>
     );
}
 
export default ProviderCard;