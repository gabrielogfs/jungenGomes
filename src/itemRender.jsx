import { useEffect, useState } from "react"
import './index.css'
import ItemCount from "./itemCount";
import skinList from "./skinList.json"

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
                        <li className="w-48 m-4" key={product.id}>
                            <div>{product.name}</div>
                            <img className="contImg" src={product.img}></img>
                            <p className="price">R$ {product.value}</p>
                            <p>Estoque: {product.stock}</p>
                            <ItemCount stock={product.stock} />
                        </li>
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