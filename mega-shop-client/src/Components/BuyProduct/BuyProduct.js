import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';

const BuyProduct = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const { productId } = useParams();
    const [product, setProduct] = useState({})
    const {name,weight,price} = product;

    useEffect(()=>{
        fetch(`https://polar-fjord-79132.herokuapp.com/product/${productId}`)
        .then(res=> res.json())
        .then(data => setProduct(data[0]))
    },[productId])

    const handleCheckout = () => {
        const booking = {...loggedInUser, ...product};
        fetch("https://polar-fjord-79132.herokuapp.com/addCheckout", {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            if(data) {
                alert('Your Order Placed Successfully')
            }
        })
    }
    return (
        <div className='container'>
            <h2 className="">Checkout</h2>
            <table class="table shadow rounded mt-5">
                <thead>
                    <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>1</td>
                        <td>${price}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><b>Total</b></td>
                        <td>${price}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td ><button style={{color: 'white', padding:'5px' ,backgroundColor:'green', width:'120px', textAlign:'center', fontSize:'20px', borderRadius:'5px'}} onClick={handleCheckout} >Checkout</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default BuyProduct;