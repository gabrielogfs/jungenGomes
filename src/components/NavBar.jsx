import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import CartContext from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { signOut } from "../context/auth";

const NavBar = () => {

    const { currentUser } = useAuth();
    const { cart } = useContext(CartContext)
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut();
        navigate("/");
    };

    const handleCartLink = () => {
        if(currentUser) {
            navigate("/cart");
        } else {
            navigate("signin");
        };
    }

    const totalItens = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <>
            <div className="flex items-center justify-between mt-3 mx-3">
                <Link to={"/"} className="text-5xl font-bold italic text-slate-900 -skew-y-3 bg-red-600 flex items-center">
                Jungen
                </Link>

                <div onClick={handleCartLink} className="relative cursor-pointer">
                    <FaShoppingCart className="mr-4" size={32} />
                    {totalItens > 0 && (
                        <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                            {totalItens}
                        </span>
                    )}
                </div>
            </div>
            <nav>
                <ul className="flex text-xl font-semibold text-red-700 space-x-32 justify-center mb-4">
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    {!currentUser && (
                        <li>
                            <Link to={"/signin"}>Entre em sua conta</Link>
                        </li>
                    )}
                    {currentUser && (
                        <li>
                            <a onClick={handleSignOut} href="#">
                                Sair
                            </a>
                        </li>
                    )}
                </ul>
            </nav>
        </>
    );
};

export default NavBar;