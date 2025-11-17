import { initializeApp } from "firebase/app";
import { setDoc, collection, doc, getDoc, getDocs, getFirestore, query, where, addDoc } from "firebase/firestore"
import productos from "./data";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_TLA_APIKEY,
    authDomain: import.meta.env.VITE_TLA_AUTH,
    projectId: import.meta.env.VITE_TLA_PROJECTID,
    storageBucket: import.meta.env.VITE_TLA_BUCKET,
    messagingSenderId: "468644251802",
    appId: import.meta.env.VITE_TLA_APPID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getProductos() {
    const productosRef = collection(db, "productosTienda")
    const productsSnapshot = await getDocs(productosRef)
    const docs = productsSnapshot.docs;
    const dataDocs = docs.map(item => {
        return { ...item.data(), id: item.id }
    })
    return dataDocs
}

export async function getProductosById(idParam) {
    const docRef = doc(db, "productosTienda", idParam)
    const docSnapshot = await getDoc(docRef)
    const docData = docSnapshot.data()
    const idDoc = docSnapshot.id
    return { ...docData, id: idDoc }
}

export async function getProductosByCateg(catParam) {
    const productosRef = collection(db, "productosTienda")
    const q = query(productosRef, where("category", "==", catParam))
    const productsSnapshot = await getDocs(q)
    const docs = productsSnapshot.docs
    const dataDocs = docs.map(item => {
        return { ...item.data(), id: item.id }
    })
    return dataDocs
}

export async function createBuyOrder(orderData) {
    const orderRef = collection(db, "ordenesDeCompra")
    const newDoc = await addDoc(orderRef, orderData)
    return newDoc
}

export async function exportarProductos() {
    const productosRef = collection(db, "productosTienda")
    for (let item of productos) {
        const productId = item.id
        delete item.id
        const docRef = doc(productosRef, productId)
        const newDoc = await setDoc(docRef, item)
    }
}
export default getProductos