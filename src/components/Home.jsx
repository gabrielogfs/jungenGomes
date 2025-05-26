import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { db } from "../../server/Firebase";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(10);

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

  return (
    <div>
      <div>
        <img
          className="my-1 h-auto px-1 bg-zinc-100"
          src="../img/bgImage.webp"
          alt="Main image of Jungen."
        />
      </div>
      <section className="bg-gray-100 pt-4 px-4">
        {loading && <h1>Carregando...</h1>}

        {!loading && (
          <div className="flex flex-col items-center">
            <Link
              to={"/"}
              className="text-3xl font-bold italic text-slate-900 mb-6 justify-evenly"
            >
              <div>
                Mercado de Counter-Strike 2
                <span>
                  {`VER TODAS AS ${products.length} SKINS DE CS2!`}
                </span>
              </div>
            </Link>
            <Swiper
              spaceBetween={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 5 },
              }}
              className="w-full max-w-7xl mx-auto"
            >
              {products
                .slice(0, visibleCount)
                .map(({ id, name, img, stock, price }) => (
                  <SwiperSlide key={id}>
                    <div className="w-56 border-2  rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-200 overflow-hidden">
                      <Link to={`/product/${id}`}>
                        <img
                          className="rounded-t-lg w-full h-40 object-cover"
                          src={img}
                          alt={name}
                        />
                      </Link>
                      <div className="p-4">
                        <div className="font-semibold italic text-slate-900 text-center mb-2">
                          {name}
                        </div>
                        <p className="text-lg font-bold text-green-600 text-center">
                          R$ {price.toFixed(2).replace(".", ",")}
                        </p>
                        <p className="text-sm text-gray-600 text-center">
                          Estoque: {stock}
                        </p>
                        <Link
                          to={`/product/${id}`}
                          className="block text-center mt-2 py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-150"
                        >
                          Ver Detalhes
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
