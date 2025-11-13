import '../styles/NavBar.css'
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
                        <Link to="/categoria/Camisetas"><button value="CAMISETAS">CAMISETAS</button></Link>
                        <Link to="/categoria/Entrenamiento"><button value="ENTRENAMIENTO">ENTRENAMIENTO</button></Link>
                        <Link to="/categoria/Buzos"><button value="BUZOS">BUZOS</button></Link>
                        <Link to="/categoria/Accesorios"><button value="ACCESORIOS">ACCESORIOS</button></Link>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default NavBar