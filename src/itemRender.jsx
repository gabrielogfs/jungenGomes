import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

import './index.css'
import ItemCount from "./itemCount";
import skinList from "./skinList.json"
import SkinShop from "./SkinOnCart";

const ItemRender = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        setProducts(skinList);
    }, []);

    return (
        <div>
            <h1 className="text-xl font-semibold italic text-slate-900 mb-3 "> Lista de Itens</h1>
            <ul className="grid grid-cols-3 gap-4 items-center">
                {products.length > 0 ? (
                    products.map((product) => (
                        <Link to={`/skin/${product.id}`}>
                            <li className="w-56 m-4 border-2 border-red-700 rounded-lg " key={product.id}>
                                <div className="mt-4 font-semibold italic text-slate-900">{product.name}</div>
                                <img className="size-fit" src={product.img}></img>
                                <p className="font-semibold italic text-slate-900">R$ {product.value.toFixed(2).replace('.', ',')}</p>
                                <p>Estoque: {product.stock}</p>
                                <ItemCount stock={product.stock} />
                                <SkinShop product={product} />
                            </li>
                        </Link>
                    ))
                ) : (
                    <div className="flex justify-center">
                        <p>Carregando...</p>
                    </div>

                )}
            </ul>
        </div>
    )
}

export default ItemRender