import './Item.css'
import { Link } from 'react-router'

export default function Item(props) {
    return (
        <div className="card-producto">
            <Link to={`/detalle/${props.id}`}>
                <img src={props.img} />
            </Link>
            <div className="info-producto">
                <h3>{props.title}</h3>
                <span>${props.price}</span>
                <button>¡La quiero!</button>
            </div>
        </div>
    )
}