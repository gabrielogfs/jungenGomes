import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


/* 
Pontos de atenção: 😃

1. Você pode remover o import do React se não estiver usando
2. Você tem uma função dispatch mas não está definida
*/


import NavBar from './NavBar';

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        setLoading(true);
        fetch(`/skinList.json`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const selectedProduct = data.find(item => item.id === parseInt(id));
                setProduct(selectedProduct || null);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Erro ao buscar o produto:", error);
                setLoading(false);
            });
    }, [id]);

    const handleChangeQuantity = (e) => {
        const newQuantity = Number(e.target.value);
        if (newQuantity >= 1) {
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
            <NavBar />
            <div className="flex flex-col items-center flex-wrap">
                <div className="flex flex-col items-center mt-10 w-6/12 border">
                    <h1 className="text-3xl font-bold italic text-slate-900 mt-10">{product.name}</h1>
                    <img
                        className="my-10"
                        width={200}
                        src={product.img}
                        alt={product.name}
                    />
                    <p className="my-2">Tipo: {product.type}</p>
                    <p className="mt-1 text-xl font-bold italic text-slate-900">
                        R$: {product.price.toFixed(2).replace('.', ',')}
                    </p>
                    <p>Estoque: {product.stock} unidades</p>
                    <p className="my-5">{product.description}</p>
                    <input
                        value={quantity}
                        type="number"
                        onChange={handleChangeQuantity}
                        className="bg-slate-500"
                    />
                    <button onClick={handleAddItem}></button>
                </div>
            </div>
        </div>
    );
}
