import React, { useContext } from "react";
import NavBar from "./NavBar";

/*
Pontos de atenção: 😃

1. Como você está importando arquivos nomeados, você não precisa exportar o componente Checkout como default
2. A lista de produtos precisa de um key para cada item
3. Você não está importando o cart do CartContext
4. Pode remover o React do import, não precisa importar o React se não for usar
*/

export function Checkout() {

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
                        return (
                            prevProductValue + currentProduct.quantity * currentProduct.price
                        );
                    }, 0)
                    .toFixed(2).replace('.', ',')}
            </ul>
        </>
    );
}