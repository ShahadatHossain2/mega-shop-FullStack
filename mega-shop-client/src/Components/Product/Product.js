import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {_id,name, weight, price, image} = props.product;
    return (
        <div className="col-md-4 col-sm-12 p-2">
            <div className="shadow rounded h-100 p-2">
            <div className="text-center">
            <img style={{width:'200px'}} src={image} alt=""/>
            </div>
            <div style={{height:'20%'}}>
            <h3>{name}-{weight}</h3>
            </div>
            <div style={{display: 'flex', justifyContent:'space-between', marginTop:'10px'}}>
            <h2>${price}</h2>
            <Link style={{color: 'white', marginTop:'8px' ,backgroundColor:'green', width:'100px', textAlign:'center', fontSize:'20px', borderRadius:'10px'}} to={"/buy/"+_id}>Buy Now</Link>
            </div>
            </div>
        </div>
    );
};

export default Product;