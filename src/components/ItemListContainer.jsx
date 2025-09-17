import './ItemListContainer.css'

function ItemListContainer (props) {
    return (
        <section className="productos">
            <h2>{props.greeting}</h2>
            <div className='contenedor-productos'>

            </div>
        </section>
    )
}

export default ItemListContainer