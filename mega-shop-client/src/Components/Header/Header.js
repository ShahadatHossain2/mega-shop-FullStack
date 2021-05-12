import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        <div className="container bg-primary rounded">
            <div className="d-flex justify-content-between">
                <div>
                    <h2 style={{color:'white'}}><b>Mega Shop</b></h2>
                </div>
                <div style={{width:'35%'}} className="d-flex  justify-content-between align-items-center">
                    <strong><Link style={{color:'cyan'}} to="/home">Home</Link></strong>
                    <strong><Link style={{color:'cyan'}} to="/orders">Orders</Link></strong>
                    <strong><Link style={{color:'cyan'}} to="/admin">Admin</Link></strong>
                    <strong><Link style={{color:'cyan'}} to="/deals">Deals</Link></strong>
                    {
                        loggedInUser.isSignedIn ? <img style={{width:'30px', borderRadius:'15px'}} src={loggedInUser.photo} alt=""/> : <strong><Link style={{color:'cyan'}} to="/login">Login</Link></strong>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;