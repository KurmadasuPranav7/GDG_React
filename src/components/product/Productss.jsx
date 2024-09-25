import './Products.css'
import Product from './Product'
import { useEffect, useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import Cart from './Cart';

function Productss({ items, addnewTask }){
    //state
    let [Products,setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(res_list=>setProducts(res_list))
        .catch(e=>setErr(e));
    },[]);

    const addToCart = (product)=>{
        addnewTask(product);
    };

    return (
        <div className='container'>
            <div className='pd1'>
                {
                    Products.slice(0,4).map(prodObj=><Product p = {prodObj} key={prodObj.id} addToCart={addToCart}/>)
                }
            </div>
            <div className='pd1'>
                {
                    Products.slice(4,8).map(prodObj=><Product p = {prodObj} key={prodObj.id} addToCart={addToCart}/>)
                }
            </div>
            <div className='pd1'>
                {
                    Products.slice(8,12).map(prodObj=><Product p = {prodObj} key={prodObj.id} addToCart={addToCart}/>)
                }
            </div>
            <div className='pd1'>
                {
                    Products.slice(12,16).map(prodObj=><Product p = {prodObj} key={prodObj.id} addToCart={addToCart}/>)
                }
            </div>
            <div className='pd1'>
                {
                    Products.slice(16,20).map(prodObj=><Product p = {prodObj} key={prodObj.id} addToCart={addToCart}/>)
                }
            </div>
        </div>

    )
}

export default Productss;