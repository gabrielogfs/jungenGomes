import React, { useContext } from "react";
import NavBar from "./NavBar";

export default function Checkout() {

    return (
        <>
            <NavBar />
            <h1>Checkout</h1>
            <ul>
                {cart.map((product) => (
                    <li>{`${product.name}
                    x${product.quantity} - Valor Total: R$ ${(
                        product.price * product.quantity
                    ).toFixed(2).replace('.', ',')} `}</li>
                ))}
                Valor Total:
                {cart
                .reduce((prevProductValue, currentProduct) => {
                    return(
                        prevProductValue + currentProduct.quantity * currentProduct.price
                    );
                },0)
                .toFixed(2).replace('.', ',')}
            </ul>
        </>
    );
}