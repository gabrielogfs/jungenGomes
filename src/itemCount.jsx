import { useEffect, useState } from "react"
import "./skinList.json";

const ItemCount = ({ stock }) => {
    const [quantity, setQuantity] = useState(1);

    const changeIncrease = () => {
        setQuantity((prev) => (prev < stock ? prev + 1 : prev));
    };

    const changeDecrease = () => {
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    };

    return (
        <div className="flex space-x-4 justify-center m-4">
          <button className="rounded-full bg-red-700 w-6 text-white font-semibold hover:bg-red-900 focus:ring focus:ring-black disabled:bg-gray-300 disabled:text-black" onClick={changeDecrease} disabled={quantity <= 1}>-</button>
          <span className="text-m font-bold italic text-slate-900 m-">{quantity}</span>
          <button className="rounded-full bg-red-700 w-6 text-white font-semibold hover:bg-red-900 focus:ring focus:ring-black disabled:bg-gray-300 disabled:text-black" onClick={changeIncrease} disabled={quantity >= stock}>+</button>
        </div>
      );
    }
    
    export default ItemCount;