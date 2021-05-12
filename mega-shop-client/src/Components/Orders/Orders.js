import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';

const Orders = () => {
    const [order, setOrder] = useState([]);
    const [loggedInUser,setLoggedInUser] = useContext(userContext);
    useEffect(()=>{
        fetch('https://polar-fjord-79132.herokuapp.com/orders?email='+loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => setOrder(data))
    },[loggedInUser.email])

    console.log(order)
    return (
        <div className="container text-center mt-5">
            <h2 className="text-success mb-5">Your Order's List</h2>
            {
                order.map(order => <li>{order.name} - {order.weight}</li>)
            }
        </div>
    );
};

export default Orders;