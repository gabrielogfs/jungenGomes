import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import skinList from './skinList.json'
import ItemCount from "./itemCount";
import NavBar from './NavBar';
import SkinShop from "./SkinOnCart";

export default function SkinDetails() {
    const { skinID } = useParams();
    const [product, setProduct] = useState();

    useEffect(() => {
        const skin = skinList.find(skin => skin.id === parseInt(skinID));
        setProduct(skin);
    }, [skinID]);

    if (!product) {
        return <div>Carregando...</div>; // Exiba uma mensagem de carregamento
    }

    return <div>
        <NavBar />
        <div className="flex flex-col items-center flex-wrap">
            <div className="flex flex-col items-center mt-10 w-6/12 border">
                <h1 className="text-3xl font-bold italic text-slate-900 mt-10">{product.name}</h1>
                <img
                    className="my-10"
                    width={200}
                    src={product.img} alt={product.name}
                ></img>
                <p className="my-2">Tipo: {product.type}</p>
                <p className="mt-1 text-xl font-bold italic text-slate-900">R$: {product.value.toFixed(2).replace('.', ',')}</p>
                <p>Estoque: {product.stock} unidades</p>
                <p className="my-5">{product.description}</p>
                <ItemCount stock={product.stock} />
                <SkinShop product={product} />
            </div>
        </div>
    </div>
}