import axios from 'axios';
import React, { useState } from 'react';
import AdminMenu from '../Admin/AdminMenu';
import { useForm } from "react-hook-form";
import Header from '../Header/Header';

const AddProducts = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    const [product, setProduct] = useState({
        name : '',
        weight : '',
        price : 0,
        image : '',
    })

    const handleImageUpload = (event) => {
        const imageData = new FormData();
        imageData.set('key', '4f6c4aea39179a102be4feba03381665');
        imageData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            const newProduct = {...product};
            newProduct.image = response.data.data.display_url;
            console.log(newProduct)
            setProduct(newProduct);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const handleSave = () => {

        fetch('https://polar-fjord-79132.herokuapp.com/addProduct', {
            method: 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(product)
        })
    }

     const handleOnblur = (e) => {
        const newProduct = {...product};
         if(e.target.name === 'name') {
            newProduct.name = e.target.value;
         }
         if(e.target.name === 'price') {
            newProduct.price = e.target.value;
        }
        if(e.target.name === 'weight') {
            newProduct.weight = e.target.value;
        }

        setProduct(newProduct);
     }

    return (
        <div className="container">
            <div className="row">
            <div className="col-md-3">
                <AdminMenu></AdminMenu>
            </div>
            <div className="col-md-9">
                <h4>Add Products</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="">Product Name</label> <br/>
                    <input type="text" onBlur={handleOnblur} name="name" ref={register({ required: true })} placeholder="Enter Name"/> <br/>
                    <label htmlFor="">Weight</label><br/>
                    <input type="text" onBlur={handleOnblur} name="weight" ref={register({ required: true })} placeholder="Enter Weight"/> <br/>
                    <label htmlFor="">Add Price</label> <br/>
                    <input type="text" onBlur={handleOnblur} name="price" ref={register({ required: true })} placeholder="Enter Price"/> <br/>
                    <label htmlFor="">Add Photo</label> <br/>
                    <input type="file" name="" id="" onChange={handleImageUpload}/><br/><br/>
                    <button onClick={handleSave}>Save</button>
                </form>
            </div>
        </div>
        </div>
    );
};

export default AddProducts;