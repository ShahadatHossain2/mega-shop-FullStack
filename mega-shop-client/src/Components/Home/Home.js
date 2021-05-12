import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Product from '../Product/Product';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://polar-fjord-79132.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="container">
            <div className="row mt-5">
            {
                products.map(pd => <Product key={pd._id} product={pd}></Product>)
            }
            </div>
        </div>
    );
};

export default Home;