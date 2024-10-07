import React from "react";
import { FaShoppingCart } from "react-icons/fa";

import './index.css'

const NavBar = () => {
    return (

        <div className="flex align-middle justify-between mb-4">
            <h1 className="text-5xl font-bold italic text-slate-900 -skew-y-3 bg-red-600">Jungen</h1>
            <FaShoppingCart className="mr-4 align-middle flex" size={24}></FaShoppingCart>
        </div>
    );
};

export default NavBar;