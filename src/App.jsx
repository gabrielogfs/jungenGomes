import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { initializeApp } from "firebase/app";

import "./index.css";
import {
    Cart,
    Home,
    Checkout,
    ProductDetail,
    CartContext,
} from "./components";

// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//     authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//     projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//     storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//     appId: import.meta.env.VITE_FIREBASE_APP_ID,
//     measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
//   };

function App() {
    const [ cart, setCart ] = useState([]);
    // initializeApp(firebaseConfig)

    return(
        <>
        <CartContext.Provider
        value={{
            cart,
            setCart,
        }}
        >
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/checkout" element={<Checkout />}></Route>
                <Route path="/product/:id" element={<ProductDetail />}></Route>
            </Routes>
            <hr />
            <footer>Created by: GOG - Gabriel Oliveira Gomes</footer>
            </BrowserRouter>
        </CartContext.Provider>
        </>
    );
}

export default App