import '../styles/ItemListContainer.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Item from "./Item"
import Loader from './Loader'
import getProductos, { getProductosByCateg } from '../data/firebaseService'

function ItemListContainer(props) {
    const [producto, setProductos] = useState([])
    const { categParam } = useParams()
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        setLoader(true)
        if (categParam) {
            getProductosByCateg(categParam).then(dato => {
                setProductos(dato)
                setLoader(false)
            });
        } else {
            getProductos().then(dato => {
                setProductos(dato)
                setLoader(false)
            })
        }
    }, [categParam])

    return (
        <section className="productos">
            {<h2>{categParam ? categParam.toUpperCase() : props.greeting}</h2>}
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