import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { useParams } from 'react-router'
import getProductos, { getProductosByCateg } from '../data/MockAPI'
import Item from "./Item"
import Loader from './Loader'

function ItemListContainer(props) {
    const [producto, setProductos] = useState([])
    const { catParam } = useParams()
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        setLoader(true)
        if (catParam) {
            getProductosByCateg(catParam).then(dato => {
                setProductos(dato)
                setLoader(false)
            });
        } else {
            getProductos().then(dato => {
                setProductos(dato)
                setLoader(false)
            })
        }
    }, [catParam])

    return (
        <section className="productos">
            <h2>{props.greeting}</h2>
            {
                loader ?
                    <Loader />
                    :
                    <div className='contenedor-productos'>
                        {
                            producto.map(item =>
                                <Item
                                    key={item.id}
                                    {...item} />)
                        }
                    </div>
            }
        </section>
    )
}

export default ItemListContainer