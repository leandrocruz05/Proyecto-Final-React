import '../styles/ItemDetailContainer.css'
import ItemCount from "./ItemCount";
import Loader from './Loader';
import cartContext from "../context/CartContext";
import { useContext, useState } from 'react';
import { toast } from 'react-toastify'

function ItemDetail({ itemData, loader }) {
    const valorCuota = itemData?.price ? (itemData.price / 6).toFixed(2) : 0
    const { addItem } = useContext(cartContext)
    const [quantity, setQuantity] = useState(1)

    if (loader) {
        return <Loader />
    }

    function addToCart() {
        if (quantity === 0) {
            toast.warn('La cantidad debe ser mayor a cero', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                stopOnFocus: false
            })
            return
        }
        addItem({ ...itemData, quantity })
    }
    return (
        <div>
            <div className="detalle">
                <div className="cuadro">
                    <div className="img">
                        <img src={itemData.img} alt={itemData.title} />
                    </div>
                </div>
                <div className="info">
                    <div className="titulo">{itemData.title}</div>
                    <div className="precio">${itemData.price}</div>
                    <div className="beneficios">
                        💳 6 cuotas <b>sin interés</b> de <b>${valorCuota}</b><br />
                        💵<b>10% de descuento</b> pagando con transferencia o depósito
                    </div>
                    <div className="talles">
                        <label>Talle:</label>
                        <button className="talle-btn">S</button>
                        <button className="talle-btn">M</button>
                        <button className="talle-btn selected">L</button>
                        <button className="talle-btn">XL</button>
                        <button className="talle-btn">XXL</button>
                    </div>
                    <div className="acciones">
                        <ItemCount stock={itemData.stock} onQuantityChange={setQuantity} />
                        <button className="agregar-carrito" onClick={addToCart}>AGREGAR AL CARRITO</button>
                    </div>
                    <div className="envio">
                        <label>Medios de envío</label><br />
                        <input type="text" className="codigo-postal" placeholder="Tu código postal" />
                        <button className="btn-codpos">CALCULAR</button>
                    </div>
                    <div className="info-local">
                        <span className="info-local-text">
                            Estadio Los Andes - Av. Santa Fe 159, Lomas de Zamora Atención L a V 11 a 13 y 14 a 20, Sábados 11 a 18.
                        </span>
                        <span className="info-local-gratis"><b>Gratis</b></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail