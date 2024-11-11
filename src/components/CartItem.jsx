import { useContext } from "react";

import CartContext from "../context/CartContext"

function CartItem({ id, name, quantity, img }) {
    const { cart, dispatch } = useContext(CartContext);

    const handleRemoveItem = (productId) => {
        dispatch({
            type: "removeItem",
            productId,
        });
    };

    console.log(cart)

    const handleChangeQuantity = (e) => {
        const newQuantity = Number(e.target.value);

        dispatch({
            type: "changeItemQuantity",
            product: {
                id,
                newQuantity,
            },
        });
    };

    return (
        <li className=" w-56 m-4 border-2 rounded-lg ml-5 grid flex-wrap">
            <img src={img} />
            <div className="justify-self-center">
                {`${name}`}
            </div>
            <div className="justify-self-center">
                <span> Qtde: </span>
                <input className="focus:border-sky-500 focus:ring-sky-500 hover:ring-sky-500 focus:ring-1 size-10 " onChange={handleChangeQuantity} value={quantity} type="number" />
            </div>
            <button
                className="bg-red-600 text-black font-semibold rounded-md p-1 hover:bg-red-700 mx-2 mb-4"
                onClick={() => {
                    handleRemoveItem(id);
                }}
            >
                Remover
            </button>

        </li>
    );
}

export { CartItem };