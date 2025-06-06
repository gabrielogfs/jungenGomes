import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore/lite';

import { db } from '../../server/Firebase';

export default function Type() {
    const { typeId } = useParams();
    const [productType, setProductType] = useState();
    const [loading, setLoading] = useState(true);

    const TypeButton = ({ typeName }) => (
        <Link to={`/type/${typeName}`}>
            <button className="uppercase">{typeName}</button>
        </Link>
    )

    useEffect(() => {
        (async function () {
            const productsCol = collection(db, "items")

            const q = query(productsCol, where("type", "==", typeId));

            const productsSnapshot = await getDocs(q);
            const products = productsSnapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data(),
                }
            });

            console.log(products)
            setProductType(products);
            setLoading(false)
        })();
    }, [typeId]);


    return (
        <div>
            <section className="bg-gray-100 pt-4 px-4">
                <div className="max-w-5xl mx-auto">
                <div className="flex lg:space-x-14 md:space-x-6 my-4 justify-center">
                    <TypeButton typeName="Knife" />
                    <TypeButton typeName="Pistol" />
                    <TypeButton typeName="Shotgun" />
                    <TypeButton typeName="SMG" />
                    <TypeButton typeName="Rifle" />
                    <TypeButton typeName="Sniper Rifle" />
                </div>
                <h1 className="text-3xl font-bold italic text-slate-900 mb-6 text-center">{typeId}</h1>
                    {loading && <h1>Carregando...</h1>}
                    {!loading && (
                        <ul className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 items-center justify-center mx-auto">
                            {productType.map(({ id, name, img, stock, price }) => (
                                <li className="w-56 m-4 border-2 border-red-700 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-200 overflow-hidden" key={id}>
                                    <Link to={`/product/${id}`}>
                                        <img className="rounded-t-lg w-full h-48 object-cover" src={img} alt={name} />
                                    </Link>
                                    <div className="p-4">
                                        <div className="font-semibold italic text-slate-900 text-center mb-2">{name}</div>
                                    </div>
                                    <p className="text-lg font-bold text-green-600 text-center">R$ {price.toFixed(2).replace('.', ',')}</p>
                                    <p className="text-sm text-gray-600 text-center">Estoque: {stock}</p>
                                    <Link to={`/product/${id}`} className="block text-center mt-2 py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-150">Ver Detalhes</Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </section>
        </div>
    )
}
