import { createContext, useState } from 'react'

const CartContext = createContext({ carrito: [] })

export function CartContextProvider(props) {
    const [cartItems, setCartItems] = useState([])

    function addItem(item) {
        const existItem = cartItems.find(cartItem => cartItem.id === item.id)

        if (existItem) {
            // Si existe, incremento la cantidad
            const newCartItems = cartItems.map(cartItem =>
                cartItem.id === item.id ?
                    { ...cartItem, quantity: cartItem.quantity + item.quantity }
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
    }

    function removeItem(id) {
        const removeCartItems = cartItems.filter(cartItem => cartItem.id !== id)
        setCartItems(removeCartItems)
    }

    function clearCart() {
        setCartItems([])
    }

    function countItemsCart() {
        let totalItems = 0
        cartItems.forEach((item) => totalItems += item.quantity)
        return totalItems
    }

    function getTotalPrice() {
        let totalPrice = 0
        cartItems.forEach((item) => totalPrice += (item.price * item.quantity))
        return totalPrice
    }

    return <CartContext.Provider
        value={{ carrito: cartItems, addItem, removeItem, clearCart, countItemsCart, getTotalPrice }}>
        {props.children}
    </CartContext.Provider>
}

export default CartContext