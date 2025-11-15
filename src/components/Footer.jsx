import '../styles/Footer.css'
import logo from '../assets/logo.png';

function Footer() {
    return (
        <>
            <section className="seccion-identidad">
                <div className="nombre-equipo">
                    <h2>CLUB ATLÉTICO LOS ANDES</h2>
                </div>
            </section>

            <div className="footer-losandes">
                <div className="footer-container">
                    <div className="footer-col">
                        <img src={logo} alt="Los Andes Store" className="footer-logo" />
                        <h2>Novedades</h2>

                        <form className="footer-newsletter">
                            <input type="email" placeholder="Ingresá tu e-mail" />
                            <button type="submit">→</button>
                        </form>
                    </div>

                    <div className="footer-col">
                        <h2>Información</h2>
                        <ul>
                            <li><a href="#">Cambios y devoluciones</a></li>
                            <li><a href="#">Envíos y seguimiento</a></li>
                            <li><a href="#">Contacto</a></li>
                            <li><a href="#">Política de privacidad</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h2>Contacto</h2>
                        <p>
                            <a href="https://www.google.com/maps/search/?api=1&query=Av.+Santa+Fe+159,+Lomas+de+Zamora" target="_blank"
                                className="contact-link">
                                <img src="/icons/direccion.png" alt="Ubicación" />
                                Av. Santa Fe 159, Lomas de Zamora
                            </a>
                        </p>

                        <p>
                            <a href="https://wa.me/5491125923691" target="_blank" className="contact-link">
                                <img src="/icons/whatsapp.png" alt="WhatsApp" />
                                +54 9 11 2592-3691
                            </a>
                        </p>

                        <p>
                            <a href="mailto:tiendalosandesoficial@gmail.com" className="contact-link">
                                <img src="/icons/mail.png" alt="Correo" />
                                tiendalosandesoficial@gmail.com
                            </a>
                        </p>
                    </div>

                    <div className="footer-col">
                        <h2>Seguinos</h2>
                        <div className="footer-social">
                            <a href="#"><img src="/icons/facebook.png" alt="Facebook" /></a>
                            <a href="#"><img src="/icons/instagram.png" alt="Instagram" /></a>
                            <a href="#"><img src="/icons/x.png" alt="Twitter" /></a>
                            <a href="#"><img src="/icons/youtube.png" alt="YouTube" /></a>
                            <a href="#"><img src="/icons/tiktok.png" alt="TikTok" /></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2025 Club Atlético Los Andes - Tienda Oficial | Desarrollado por Leandro Cruz</p>
                </div>
            </div>
        </>
    )
}

export default Footer