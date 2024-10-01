import { useEffect, useState } from "react"
import "./skinList";
import './index.css'
import ItemCount from "./itemCount";

const ItemRender = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch("src/skinList.json").
            then((response) => response.
                json()).then((data) => setProducts(data));
    }, []);

    return (
        <div>
            {products.map((product) => (
                <div className="container" key={product.name}>
                    <div className="skinItem">
                        <h3>{product.name}</h3>
                        <img className="contImg" src={product.img}></img>
                        <p className="price">R$ {product.value}</p>
                        <p>Estoque: {product.stock}</p>
                        <ItemCount stock={product.stock} />
                    </div>
                </div>
            ))}

        </div>
    );
};

export default ItemRender