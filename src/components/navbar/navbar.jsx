
import './navbar.css';
import logo from "../../assets/images/logo.png";
import shoppingCart from "../../assets/images/shoppingCart.png";
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <header className="navbar">

      <div className="logo-container">
        <img src={logo} alt="Logo" />
      </div>
    
      <nav className="pages-container">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" name="searchBar" id="searchBar" placeholder="Search products..." />
      </div>
      
      <div className="actions">
         <div>
            <NavLink to="/cart">
            <img src={shoppingCart} 
              alt="Shopping Cart"
              className="cart-icon"
             />
            </NavLink>
        
        </div>
        
        <div>
            <NavLink to="/profile">Profile</NavLink>
         
        </div>
     </div>

    </header>
  );
}

export default Navbar;