import '../styles/CartWidget.css'
import { useContext } from "react";
import CartContext from "../context/CartContext";
import { Link } from 'react-router'

function CartWidget() {
    const { countItemsCart } = useContext(CartContext);

    return (
        <div id="carrito-icono">
            <Link to="/cart">
                <img src="/carrito.png" alt="Carrito" />
                {countItemsCart()}
            </Link>
        </div>
    )
}

export default CartWidget