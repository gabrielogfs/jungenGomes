import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { Breadcrumb } from "antd";

import { db } from "../../server/Firebase";
import CartContext from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const { cart, dispatch } = useContext(CartContext);

  useEffect(() => {
    setLoading(true);

    (async function () {
      const docRef = doc(db, "items", id);
      const productSnapshot = await getDoc(docRef);

      const productData = productSnapshot.data();
      const product = { id: productSnapshot.id, ...productData };

      setProduct(product);
      setLoading(false);
    })();
  }, []);

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

  function toCaps(str) {
    return str.toUpperCase();
  }

  return (
    <div className="flex justify-center items-start pt-2 bg-gray-50 sm:mx-10 mb-4">
      <div className="flex flex-col md:flex-row w-full shadow-xl">
        <div className="flex flex-col items-center lg:p-12 bg-gray-50 md:w-1/2 border-r lg:w-2/3">
          <Breadcrumb
            className="w-full items-start mb-4"
            items={[
              { title: "Home", href: "/" },
              {
                title: toCaps(product.weapon),
                href: `/type/${product.weapon}`,
              },
              { title: product.name },
            ]}
          />

          <img
            className="w-[250px] md:w-[500px] lg:w-[500px] pt-5 sm:pt-0"
            src={product.img}
            alt={product.name}
          />
        </div>

        <div className="flex flex-col justify-between p-6 md:w-1/2">
          <p className="font-light text-xs mt-8">{toCaps(product.weapon)}</p>
          <h1 className="text-2xl font-bold italic text-slate-900 ">
            {product.name}
          </h1>
          <div>
            <p className="mt-5 text-5xl font-bold italic text-slate-900">
              {product.price.toFixed(2).replace(".", ",")} €
            </p>
            <p>Stock: {product.stock} units</p>
          </div>
          <div className="flex w-full justify-center">
            <button
              onClick={handleAddItem}
              className="border bg-red-600 font-semibold hover:bg-red-900 rounded 
               text-sm md:text-lg lg:text-xl 
               px-4 py-2 md:px-6 md:py-3 
               my-4 text-center"
            >
              Adicionar ao Carrinho
            </button>
          </div>
          <p className="pt-5 font-semibold">Description</p>
          <p className="my-1">{product.description}</p>
          <div className="flex items-center gap-2 mt-4"></div>
          <div className="w-full flex justify-center"></div>
        </div>
      </div>
    </div>
  );
}
