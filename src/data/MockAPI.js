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
        const itemRequerido = productos.find((item) => item.id === parseInt(idParam))
        setTimeout(() => { resolve(itemRequerido) }, 0)
    })
}

export function getProductosByCateg(catParam) {
    return new Promise((resolve) => {
        const itemRequerido = productos.filter((item) => item.category === catParam)
        setTimeout(() => { resolve(itemRequerido) }, 0)
    })
}