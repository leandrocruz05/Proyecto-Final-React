import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='INDUMENTARIA 2025' />} />
        <Route path='/detalle/:idParam' element={<ItemDetailContainer />} />
        <Route path='/categoria/:categParam' element={<ItemListContainer />} />
        <Route path='*' element={<div className='pageError'><h3>ERROR 404 - PAGINA NO ENCONTRADA</h3></div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App