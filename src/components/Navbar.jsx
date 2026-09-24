import { NavLink, Link } from "react-router-dom";
import { BookOpen, ShoppingBag } from "lucide-react";

function Navbar({ cartCount }) {
  return (
    <header className="navbar-shell">
      <nav className="navbar container">
        <Link to="/" className="brand" aria-label="MiniBook home">
          <span className="brand-icon"><BookOpen size={20} /></span>
          <span>MiniBook</span>
        </Link>

        <div className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/cart" className="cart-link">
            <ShoppingBag size={18} />
            Cart
            <span className="cart-badge">{cartCount}</span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
