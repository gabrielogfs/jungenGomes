import { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { MenuOutlined, CloseOutlined, UserOutlined } from "@ant-design/icons";

import CartContext from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { signOut } from "../context/auth";

const NavBar = () => {
  const { currentUser } = useAuth();
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const TypeButton = ({ typeName, onClick }) => (
    <Link to={`type/${typeName}`} onClick={onClick}>
      <div className="flex items-start flex-wrap h-full sm:h-[50px] position: relative">
        <button className="uppercase">{typeName}</button>
      </div>
    </Link>
  );

  const handleSignOut = () => {
    signOut();
    navigate("/");
  };

  const handleCartLink = () => {
    if (currentUser) {
      navigate("/cart");
    } else {
      navigate("signin");
    }
  };

  const totalItens = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="bg-zinc-100 shadow-md px-4 sm:mx-10 mb-1">
      <nav className="flex flex-wrap items-center justify-between py-2">
        <button
          className="md:hidden lg:hidden text-red-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>
        <div className="flex items-center justify-between mt-3 mx-3">
          <Link
            to={"/"}
            className="text-5xl font-bold italic text-slate-900 -skew-y-3 bg-red-600 flex items-center"
          >
            Jungen
          </Link>
        </div>

        <ul className="flex text-xl font-semibold text-red-700 space-x-32">
          {!currentUser && (
            <li>
              <Link to={"/signin"}>
                <UserOutlined viewBox="0 0 1024 1024" />
              </Link>
            </li>
          )}
          {currentUser && (
            <li>
              <a onClick={handleSignOut} href="#">
                Sair
              </a>
            </li>
          )}
        </ul>
        <div
          onClick={handleCartLink}
          className={`${
            currentUser ? "relative cursor-pointer" : "hidden"
          } flex items-center`}
        >
          <FaShoppingCart className="mr-4" size={32} />
          {totalItens > 0 && (
            <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {totalItens}
            </span>
          )}
        </div>
      </nav>
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-500">
          <h2 className="text-xl font-bold text-red-700">Categorias</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-gray-900 font-bold text-xl pr-4"
          >
            ✕
          </button>
        </div>
        <div className="flex flex-col pl-4 gap-4 mt-8">
          <TypeButton typeName="Knife" onClick={() => setIsOpen(false)} />
          <TypeButton typeName="Pistol" onClick={() => setIsOpen(false)} />
          <TypeButton typeName="Shotgun" onClick={() => setIsOpen(false)} />
          <TypeButton typeName="SMG" onClick={() => setIsOpen(false)} />
          <TypeButton typeName="Rifle" onClick={() => setIsOpen(false)} />
          <TypeButton
            typeName="Sniper Rifle"
            onClick={() => setIsOpen(false)}
          />
        </div>
      </div>

      <div className="hidden md:flex bg-gray-100 p-4 justify-evenly">
        <TypeButton typeName="Knife" />
        <TypeButton typeName="Pistol" />
        <TypeButton typeName="Shotgun" />
        <TypeButton typeName="SMG" />
        <TypeButton typeName="Rifle" />
        <TypeButton typeName="Sniper Rifle" />
      </div>
    </header>
  );
};

export default NavBar;
