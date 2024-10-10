import { createContext, useState, useReducer } from "react";
import React from "react";

const CartContext = createContext([]);

const cartReducer = (cart, action) => {
    switch(action.type) {
        case "addItem": {
            let newCart;

            const existInCart = cart.some(
                (productItem) => productItem.id === action.item.id
            );

            if(!existInCart) {
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
