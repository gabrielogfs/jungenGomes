import { useContext, useEffect } from "react";

import CartContext from "../context/CartContext"
import ProductTable from "./ProductTable";

const ProductRow = ({ quantity, name, total, onClick, onChange }) => {
    return (
        <tr>
            <td className="px-6 whitespace-nowrap text-sm font-medium text-gray-800 flex justify-center align-middle text-center">
                <div className="relative flex items-center max-w-[8rem]">
                    <button
                        type="button"
                        id="decrement-button"
                        data-input-counter-decrement="quantity-input"
                        className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                        onClick={() => {
                            onChange(quantity - 1);
                        }}
                    >
                        <svg
                            className="w-3 h-3 text-gray-900 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 2"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h16"
                            />
                        </svg>
                    </button>
                    <input
                        type="text"
                        id="quantity-input"
                        data-input-counter
                        aria-describedby="helper-text-explanation"
                        className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={quantity}
                        onChange={(e) => {
                            onChange(e.target.value);
                        }}
                        required
                    />
                    <button
                        type="button"
                        id="increment-button"
                        data-input-counter-increment="quantity-input"
                        className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                        onClick={() => {
                            onChange(quantity + 1);
                        }}
                    >
                        <svg
                            className="w-3 h-3 text-gray-900 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 1v16M1 9h16"
                            />
                        </svg>
                    </button>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-800 font-semibold">
                {name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-semibold text-center">
                ${total}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                <span
                    onClick={onClick}
                    className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg
          border border-transparent text-blue-600 hover:text-blue-800
          disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500
          dark:hover:text-blue-400 cursor-pointer"
                >
                    Remover
                </span>
            </td>
        </tr>
    );
};

export default function Cart() {
    const { cart, dispatch } = useContext(CartContext);
  
    const total = cart
      ?.reduce((prevProduct, currProduct) => {
        return prevProduct + currProduct.quantity * currProduct.price;
      }, 0)
      .toFixed(2);
  
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
          Cart
        </h2>
        <ProductTable>
          {cart?.map(({ id, quantity, name, price }) => (
            <ProductRow
              key={name}  
              quantity={quantity}
              name={name}
              total={(price * quantity).toFixed(2)}
              onClick={() => {
                dispatch({
                  type: "removeItem",
                  productId: id,
                });
              }}
              onChange={(newQuantity) => {
                console.log({ id, newQuantity, name, price });
  
                dispatch({
                  type: "changeItemQuantity",
                  product: { id, newQuantity: Number(newQuantity), name, price },
                });
              }}
            />
          ))}
        </ProductTable>
        <div className="flex justify-end items-center">
          <span className="px-2 font-bold">Total: ${total}</span>
        </div>
      </div>
    );
  }
  
  export { Cart };

