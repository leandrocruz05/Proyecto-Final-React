import productos from "./data"

export default function getProductos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 0);
    })
}

export function getProductosById(idParam) {
    return new Promise((resolve) => {
        const itemId = productos.find((item) => item.id === parseInt(idParam))
        setTimeout(() => { resolve(itemId) }, 0)
    })
}

export function getProductosByCateg(catParam) {
    return new Promise((resolve) => {
        const itemCateg = productos.filter((item) => item.category === catParam)
        setTimeout(() => { resolve(itemCateg) }, 0)
    })
}

// export function getStockById(idParam) {
//     return new Promise((resolve) => {
//         const itemStock = productos.filter((stock) => stock.id === parseInt(idParam))
//         resolve(itemStock.stock)
//     })
// }