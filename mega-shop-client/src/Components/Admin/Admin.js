import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <div className='container mt-5 text-center'>
            <Link style={{color: 'white', padding:'8px' ,backgroundColor:'green', width:'200px', textAlign:'center', fontSize:'30px', borderRadius:'10px'}} to="/manageProduct">Manage Product</Link> <br/> <br/>
            <Link style={{color: 'white', padding:'8px' ,backgroundColor:'green', width:'200px', textAlign:'center', fontSize:'30px', borderRadius:'10px'}} to="/addProducts">Add Product</Link>
        </div>
    );
};

export default Admin;