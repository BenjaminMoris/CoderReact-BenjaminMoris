import { Link } from "react-router-dom";
import "../css/Navbar.css";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar-container">

      <Link className="nav-link" to="/">
        <img src="/logo.jpeg" alt="Logo" className="imgnav" />
      </Link>

      
      <Link className="nav-link" to="/category/motores">Motores</Link>
      <Link className="nav-link" to="/category/frenos">Frenos</Link>
      <Link className="nav-link" to="/category/neumaticos">Neumáticos</Link>
      <Link className="nav-link" to="/category/accesorios">Accesorios</Link>

      <CartWidget />
    </nav>
  );
};

export default Navbar;