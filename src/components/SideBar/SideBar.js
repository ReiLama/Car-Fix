import { Link } from 'react-router-dom';
import "./SideBarStyles.scss";

const SideBar = () => {
    return ( 
        <div className="side-bar">
            <h1><Link to="/" className="header">Car Fix</Link></h1>
            <div className="links">
                <span><Link to="/cars">My cars</Link></span>
                <span><Link to="/profile">Profile</Link></span>
                <span><Link to="/providers">Providers(for test)</Link></span>
            </div>
            <span className="log-out"><a href="/">Log out</a></span>
        </div>
     );
}
 
export default SideBar;