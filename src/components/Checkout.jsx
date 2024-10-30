import React, { useContext } from "react";

import CartContext from "../context/CartContext";

function Checkout() {

    const { cart } = useContext(CartContext);

    return (
        <>
            <h1>Checkout</h1>
            <ul>
                {cart.map(({ name, quantity, price }) => (
                    <li key={name}>
                        {`${name}
                    x${quantity} - Valor Total: R$${(
                                price * quantity
                            ).toFixed(2).replace('.', ',')} `}</li>
                ))}
                Valor Total: R$
                {cart
                    .reduce((prevProductValue, { quantity, price }) => {
                        return (
                            prevProductValue + quantity * price
                        );
                    }, 0)
                    .toFixed(2).replace('.', ',')}
            </ul>
        </>
    );
}

export { Checkout }