import { createContext, useState } from 'react'
import { toast } from 'react-toastify'

const CartContext = createContext({ carrito: [] })

export function CartContextProvider(props) {
    const [cartItems, setCartItems] = useState([])

    function addItem(item) { //Agrega un item al carrito
        const existItem = cartItems.find(cartItem => cartItem.id === item.id)

        if (existItem) {
            // Si existe, incremento la cantidad
            const newCartItems = cartItems.map(cartItem =>
                cartItem.id === item.id ?
                    { ...cartItem, quantity: cartItem.quantity + 1 }
                    :
                    cartItem
            )
            setCartItems(newCartItems)
        } else {
            // Si no existe, lo agrego al carrito
            const newCartItems = structuredClone(cartItems)
            newCartItems.push(item)
            setCartItems(newCartItems)
        }
        toast.success(`🛒¡Se agrego ${item.title} al carrito!`, {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            backgroundColor: "red",
            stopOnFocus: false
        });
    }

    function removeItem(item) { //Elimina un item del carrito
        const existeItem = cartItems.find(cartItem => cartItem.id === item.id)
        if (existeItem && existeItem.quantity > 1) {
            const newCartItems = cartItems.map(cartItem =>
                cartItem.id === item.id ?
                    { ...cartItem, quantity: cartItem.quantity - 1 }
                    :
                    cartItem
            )
            setCartItems(newCartItems)
        } else {
            clearItem(item.id)
        }
    }

    function clearItem(id) { //Elimina completamente un item del carrito
        const removeCartItems = cartItems.filter(cartItem => cartItem.id !== id)
        setCartItems(removeCartItems)
    }

    function clearCart() { // Vacía el carrito
        setCartItems([])
    }

    function countItemsCart() { //Cuenta la cantidad total de items en el carrito
        let totalItems = 0
        cartItems.forEach((item) => totalItems += item.quantity)
        return totalItems
    }

    function countItemsCartById(id) { //Cuenta la cantidad de un item por id en el carrito
        const item = cartItems.find(cartItem => cartItem.id === id)
        return item ? item.quantity : 0
    }

    function getTotalPrice() { //Calcula el precio total del carrito
        let totalPrice = 0
        cartItems.forEach((item) => totalPrice += (item.price * item.quantity))
        return totalPrice
    }

    return <CartContext.Provider
        value={{ carrito: cartItems, addItem, removeItem, clearItem, clearCart, countItemsCart, countItemsCartById, getTotalPrice }}>
        {props.children}
    </CartContext.Provider>
}

export default CartContext