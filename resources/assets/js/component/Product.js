import React, { Component } from 'react';
import '../../../sass/app.scss';

    const Product = ({product}) => {
        
        const divStyle = {

        }

        if (!product) {
            return (<div className=''> Product Doesn't Exist</div>);
        }

        return (
            <div className='aside-1'>
                <h2 className='p-title'> { product.title } </h2>
                <p className='p-description'> { product.description } </p>
                <h3 className='p-status'> Status { product.availibility ? 'Available' : 'Out of stock' }</h3>
                <h3 className='p-price'> Price : {product.price} </h3>
            </div>
        )
    }

    export default Product;