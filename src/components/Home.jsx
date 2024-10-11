import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

import NavBar from "./NavBar";

/*
Pontos de atenção: 😃

1. Você não está usando o loading no componente, você pode remover
2. Você está validando se o tamanho do array é maior que 0, se não você mostra "carregando",
porém se o array vier vazio o loading será exibido para sempre, seria melhor validar se o loading é true e mostrar
nenhum item encontrado se o tamanho do array for 0.
3. Você está exportando o arquivo Home como default mas está importando no App.js como { Home }, 
para importar como { Home } você precisa exportar como export function Home() { ... } 
*/

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        fetch("/skinList.json")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <NavBar />
            <h1 className="text-xl font-semibold italic text-slate-900 mb-3 "> Lista de Itens</h1>
            <ul className="grid grid-cols-3 gap-4 items-center">
                {products.length > 0 ? (
                    products.map((product) => (
                        <li className="w-56 m-4 border-2 border-red-700 rounded-lg " key={product.id}>
                            <Link to={`/product/${product.id}`}>
                                <div className="mt-4 font-semibold italic text-slate-900">{product.name}</div>
                                <img className="size-fit" src={product.img}></img>
                            </Link>
                            <p className="font-semibold italic text-slate-900">R$ {product.price.toFixed(2).replace('.', ',')}</p>
                            <p>Estoque: {product.stock}</p>
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

export default Home