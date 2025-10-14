import "./ItemCount.css"
import { useState } from "react"

function ItemCount() {
    const [count, setCount] = useState(0)
    const [limit, setLimit] = useState(false)
    const maxValue = 10

    function sumar() {
        if (count < maxValue) {
            setCount(count + 1)
        }
        else {
            setLimit(true)
        }
    }

    function restar() {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <div className="item-count">
                <button onClick={restar}>-</button>
                <p>{count}</p>
                <button onClick={sumar}>+</button>
            </div>
            {
                limit ?
                    <p>Alcanzaste el limite de productos</p>
                    :
                    null
            }
        </div>
    )
}

export default ItemCount