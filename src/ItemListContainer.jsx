import React, { useEffect, useState } from "react";

const ItemContainer = ({ greeting }) => {
    return(
        <div>
            <p className="greeting">{greeting}</p>
        </div>
    )
}


// Prática para próxima entrega:

// const ItemContainer = () => {
//     const [items, setItems] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {

//         const fetchItems = async () => {
//             try {
//                 const response = await fetch('https://fortnite-api.com/v2/cosmetics')
//                 const data = await response.json();
//                 setItems(data); // armazenei os dados do fetch da api
//                 console.log(data)
//             } catch (error) {
//                 console.error('Erro ao buscar itens: ', error);
//             } finally { // esse finally é pra executar indiferente do resultado do try catch
//                 setLoading(false);
//             }
//         };

//         fetchItems();
//     }, []); // travei pra não cair em infinite loop

//     if (loading) {
//         return <div>Carregando...</div>; // *montar bloco para os três pontos "andarem"

//     }

//     return (
//         <div>
//             <h2>Skins Disponíveis</h2>
//             <ul>
//                 {items.map(item => (
//                     <li key={item.id}>{item.name}: R$ {item.price}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

export default ItemContainer;