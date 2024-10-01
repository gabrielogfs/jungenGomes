import { useEffect, useState } from "react"
import "./skinList";
import './index.css'

const ItemCount = ({ stock }) => {
    const [quantity, setQuantity] = useState(1);

    const changeIncrease = () => {
        setQuantity((prev) => (prev < stock ? prev + 1 : prev));
    };

    const changeDecrease = () => {
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    };

    return (
        <div className="cart-controls">
          <button onClick={changeDecrease} disabled={quantity <= 1}>-</button>
          <span className="quantity">{quantity}</span>
          <button onClick={changeIncrease} disabled={quantity >= stock}>+</button>
        </div>
      );
    }
    
    export default ItemCount;