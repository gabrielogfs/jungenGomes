import Home from "./Home";
import { Cart } from "./Cart";
import { Checkout } from "./Checkout";
import ProductDetail from "./ProductDetail";

export { Home, Cart, Checkout, ProductDetail };

/* 
Pontos de atenção: 😃

1. Não vejo necessidade de exportar os componentes como um objeto, você pode exportar diretamente desta forma:

export * from "./Home";
export * from "./Cart";
export * from "./Checkout";
export * from "./ProductDetail";

2. Você pode usar a extensão do arquivo como .js ao invés de .jsx, porque você não está exportando um 
componente e sim um caminho para o componente, então não é necessário usar a extensão .jsx

3. No seu caso de uso, acho que não precisa desse index.js exportando os componentes, 
você pode importar diretamente os componentes que deseja usar.

*/