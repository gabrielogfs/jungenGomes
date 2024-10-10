import React from "react";

function Cart() {
    const { cart } = useContext(CartContext);

    return (
        <>
            <h1>Carrinho</h1>
            <ul>
                {cart?.lenth === 0 && "Seu carrinho está vazio."}
                {cart?.map(({ id, title, quantity}) => {
                    <CartItem key={title} id={id} title={title} quantity={quantity} />
                })}
            </ul>
        </>
    );
}

export { Cart }