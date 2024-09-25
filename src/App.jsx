import { Button } from "bootstrap";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import RootLayout from "./components/assignment/RootLayout";
import Home from "./components/assignment/Home";
import Register from "./components/assignment/Register";
import Login from "./components/assignment/Login";
import Technologies from "./components/assignment/Technologies";
import UserMain from "./components/first/UserMain";
import Product from "./components/product/Product";
import Productss from "./components/product/Productss";
import Cart from "./components/product/Cart";
import Root from "./components/product/Root";
import { useState } from "react";
import { ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App(){

    let [CartList, setCartList] = useState([]);

    function addToCart(product) {
        setCartList((prev) => [...prev, product]);
        toast.success(`${product.title.substring(0,30)} has been added to your cart!`);
    }

    function removeFromCart(productId) {
        setCartList((prev) => prev.filter((item) => item.id !== productId));
        toast.info(`Item has been removed from your cart!`);
    }


    //routing config
    const browserRouterObject = createBrowserRouter([
        {
            path:"/",
            element:<Root />,
            children:[
                {
                    path:'',
                    element: <Productss items={CartList} addnewTask={addToCart}/>
                },
                {
                    path:'cart',
                    element: <Cart items={CartList} removeFromCart={removeFromCart}/>
                }
            ]
        }
    ]);


    return(
        <>
            <RouterProvider router={browserRouterObject}/>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick draggable pauseOnHover />
        </>   
    )
}


export default App;
