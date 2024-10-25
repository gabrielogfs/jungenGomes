import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
    Cart,
    Home,
    Checkout,
    ProductDetail,
} from "./components";
import { CartProvider } from "./context/CartContext";
import NavBar from "./components/NavBar";

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
                    </Routes>
                    <hr />
                    <footer className="flex justify-center mt-4 font-bold h-1/6">Created by: GOG - Gabriel Oliveira Gomes</footer>
                </BrowserRouter>
            </CartProvider>
        </>
    );
}

export default App