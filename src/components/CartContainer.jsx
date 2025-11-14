import { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import { createBuyOrder } from "../data/firebaseService";


function CartContainer() {
    const { cart, clearCart } = useContext(CartContext)
    const [orderCreated, setOrderCreated] = useState()

    async function handleCheckout(formData) {
        // Datos de la orden
        const orderData = {
            buyer: formData,
            cart,
            total: 999,
            date: new Date(),
        }

        const response = await createBuyOrder(orderData)
        // Sweet Alert para mensaje de éxito
        Swal.fire({
            title: '¡Compra exitosa!',
            text: `Gracias por tu compra! Este es el ID de tu orden: ${response.id}`,
            icon: 'success',
            confirmButtonText: 'Aceptar'
        })
        setOrderCreated(response.id)
        clearCart();
    }

    if (orderCreated) {
        return <section>
            <h2>Gracias por tu compra!</h2>
            <p>Este es el id: {orderCreated}</p>
        </section>
    }

    return (
        <section>

        </section>
    )
}

export default CartContainer;