import { useState } from 'react';
import Cart from './Cart';
import './Product.css'

function Product({ p, addToCart }){ // props = {p: obj, addtocart: fn}
    
    return (
        <div className='card'>
            <img src={p.image} className='' alt={p.title}/>
            <div className='card-body'>
                <p className='fs-5'>{p.title.substring(0,30)}</p>
                <p className='fs-5'>⭐{p.rating.rate}</p>
                <p className='fs-5 fw-bold'>${p.price}</p>
                <button className='btn btn-sm btn-primary' onClick={() => addToCart(p)}>Add to Cart</button>
            </div>  
        </div>
    )
}

export default Product;