import './NavBar.css'
import CartWidget from "./CartWidget"
import { Link } from 'react-router'

function NavBar() {
    return (
        <>
            <div className="navbar-top">
                <div className="logo">
                    <Link to="/"><img src="/src/assets/logo.png" alt="Logo Store" /></Link>
                </div>
                <CartWidget/>
            </div>
            <div className="navbar-bottom">
                <nav className="navbar-menu">
                    <ul id="filtro-tipo">
                        <Link to="/"><button value="">TODOS</button></Link>
                        <Link to="/camisetas"><button value="camisetas">CAMISETAS</button></Link>
                        <Link to="/entrenamiento"><button value="entrenamiento">ENTRENAMIENTO</button></Link>
                        <Link to="/buzos"><button value="buzos">BUZOS</button></Link>
                        <Link to="/accesorios"><button value="accesorios">ACCESORIOS</button></Link>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default NavBar