import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore/lite";
import { Link } from "react-router-dom";

import { db } from "../../server/Firebase";
import CartContext from "../context/CartContext";

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const { cart, dispatch } = useContext(CartContext);

    useEffect(() => {
        setLoading(true);

        (async function() {
            const docRef = doc(db, "items", id);
            const productSnapshot = await getDoc(docRef);

            const productData = productSnapshot.data()
            const product = { id: productSnapshot.id, ...productData};

            setProduct(product)
            setLoading(false);
        })()
    }, []);

    const handleChangeQuantity = (e) => {
        const newQuantity = Number(e.target.value);

        if (newQuantity >= 1 && newQuantity <= product.stock) {
            setQuantity(newQuantity);
        }
    };

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (!product) {
        return <div>Produto não encontrado</div>;
    }

    const handleAddItem = () => {
        dispatch({
            type: "addItem",
            item: { ...product, quantity },
        });
    };

    return (
        <div>
            <div className="flex flex-col items-center flex-wrap h-5/6">
            <div className="flex flex-col items-center mt-10 w-6/12 border border-red-700 shadow-xl">
                    <h1 className="text-3xl font-bold italic text-slate-900 mt-10">{product.name}</h1>
                    <img
                        className="my-10"
                        width={300}
                        src={product.img}
                        alt={product.name}
                    />
                    <p className="my-2">Tipo: {product.type}</p>
                    <p className="mt-1 text-xl font-bold italic text-slate-900">
                        R$: {product.price.toFixed(2).replace('.', ',')}
                    </p>
                    <p>Estoque: {product.stock} unidades</p>
                    <p className="my-5 text-center">{product.description}</p>
                    <div className="flex items-center">
                    <span className="mr-1">Qntd: </span>
                    <input
                        value={quantity}
                        min={1}
                        max={product.stock}
                        type="number"
                        onChange={handleChangeQuantity}
                        className="border border-gray-300 rounded p-1 text-center transition duration-300 ease-in-out hover:border-red-500 hover:ring hover:ring-red-500 hover:shadow-sm hover:shadow-red-500"
                    />
                    </div>
                    <button className="border bg-red-600 font-semibold hover:bg-red-900 rounded p-1 text-center my-4" onClick={handleAddItem}>Adicionar ao Carrinho</button>
                    <Link to="/" className="border bg-red-600 font-semibold hover:bg-red-900 rounded p-1 text-center my-4" >Retornar</Link>
                </div>
            </div>
        </div>
    );
}
