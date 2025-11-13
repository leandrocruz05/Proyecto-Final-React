import { initializeApp } from "firebase/app";
import { setDoc, collection, doc, getDoc, getDocs, getFirestore, query, where, addDoc } from "firebase/firestore"
import productos from "./data";

const firebaseConfig = {
    apiKey: "AIzaSyDF1yeRHccNZsNl_XDmb_7mwAcTMZ-_A-Q",
    authDomain: "db-react-la.firebaseapp.com",
    projectId: "db-react-la",
    storageBucket: "db-react-la.firebasestorage.app",
    messagingSenderId: "468644251802",
    appId: "1:468644251802:web:6f008179878a99cef1f723"
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
    const newDoc = addDoc(orderRef, orderData)
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