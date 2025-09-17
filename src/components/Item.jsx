import './Item.css'

export default function Item(props) {
    return (
        <div className="card-producto">
            <img src={props.img}/>
                <div className="info-producto">
                    <h3>{props.title}</h3>
                    <span>${props.price}</span>
                    <button>¡La quiero!</button>
                </div>
        </div>
    )
}