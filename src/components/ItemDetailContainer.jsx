import './ItemDetailContainer.css'
import { useState } from "react";
import { DotLoader, RingLoader } from "react-spinners";
import ItemCount from './ItemCount';

function ItemDetailContainer() {
    const [itemData, setItemData] = useState({ loading: false });

    return (
        <div>
            {
                itemData.loading ?
                    <div className="loader">
                        <DotLoader color="red" />
                    </div>
                    :
                    <div className="detalle">
                        <div className="cuadro">
                            <div className="img"></div>
                        </div>
                        <div className="info">
                            <div className="titulo">Titulo</div>
                            <div className="precio">Precio</div>
                            <div className="beneficios">
                                💳 6 cuotas sin interés de $16.666,50<br />
                                💵<span>10% de descuento</span> pagando con Transferencia o depósito
                            </div>
                            <div className="talles">
                                <label>Talle:</label>
                                <button className="talle-btn">S</button>
                                <button className="talle-btn">M</button>
                                <button className="talle-btn selected">L</button>
                                <button className="talle-btn">XL</button>
                                <button className="talle-btn">XXL</button>
                            </div>
                            <div className="acciones">
                                <ItemCount />
                                <button className="agregar-carrito">AGREGAR AL CARRITO</button>
                            </div>
                            <div className="envio">
                                <label>Medios de envío</label><br />
                                <input type="text" className="codigo-postal" placeholder="Tu código postal" />
                                <button className="btn-codpos">CALCULAR</button>
                            </div>
                            <div className="info-local">
                                <span className="info-local-text">
                                    Estadio Los Andes - Av. Santa Fe 159, Lomas de Zamora Atención L a V 11 a 13 y 14 a 20, Sábados 11 a 18.
                                </span>
                                <span className="info-local-gratis"><b>Gratis</b></span>
                            </div>
                        </div>
                    </div>

            }
        </div>
    );
}

export default ItemDetailContainer;