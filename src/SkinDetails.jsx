import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import skinList from './skinList.json'
import ItemCount from "./itemCount";
import NavBar from './NavBar';

export default function SkinDetails() {
    const { skinID } = useParams();
    const [selectedSkin, setSelectedSkin] = useState();

    useEffect(() => {
        const skin = skinList.find(skin => skin.id === parseInt(skinID));
        setSelectedSkin(skin);
    }, [skinID]);

    if (!selectedSkin) {
        return <div>Carregando...</div>; // Exiba uma mensagem de carregamento
    }

    return <div>
        <NavBar />
        <div className="flex flex-col items-center flex-wrap">
            <div className="flex flex-col items-center mt-10 w-6/12">
                <h1 className="text-3xl font-bold italic text-slate-900 mt-10">{selectedSkin.name}</h1>
                <img
                    className="my-10"
                    width={200}
                    src={selectedSkin.img} alt={selectedSkin.name}
                ></img>
                <p className="my-2">Tipo: {selectedSkin.type}</p>
                <p className="mt-1 text-xl font-bold italic text-slate-900">R$: {selectedSkin.value.toFixed(2).replace('.', ',')}</p>
                <p>Estoque: {selectedSkin.stock} unidades</p>
                <p className="my-5">{selectedSkin.description}</p>
                <ItemCount stock={selectedSkin.stock} />
            </div>
        </div>
    </div>
}