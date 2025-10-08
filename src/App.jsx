import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='INDUMENTARIA 2025' />}></Route>
        <Route path='/detalle/idParam' element={<ItemListContainer />}></Route>
        <Route path='/categoria/catParam' element={<ItemListContainer greeting='' />}></Route>
        <Route path='*' element={<div><h2>Error 404</h2></div>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App