import { useState, useEffect } from "react";


/*
Pontos de atenção: 😃

1. Você está validando o wepon.length como > 0, se não for mostra a mensagem "Carregando...",
mas se o array for vzio vai mostrar carregando para sempre 😅, seria melhor validar se o loading é true e mostrar o carregando.
em caso de array vazio mostrar "Nenhum item encontrado".

*/

const ItemRend = () => {

    const [weapon, setWeapon] = useState([])

    useEffect(() => {
        fetch("https://bymykel.github.io/CSGO-API/api/en/skins.json")
            .then((response) => response.json())
            .then((data) => setWeapon(data));

    }, []);
    console.log(weapon)
    return (
        <div>
            <h1 className="text-xl font-semibold italic text-slate-900 mb-3 "> Lista de Itens</h1>
            <ul className="grid grid-cols-3 gap-4 items-center">
                {weapon.length > 0 ? (
                    weapon.map((item, index) => (
                        <>
                            <li className="w-48 m-4" key={index}>{item.name}
                                <img key={index} src={item.image}></img>
                            </li>
                        </>
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

export default ItemRend