import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { Cart, Home, Checkout, ProductDetail } from "./components";
import NavBar from "./components/NavBar";
import Type from "./components/Type";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Admin from "./components/Admin";
import AdminRoute from "./components/AdminRoute";
import EmailVerfy from "./components/EmailVerify";

import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ToastContainer />
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <NavBar />
            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/type/:typeId" element={<Type />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/email-verify" element={<EmailVerfy />} />

                <Route
                  path="/admin"
                  element={
                    <AdminRoute>
                      <Admin />
                    </AdminRoute>
                  }
                />
              </Routes>
            </div>
            <hr />
            <footer className="flex justify-center py-4 font-semibold">
              Created by: GOG - Gabriel Oliveira Gomes
            </footer>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
