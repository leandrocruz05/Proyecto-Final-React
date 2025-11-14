import '../styles/ItemDetailContainer.css'
import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import { getProductosById } from '../data/firebaseService';
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
    const [itemData, setItemData] = useState()
    const [loader, setLoader] = useState(true);
    const { idParam } = useParams()

    useEffect(() => {
        setLoader(true)
        getProductosById(idParam)
            .then(res => {
                setItemData(res)
            })
            .catch(err => {
                console.error('Error fetching:', err)
            })
            .finally(() => {
                setLoader(false);
            })
    }, [])

    return (
        <ItemDetail
            itemData={itemData}
            loader={loader}
        />
    )
}

export default ItemDetailContainer;