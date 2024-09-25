import React from 'react';
import './Cart.css';

function Cart({ items , removeFromCart}) {
    return (
        <div className='container'>
            <h3 className='text-center mt-5'>Your Cart</h3>
            {items.length === 0 ? (
                <p className='text-center fs-5'>The Cart is Empty</p>
            ) : (
                <div>
                  <div className='it'>
                    {items.map((item, index) => (
                      <div className='cc'>
                        <p key={index}>
                            {item.title}
                        </p>
                        <img src={item.image}></img>
                        <p> ${item.price}</p>
                        <button className='btn btn-danger btn-sm' onClick={() => removeFromCart(item.id)}>Remove</button>
                      </div>
                    ))}
                  </div>
                  <p className='total'>Total Price: {
                    items.reduce(function sum(prev,next){
                        return Number(prev.price) + Number(next.price);
                    })

                  }</p>
                </div>
            )}
        </div>
    );
}

export default Cart;
