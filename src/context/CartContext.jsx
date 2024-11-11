import { createContext, useReducer } from "react";
import React from "react";
import { toast, Bounce } from "react-toastify";
import 'react-toastify/ReactToastify.css'

const CartContext = createContext([]);

const cartReducer = (cart, action) => {
    switch (action.type) {
        case "addItem": {
            let newCart;
            console.log("Adicionado ao carrinho");


            const existsOnCart = cart.some(
                (productItem) => productItem.id === action.item.id
            );

            if (!existsOnCart) {
                newCart = [...cart, action.item];
                toast.success('Item adicionado ao carrinho!', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            } else {
                newCart = cart;
                toast.success('Quantidade no carrinho atualizada!', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            }

            localStorage.setItem("cart", JSON.stringify(newCart));
            return newCart;
        }

        case "removeItem": {
            const filteredCart = cart.filter(
                (product) => product.id !== action.productId
            );
            toast.warn('Item removido do carrinho.');
            localStorage.setItem("cart", JSON.stringify(filteredCart));
            return filteredCart;
        }

        case "changeItemQuantity": {
            const mappedCart = cart.map((product) => {
                if (product.id !== action.product.id) {
                    return product;
                }
                if (product.id === action.product.id & action.product.newQuantity > product.stock) {
                    toast.error(`Quantidade máxima disponível para este item é ${product.stock}.`, {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    });
                    return product; // Retorna o produto sem alteração
                }
                return {
                    ...product,
                    quantity: action.product.newQuantity,
                };
            });

            localStorage.setItem("cart", JSON.stringify(mappedCart));
            return mappedCart;
        }

        case "resetCart": {
            localStorage.setItem("cart", JSON.stringify([]));
            return [];
        }

        default:
            break;
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
