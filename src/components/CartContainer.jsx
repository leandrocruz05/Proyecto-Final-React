import '../styles/CartContainer.css'
import { useContext, useState } from "react";
import { Link } from "react-router"
import CartContext from "../context/CartContext";
import { createBuyOrder } from "../data/firebaseService";
import Swal from "sweetalert2";
import FormCheckOut from "./FormCheckout";

function CartContainer() {
    const { carrito, addItem, removeItem, clearItem, clearCart, countItemsCart, countItemsCartById, getTotalPrice, aplicaDescuento } = useContext(CartContext)
    const [orderCreated, setOrderCreated] = useState(false)
    const [cupon, setCupon] = useState("")
    const [descuento, setDescuento] = useState(0);
    const [showCheckout, setShowCheckout] = useState(false);

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
                icon: "success",
            })

            setOrderCreated(response.id)
            clearCart();
        } catch (err) {
            console.error(err);
            Swal.fire("Error", "Ocurrió un error al crear la orden. Intenta nuevamente.", "error")
        }
    }

    function handleAplicarCupon() {
        const valor = aplicaDescuento(cupon)
        setDescuento(valor)
    }

    function handleFinalizarCompra() {
        if (carrito.length === 0) {
            Swal.fire("Carrito vacío", "No hay productos en el carrito para finalizar la compra.", "warning")
            return
        }
        setShowCheckout(true)
    }

    function handleCancelCheckout() {
        setShowCheckout(false)
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

    if (showCheckout) {
        return (
            <section className="container">
                <div className="form-checkout">
                    <div className="form-titulo">
                        <div className="link-back">
                            <button onClick={handleCancelCheckout}>‹ Volver al carrito</button>
                        </div>
                        <h2 className="title">FINALIZAR COMPRA</h2>
                    </div>
                    <div className="form-contenido">
                        <div className="formCheckOut">
                            <FormCheckOut handleCheckout={handleCheckout} />
                        </div>
                        <div className="orden-compra">
                            <h3>Resumen de tu pedido</h3>
                            <div className="detalle-items">
                                {carrito.map((item) => (
                                    <div key={item.id} className="detalle-item">
                                        <img src={item.img} alt={item.title} className="producto-img" />
                                        <div className="producto-info">
                                            <span className="producto-name">{item.title}</span>
                                            <span className="producto-cant">x{countItemsCartById(item.id)}</span>
                                        </div>
                                        <span className="producto-price">${((item.price ?? 0) * (item.quantity ?? 1)).toLocaleString('es-AR')}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="producto-total">
                                <div className="summary-row">
                                    <span>Subtotal</span>
                                    <span>${(getTotalPrice() ?? 0).toLocaleString('es-AR')}</span>
                                </div>
                                {descuento > 0 && (
                                    <div className="summary-row discount">
                                        <span>Descuento</span>
                                        <span>-${(descuento ?? 0).toLocaleString('es-AR')}</span>
                                    </div>
                                )}
                                <hr />
                                <div className="summary-row total">
                                    <span><strong>Total</strong></span>
                                    <span className="total"><strong>${((getTotalPrice() ?? 0) - (descuento ?? 0)).toLocaleString('es-AR')}</strong></span>
                                </div>
                            </div>
                        </div>
                    </div>
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
                        <div className="carrito-vacio">
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
                                                    <button className="btn-count" onClick={() => { removeItem(item); handleAplicarCupon(); }}>-</button>
                                                    <span className="cant-count">{countItemsCartById(item.id)}</span>
                                                    <button className="btn-count" onClick={() => { addItem(item); handleAplicarCupon(); }}>+</button>
                                                </div>
                                            </div>

                                            <div className="item-price">
                                                <p>${((item.price ?? 0) * (item.quantity ?? 1)).toLocaleString('es-AR')}</p>
                                                <button className="remove-btn" onClick={() => { clearItem && clearItem(item.id) }}>✕</button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                <div className="cart-actions">
                                    <button className="btn btn-secondary" onClick={() => { clearCart && clearCart(); }}>Vaciar Carrito</button>
                                    <Link to="/" className="link">‹ Agregar más productos</Link>
                                </div>
                            </>
                        )}
                </div>

                <aside className="cart-sidebar">
                    <div className="cupon-box">
                        <div className="cupon-header">
                            <span className="coupon-icon">🎟️</span>
                            <span>Tengo cupón de descuento</span>
                        </div>
                        <input type="text" className="cupon-input" placeholder="Ingresa tu cupón aquí" value={cupon} onChange={(evento) => setCupon(evento.target.value)} />
                        <button className="btn btn-secondary" onClick={handleAplicarCupon}>Aplicar cupón</button>

                    </div>

                    <div className="summary-box">
                        <div className="summary-row subtotal">
                            <span>Subtotal</span>
                            <span>${(getTotalPrice() ?? 0).toLocaleString('es-AR')}</span>

                        </div>
                        <div className="summary-row discount">
                            <span>Cupón descuento</span>
                            <span>-${(descuento ?? 0).toLocaleString('es-AR')}</span>
                        </div>
                        <hr />
                        <div className="summary-row total">
                            <span>Total</span>
                            <span className="total">${((getTotalPrice() ?? 0) - (descuento ?? 0)).toLocaleString('es-AR')}</span>
                        </div>
                        <button className="btn btn-primary finalizar" onClick={handleFinalizarCompra}>
                            Finalizar compra
                        </button>
                    </div>
                </aside>
            </div>
        </section>
    )
}

export default CartContainer