import '../styles/CartContainer.css'
import { useContext, useState } from "react";
import { Link } from "react-router"
import CartContext from "../context/CartContext";
import { createBuyOrder } from "../data/firebaseService";
import Swal from "sweetalert2";
import FormCheckOut from "./FormCheckOut";

function CartContainer() {
    const { carrito, addItem, removeItem, clearCart, countItemsCartById, getTotalPrice } = useContext(CartContext)
    const [orderCreated, setOrderCreated] = useState(false)

    async function handleCheckout(formData) {
        try {
            const orderData = {
                buyer: formData,
                carrito,
                total: getTotalPrice(),
                date: new Date(),
            };

            const response = await createBuyOrder(orderData);

            Swal.fire({
                title: "¡Compra exitosa!",
                text: `Gracias por tu compra! Este es el ID de tu orden: ${response.id}`,
                icon: "success",
                confirmButtonText: "Aceptar",
            })

            setOrderCreated(response.id)
            clearCart();
        } catch (err) {
            console.error(err);
            Swal.fire("Error", "Ocurrió un error al crear la orden. Intenta nuevamente.", "error");
        }
    }

    if (orderCreated) {
        return (
            <section className="container">
                <div className="link-back">
                    <Link to="/">‹ Volver a la tienda</Link>
                </div>
                <div className="fin-compra">
                    <h2>Gracias por tu compra!</h2>
                    <p>Este es el id de tu orden: <strong>{orderCreated}</strong></p>
                    <Link to="/" className="btn btn-primary">Seguir comprando</Link>
                </div>
            </section>
        )
    }

    return (
        <section className="container">
            <div className="link-back"><Link to="/">‹ Volver a la tienda</Link></div>

            <div className="cart-grid">
                <div className="cart-main">
                    <h2 className="title">MI CARRITO</h2>

                    {carrito.length === 0 ? (
                        <div className="empty-cart">
                            <p>Tu carrito está vacío.</p>
                            <Link to="/" className="link">Agregar productos</Link>
                        </div>
                    )
                        :
                        (
                            <>
                                <ul className="cart-list">
                                    {carrito.map((item) => (
                                        <li className="cart-item" key={item.id}>
                                            <div className="item-media">
                                                <img src={item.img} alt={item.title} />
                                            </div>

                                            <div className="item-info">
                                                <h4 className="item-name">{item.title}</h4>
                                                <p className="item-price-small">${(item.price)}</p>
                                            </div>

                                            <div>
                                                <div className="count-controls">
                                                    
                                                    <button className="btn-count" onClick={() => removeItem(item)}>-</button>
                                                    <span className="cant-count">{countItemsCartById(item.id)}</span>
                                                    <button className="btn-count" onClick={() => addItem(item)}>+</button>
                                                </div>
                                            </div>

                                            <div className="item-price">
                                                <p>${((item.price ?? 0) * (item.quantity ?? 1))}</p>
                                                <button className="remove-btn" onClick={() => clearItem && clearItem(item.id)}>✕</button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                <div className="cart-actions">
                                    <button className="btn btn-secondary" onClick={() => clearCart && clearCart()}>Vaciar Carrito</button>
                                    <Link to="/" className="link">‹ Agregar más productos</Link>
                                </div>
                            </>
                        )}
                </div>

                <aside className="cart-sidebar">
                    <div className="coupon-box">
                        <div className="coupon-header">
                            <span className="coupon-icon">🎟️</span>
                            <span>Tengo cupón de descuento</span>
                        </div>
                        {/* Si quieres agregar input de cupon aquí */}
                    </div>

                    <div className="summary-box">
                        <hr />
                        <div className="summary-row total">
                            <span>Total</span>
                            <span className="total-amount">${(getTotalPrice()).toLocaleString('es-AR')}</span>
                        </div>
                        <button className="btn btn-primary wide" disabled={carrito.length === 0}>
                            Finalizar compra
                        </button>
                    </div>


                </aside>
            </div>

            {/* {(
                <div className="checkout-modal">
                    <div className="checkout-modal-inner">
                        <FormCheckOut handleCheckout={handleCheckout} />
                    </div>
                </div>
            )} */}
        </section>
    );
}

export default CartContainer