import { useEffect, useState } from "react"

import "./skinList.json";
import ItemRender from "./itemRender";


export default function SkinShop({ product }) {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((previousCart) => {
            const existProduct = previousCart.find((item) => item.id === product.id);

            if (existProduct) {
                if (existProduct.quantity > product.stock) {
                    console.log("Mais uma unidade do produto adicionado")
                    return previousCart.map((item) =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    );
                } else {
                    alert("Não há mais unidades disponíveis em estoque.");
                    return previousCart;
                }
            } else {
                console.log("Produto adicionado")
                return [...previousCart, { ...product, quantity: 1 }];
            }
        });
    };

    return (
        <div className="flex space-x-4 justify-center m-4">
            <button className="bg-red-700 w-auto text-white font-semibold hover:bg-red-900 focus:ring focus:ring-black" onClick={addToCart}>Adicionar à sacola</button>
        </div>
    );

}
