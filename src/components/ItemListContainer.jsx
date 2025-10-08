import Item from './Item'
import './ItemListContainer.css'

function ItemListContainer(props) {
    return (
        <section className="productos">
            <h2>{props.greeting}</h2>
            <div className='contenedor-productos'>
                <Item
                    title="Camiseta Titular"
                    price="70000"
                    img="/camisetatitular.jpeg"
                />
                <Item
                    title="Camiseta LAtidos"
                    price="70000"
                    img="/camisetalatidos.jpeg"
                />
                <Item
                    title="Camiseta Alternativa II"
                    price="65000"
                    img="/camisetaalternativa.jpeg"
                />
                <Item
                    title="Camiseta Pura Sangre"
                    price="54000"
                    img="/camisetapurasangre.jpeg"
                />
                <Item
                    title="Buzo Canguro c/ friza"
                    price="59000"
                    img="/buzocangurofriza.jpeg"
                />
                <Item
                    title="Buzo Condór II Azul"
                    price="59000"
                    img="/buzocondorazul.png"
                />
                <Item
                    title="Buzo Condór II Rojo"
                    price="59000"
                    img="/buzocondorrojo.png"
                />
                <Item
                    title="Camperon impermeable"
                    price="145000"
                    img="/camperon.png"
                />
                <Item
                    title="Camiseta Titan Azul"
                    price="32000"
                    img="/azulentrenamiento.jpg"
                />
                <Item
                    title="Musculosa Dublin Azul"
                    price="32000"
                    img="/musculosa.jpg"
                />
                <Item
                    title="Remera Striker Azul"
                    price="34000"
                    img="/striker.jpg"
                />
                <Item
                    title="Camiseta Titan Roja"
                    price="32000"
                    img="/rojaentrenamiento.jpg"
                />
                <Item
                    title="Imán Estadio"
                    price="6000"
                    img="/iman.jpg"
                />
                <Item
                    title="Billetera Escudo"
                    price="12000"
                    img="/billetera.jpg"
                />
                <Item
                    title="Portallave Estadio"
                    price="20000"
                    img="/portallaves.jpg"
                />
                <Item
                    title="Llavero cinta"
                    price="2000"
                    img="/llavero.jpg"
                />
            </div>
        </section>
    )
}

export default ItemListContainer

