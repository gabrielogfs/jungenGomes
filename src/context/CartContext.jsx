import { createContext, useReducer } from "react";
import React from "react";

const CartContext = createContext([]);

const cartReducer = (cart, action) => {
    switch (action.type) {
        case "addItem": {
            let newCart;

            const existsOnCart = cart.some(
                (productItem) => productItem.id === action.item.id
            );

            newCart = [...cart, action.item];

            localStorage.setItem("cart", JSON.stringify(newCart));
            return newCart;
        }

        case "removeItem": {
            const filteredCart = cart.filter(
                (product) => product.id !== action.productId
            );
            localStorage.setItem("cart", JSON.stringify(filteredCart));
            return filteredCart;
        }

        case "changeItemQuantity": {
            const mappedCart = cart.map((product) => {
                if (product.id === action.product.id) {
                    return {
                        ...product,
                        quantity: action.product.newQuantity,
                    };
                }
                return product;
            });

            localStorage.setItem("cart", JSON.stringify(mappedCart));
            return mappedCart;
        }

        default:
            return cart;  // Certifique-se de retornar o estado atual por padrão
    }
};

const initializeState = () => {
    return JSON.parse(localStorage.getItem("cart")) || [];
};

export function CartProvider({ children }) {
    const [cart, dispatch] = useReducer(cartReducer, initializeState());

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;
