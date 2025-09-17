import carrito from '../assets/carrito.png'; 
import './CartWidget.css'

function CartWidget() {
    return (
        <div id="carrito-icono">
            <img src={carrito}/>
        </div>
    )
}

export default CartWidget