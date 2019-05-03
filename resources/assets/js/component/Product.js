import React, { Component } from 'react';
import '../../../sass/app.scss';

    const Product = ({product}) => {
        
        const divStyle = {

        }

        if (!product) {
            return (<div class='aside-1'> Product Doesn't Exist</div>);
        }

        return (
            <div class='aside-1'>
                <h2> { product.title } </h2>
                <p> { product.description } </p>
                <h3> Status { product.availibility ? 'Available' : 'Out of stock' }</h3>
                <h3> Price : {product.price} </h3>
            </div>
        )
    }

    export default Product;