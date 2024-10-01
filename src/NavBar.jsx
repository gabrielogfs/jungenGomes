import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import './index.css'


const CartWidget = () => {
    return (
        <div>
            <FaShoppingCart className="shop" size={24}></FaShoppingCart>
        </div>
    );
};

const NavBar = () => {
    return (
        <div className="navBar">
            <h1>Jungen</h1>
            <CartWidget />
        </div>
    );
};

export default NavBar;