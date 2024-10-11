import { createContext, useState, useReducer } from "react";
import React from "react";

/*
Pontos de atenção: 😃

1. Você pode remover o import do React, não precisa importar o React se não for usar
2. Você não está exportando o CartContext, você precisa exportar o CartContext para usar em outros arquivos
3. Você não está exportando o cartReducer, você iria utilizar em algum lugar? 😁
*/

const CartContext = createContext([]);

const cartReducer = (cart, action) => {
    switch (action.type) {
        case "addItem": {
            let newCart;

            const existInCart = cart.some(
                (productItem) => productItem.id === action.item.id
            );

            if (!existInCart) {
                newCart = [...cart, action.item];
            }

            localStorage.setItem("cart", JSON.stringify(newCart));
            return newCart
        }

        case "removeItem": {
            const filteredCart = cart.filter(
                (product) => product.id !== action.productId
            );

        }
    }
}
