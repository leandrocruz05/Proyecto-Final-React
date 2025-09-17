import Item from './Item'
import './ItemListContainer.css'

import titular from '../assets/productos/camisetatitular.jpeg'
import latidos from '../assets/productos/camisetalatidos.jpeg'
import alternativa from '../assets/productos/camisetaalternativa.jpeg'
import purasangre from '../assets/productos/camisetapurasangre.jpeg'
import cangurofriza from '../assets/productos/Buzocangurofriza.jpeg'
import condorazul from '../assets/productos/buzocondorazul.png'
import condorrojo from '../assets/productos/buzocondorrojo.png'
import impermeable from '../assets/productos/camperon.png'
import titanazul from '../assets/productos/azulentrenamiento.jpg'
import dublinazul from '../assets/productos/musculosa.jpg'
import strikerazul from '../assets/productos/striker.jpg'
import titanroja from '../assets/productos/rojaentrenamiento.jpg'
import iman from '../assets/productos/iman.jpg'
import billetera from '../assets/productos/billetera.jpg'
import portallave from '../assets/productos/portallaves.jpg'
import llavero from '../assets/productos/llavero.jpg'

function ItemListContainer(props) {
    return (
        <section className="productos">
            <h2>{props.greeting}</h2>
            <div className='contenedor-productos'>
                <Item
                    title="Camiseta Titular"
                    price="70000"
                    img={titular}
                />
                <Item
                    title="Camiseta Titular"
                    price="70000"
                    img={latidos}
                />
                <Item
                    title="Camiseta Alternativa II"
                    price="65000"
                    img={alternativa}
                />
                <Item
                    title="Camiseta Pura Sangre"
                    price="54000"
                    img={purasangre}
                />
                <Item
                    title="Buzo Canguro c/ friza"
                    price="59000"
                    img={cangurofriza}
                />
                <Item
                    title="Buzo Condór II Azul"
                    price="59000"
                    img={condorazul}
                />
                <Item
                    title="Buzo Condór II Rojo"
                    price="59000"
                    img={condorrojo}
                />
                <Item
                    title="Camperon impermeable"
                    price="145000"
                    img={impermeable}
                />
                <Item
                    title="Camiseta Titan Azul"
                    price="32000"
                    img={titanazul}
                />
                <Item
                    title="Musculosa Dublin Azul"
                    price="32000"
                    img={dublinazul}
                />
                <Item
                    title="Remera Striker Azul"
                    price="34000"
                    img={strikerazul}
                />
                <Item
                    title="Camiseta Titan Roja"
                    price="32000"
                    img={titanroja}
                />
                <Item
                    title="Imán Estadio"
                    price="6000"
                    img={iman}
                />
                <Item
                    title="Billetera Escudo"
                    price="12000"
                    img={billetera}
                />
                <Item
                    title="Portallave Estadio"
                    price="20000"
                    img={portallave}
                />
                <Item
                    title="Llavero cinta"
                    price="2000"
                    img={llavero}
                />
            </div>
        </section>
    )
}

export default ItemListContainer

