import { Badge } from '@mui/material';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Outlet, Link } from "react-router-dom";

function NewNav() {
  return (
    <div>
       <div className='conatiner'>
        <nav class="navbar">
            <div class="container">
            <Link class="navbar-brand mt-2 mt-lg-0" to={""}>
                        <img
                        src="https://i.pinimg.com/originals/c5/92/0c/c5920c4f2d71863a7c6a973f6b5c4633.png"
                        height="50"
                        alt="Kp Logo"
                        loading="lazy"
                        />
            </Link>
            
            <a class="navbar-brand fs-3 fw-bold" href="">ShopEverything</a>
            
            
            <Badge badgeContent={0} color='warning'>
                <Link to={'cart'}>
                    <FaShoppingCart size={25}/>
                </Link>
            </Badge>

            
                
            </div>
        </nav>
    </div>
    </div>
  )
}

export default NewNav
