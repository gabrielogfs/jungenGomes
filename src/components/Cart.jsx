import { useContext, useEffect } from "react";

import CartContext from "../context/CartContext"
import { CartItem } from "./CartItem";

function Cart() {
    const { cart } = useContext(CartContext);

    useEffect(() => {
        console.log(cart);  // Verifique a estrutura do objeto
    }, [cart]);

    return (
        <>
            <h1 className="font-bold text-2xl ml-9">Carrinho</h1>
            <ul>
                {cart?.length === 0 && "Seu carrinho está vazio."}
                {cart?.map(({ id, name, quantity, img }) => (
                    <CartItem key={id} id={id} name={name} quantity={quantity} img={img} />
                ))}
            </ul>
        </>
    );
}

export { Cart }

