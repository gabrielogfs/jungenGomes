import React, { useContext } from "react";
import { addDoc, collection } from "firebase/firestore/lite";
import { loadStripe } from "@stripe/stripe-js";

import CartContext from "../context/CartContext";
import ProductTable from "./ProductTable";
import { useAuth } from "../context/AuthContext";
import { db } from "../../server/Firebase";

const ProductRow = ({ quantity, name, total, onClick }) => {
    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-semibold text-center">
                {quantity}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-semibold">
                {name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-semibold text-center">
                ${total}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                <span
                    onClick={onClick}
                    className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg
                    border border-transparent text-red-600 hover:text-red-800
                    disabled:opacity-50 disabled:pointer-events-none dark:text-red-500
                    dark:hover:text-red-400 cursor-pointer"
                >
                    Remover
                </span>
            </td>
        </tr>
    );
};

export default function Checkout() {
    const { cart, dispatch } = useContext(CartContext);
    const { currentUser } = useAuth();

    const apiURL = "http://localhost:3000";

    const total = cart?.reduce((prevProduct, nextProduct) => {
        return prevProduct + nextProduct.quantity * nextProduct.price;
    }, 0).toFixed(2);

    const makePayment = async () => {
        const stripe = await loadStripe("pk_test_51QJgKNEJdrxoZF9yKO9rHrAaEqTWuiHlJ9lO480cuaNWnTqpZISrz4dOKmO9dvH1wszmTAqx5l0fA8DosL5X1FDp00xJIxpgfN");

        const body = {
            products: cart
        };

        const headers = {
            "Content-Type": "application/json"
        };

        try {
            const response = await fetch(`${apiURL}/create-checkout-session`, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(body)
            });

            const session = await response.json();

            if (session.id) {
                const result = await stripe.redirectToCheckout({
                    sessionId: session.id
                });

                if (result.error) {
                    console.error(result.error.message);
                }
            } else {
                console.error("Erro ao criar sessão de checkout. Tente novamente.");
            }
        } catch (error) {
            console.error("Erro ao criar a sessão de checkout: ", error);
        }
    };

    const handleOrder = async () => {
        const newOrder = {
            buyer: {
                email: currentUser.email,
                id: currentUser.uid,
            },
            items: cart,
            total,
        };

        const ordersCollection = collection(db, "orders");

        try {
            const createdOrder = await addDoc(ordersCollection, newOrder);
            console.log("Pedido criado com sucesso:", createdOrder);

            dispatch({
                type: "resetCart",
            });
        } catch (error) {
            console.error("Erro ao criar pedido:", error);
        }
    };

    return (
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-12 lg:px-8">
            <h2 className="text-2xl font-bold mb-4 leading-7 sm:truncate sm:text-3xl sm:tracking-tight">
                Checkout
            </h2>

            <div className="flex space-x-8">
                <div className="flex-1">
                    <ProductTable>
                        {cart?.map(({ id, quantity, name, price }) => (
                            <ProductRow
                                key={id}
                                quantity={quantity}
                                name={name}
                                total={(price * quantity).toFixed(2)}
                                onClick={() => {
                                    dispatch({
                                        type: "removeItem",
                                        productId: id,
                                    });
                                }}
                            />
                        ))}
                    </ProductTable>
                </div>

                <div className="w-1/3 border pl-3 pt-2">
                    <div className="font-semibold justify-center text-lg mb-4">Detalhes da Compra</div>
                    <div className="flex mb-4">
                        <div className="font-semibold">Quantidade de Itens:</div>
                        <div className="ml-2">{cart?.reduce((acc, { quantity }) => acc + quantity, 0)}</div>
                    </div>

                    <div className="flex mb-4 font-bold">
                        <span>Total: </span>
                        <span className="ml-2">${total}</span>
                    </div>

                    <div className="flex justify-center mb-3">
                        <button
                            onClick={handleOrder} // Criação do pedido
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Finalizar Compra
                        </button>
                    </div>
                    <div className="flex justify-center mb-3">
                        <button
                            onClick={makePayment} // Inicia o processo de pagamento
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Pagar com Stripe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Checkout };
