import { Link } from "react-router-dom";
import { useContext } from "react";

const Admin = () => {

    return (
        <div>
            <div>
                <Link to={'#'}>
                Adicionar Produtos
                </Link>
                <Link to={'#'}>
                Gerenciar Produtos
                </Link>
                <Link to={"#"}>
                Gerenciar Pedidos    
                </Link>
                </div>
        </div>
    )
}

export default Admin;