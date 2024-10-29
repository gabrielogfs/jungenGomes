import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
    Cart,
    Home,
    Checkout,
    ProductDetail,
} from "./components";
import { CartProvider } from "./context/CartContext";
import NavBar from "./components/NavBar";
import Type from "./components/Type";

function App() {

    return (
        <>
            <CartProvider>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/cart" element={<Cart />}></Route>
                        <Route path="/checkout" element={<Checkout />}></Route>
                        <Route path="/product/:id" element={<ProductDetail />}></Route>
                        <Route path="/type/:typeId" element={<Type />} />
                    </Routes>
                    <hr />
                    <footer className="flex justify-center my-4 font-bold h-1/6">Created by: GOG - Gabriel Oliveira Gomes</footer>
                </BrowserRouter>
            </CartProvider>
        </>
    );
}

export default App