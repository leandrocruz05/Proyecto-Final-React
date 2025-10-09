import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ItemDetailContainer />
      {/* <Routes>
        <Route path='/' element={<ItemListContainer greeting='INDUMENTARIA 2025' />}></Route>
        <Route path='/detalle/idParam' element={<ItemDetailContainer />}></Route>
        <Route path='/categoria/catParam' element={<ItemListContainer greeting='' />}></Route>
        <Route path='*' element={<div className='pageError'><h3>ERROR 404 - PAGINA NO ENCONTRADA</h3></div>}></Route>
      </Routes> */}
    </BrowserRouter>
  )
}

export default App