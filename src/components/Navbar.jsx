import "../css/Navbar.css"
import CartWidget from "./CartWidget"

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <a className="nav-link" href="">
        <img src="../logo.jpeg" alt="Logo" className="imgnav" />
      </a>
      <a className="nav-link" href="">Catalogo</a>
      <a className="nav-link" href="">Contacto</a>
      <a className="nav-link" href="">Cotizacion</a>
      <a className="nav-link" href="">Post-Venta</a>
      <CartWidget />
    </nav>
  )
}

export default Navbar;
