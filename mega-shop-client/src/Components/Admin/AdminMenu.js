import React from 'react';
import { Link } from 'react-router-dom';
import manageIcon from '../../images/grid 1.png';
import plusIcon from '../../images/plus 1.png';
import editIcon from '../../images/edit 1.png';


const AdminMenu = () => {
    return (
        <div style={{backgroundColor: "green", color:"white", height: "650px", padding:'20px'}}>
            <Link style={{color:"white", fontSize:'20px'}} to="/manageProduct"><img style={{width:'20px'}} src={manageIcon} alt=""/> Manage Product</Link> <br/>
            <Link style={{color:"white",fontSize:'20px'}} to="addProducts"><img style={{width:'20px'}} src={plusIcon} alt=""/> Add Product</Link> <br/>
            <Link style={{color:"white",fontSize:'20px'}} to="/editProduct"><img style={{width:'20px'}} src={editIcon} alt=""/> Edit Product</Link> <br/>
        </div>
    );
};

export default AdminMenu;