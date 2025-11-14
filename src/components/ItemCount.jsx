import "../styles/ItemCount.css"
import { useState } from "react";

function ItemCount({ stock }) {
    const [count, setCount] = useState(0);
    const [limit, setLimit] = useState(false);

    function sumar() {
        if (count < stock) {
            setCount(count + 1);
        } else {
            setLimit(true);
        }
    }

    function restar() {
        if (count > 0) {
            setCount(count - 1);
            if (limit) setLimit(false);
        }
    }

    return (
        <div>
            <div className="item-count">
                <button onClick={restar} disabled={count === 0}>-</button>
                <p>{count}</p>
                <button onClick={sumar} disabled={stock === 0}>+</button>
            </div>
            {limit && <p>Alcanzaste el límite de stock</p>}
            {stock === 0 && <p>Sin stock</p>}
        </div>
    )
}

export default ItemCount;