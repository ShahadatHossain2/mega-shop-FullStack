import React, { useEffect, useState } from 'react';
import deleteImg from '../../images/Group 33150.png'
import AdminMenu from '../Admin/AdminMenu';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://polar-fjord-79132.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleDelete = (id,event)=> {
        console.log(id);
        fetch("https://polar-fjord-79132.herokuapp.com/delete/"+id, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            if(data) {
                
            }
        })
    }
    return (
        <div className="container">
             <div className="row">
                 <div className="col-md-3">
                     <AdminMenu></AdminMenu>
                 </div>
                 <div className="col-md-9">
                     <h3>Manage Products</h3>
                 <table class="table shadow rounded mt-5">
                <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(pd => <tr>
                            <td>{pd.name}</td>
                            <td>{pd.weight}</td>
                            <td>${pd.price}</td>
                            <td><button style={{border:'none'}} onClick={()=>handleDelete(pd._id)}><img style={{width:'25px', borderRadius:'5px'}} src={deleteImg} alt=""/></button></td>
                        </tr>)
                    }
                </tbody>
            </table>
                 </div>
             </div>
        </div>
    );
};

export default ManageProduct;