import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'react-toastify/ReactToastify.css'
import { ToastContainer } from "react-toastify";

import {
    Cart,
    Home,
    Checkout,
    ProductDetail,
} from "./components";
import NavBar from "./components/NavBar";
import Type from "./components/Type";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

function App() {

    return (
        <>
            <ToastContainer />
            <AuthProvider>
                <CartProvider>
                    <BrowserRouter>
                        <NavBar />
                        <Routes>
                            <Route path="/" element={<Home />}></Route>
                            <Route path="/cart" element={<Cart />}></Route>
                            <Route path="/checkout" element={<Checkout />}></Route>
                            <Route path="/product/:id" element={<ProductDetail />}></Route>
                            <Route path="/type/:typeId" element={<Type />} />
                            <Route path="/signup" element={<SignUp />} />
                            <Route path="/signin" element={<SignIn />} />
                        </Routes>
                        <hr />
                        <footer className="flex justify-center my-4 font-bold h-1/6">Created by: GOG - Gabriel Oliveira Gomes</footer>
                    </BrowserRouter>
                </CartProvider>
            </AuthProvider>
        </>
    );
}

export default App