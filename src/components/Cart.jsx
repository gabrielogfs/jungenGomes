import React from "react";

/*
Pontos de atenção: 😃

1. Importar o useContext do React, você esta usando o useContext sem importar
2. Importar o CartContext, você está usando o CartContext sem importar
3. Não encontrei o componente CartItem no projeto, você precisa criar o componente CartItem
4. Exportar o componente Cart diretamente, não precisa exportar como export { Cart }, é uma boa prática exportar diretamente
como `export Cart(){...}`
5. Remover o import do React, não precisa importar o React se não for usar
*/

function Cart() {
    const { cart } = useContext(CartContext);

    return (
        <>
            <h1>Carrinho</h1>
            <ul>
                {cart?.lenth === 0 && "Seu carrinho está vazio."}
                {cart?.map(({ id, title, quantity }) => {
                    <CartItem key={title} id={id} title={title} quantity={quantity} />
                })}
            </ul>
        </>
    );
}

export { Cart };

