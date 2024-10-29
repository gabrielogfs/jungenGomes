import React from "react";
import { FaShoppingCart } from "react-icons/fa";

import { Link } from "react-router-dom";

/*
Pontos de atenção: 😃

1. Você pode remover o import do React, não precisa importar o React se não for usar

*/

const NavBar = () => {
    return (
        <>
            <div className="flex items-center justify-between mt-3 mx-3">
                <Link to={"/"} className="text-5xl font-bold italic text-slate-900 -skew-y-3 bg-red-600 flex items-center">Jungen</Link>
                <Link to={"/cart"}>
                <FaShoppingCart className="mr-4" size={24}/>  
                </Link>
            </div>
            <nav>
                <ul className="flex space-x-32 justify-center mb-4">
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/cart"}>Carrinho</Link>
                    </li>
                    <li>
                        <Link to={"/checkout"}>Checkout</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default NavBar;