import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore/lite";

import { db } from "../../server/Firebase";

const TypeButton = ({ typeName }) => (
    <Link to={`type/${typeName}`}>
        <button className="uppercase">{typeName}</button>
    </Link>
)

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [visibleCount, setVisibleCount] = useState(6);


    useEffect(() => {
        setLoading(true);

        (async function () {
            const productsCol = collection(db, "items");
            const productsSnapshot = await getDocs(productsCol);

            const products = productsSnapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data(),
                };
            });
            setProducts(products);
            setLoading(false);
        })();

    }, []);

    const handleShowMore = () => {
        setVisibleCount((prevCount) => prevCount + 6)
    }

    return (
        <>
            <div>
                <img className="my-4 w-full h-auto" src="../img/bgImage.webp" alt="Main image of Jungen." />
            </div>
            <section className="bg-gray-100 pt-4 px-4">
                <div className="max-w-5xl mx-auto">

                    {loading && <h1>Carregando...</h1>}

                    <div className="flex mb-3 font-semibold lg:space-x-14 md:space-x-6 justify-center">
                        <TypeButton typeName="Knife" />
                        <TypeButton typeName="Pistol" />
                        <TypeButton typeName="Shotgun" />
                        <TypeButton typeName="SMG" />
                        <TypeButton typeName="Rifle" />
                        <TypeButton typeName="Sniper Rifle" />
                    </div>

                    {!loading && (
                        <ul className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 items-center justify-center mx-auto">
                            {products.slice(0, visibleCount).map(({ id, name, img, stock, price }) => (
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

                    {products.length > visibleCount && (
                        <div className="flex justify-center mt-4">
                            <button
                                onClick={handleShowMore}
                                className="py-2 mb-3 px-4 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-150"
                            >
                                Carregar Mais
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

export default Home