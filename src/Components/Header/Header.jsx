import React from 'react';
import './Header.css';
import Logo from "../../images/Logo.svg";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
           <img src={Logo} alt="Logo" />
          <nav>
            <Link to="/">Shop</Link>
            <Link to="/orders">Order</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/login">Login</Link>
          </nav>
        </div>
    );
};

export default Header;