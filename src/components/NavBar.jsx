import './NavBar.css'
import CartWidget from "./CartWidget"

function NavBar() {
    return (
        <>
            <div className="navbar-top">
                <div className="logo">
                    <img src="/src/assets/logo.png" alt="Logo Store" />                    
                </div>
                <CartWidget/>
            </div>
            <div className="navbar-bottom">
                <nav className="navbar-menu">
                    <ul id="filtro-tipo">
                        <button value="">TODOS</button>
                        <button value="camiseta">CAMISETAS</button>
                        <button value="entrenamiento">ENTRENAMIENTO</button>
                        <button value="buzo">BUZOS</button>
                        <button value="accesorios">ACCESORIOS</button>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default NavBar