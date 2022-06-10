import * as React from 'react';
import { Link } from 'gatsby';
import logo from '../../uploads/logo_indexel.webp';
import '../../assets/css/navBar.css';

const Header = () => {
  return (
    <header className="header-nav">
      <Link to="/" className="logo-link-nav">
        <img className="img-nav" src={logo} alt="logo" />
      </Link>
      <div className="links-nav">
        <Link to="" className="link-ancre">
          Expérience utilisateur
        </Link>
        <Link to="" className="link-ancre">
          Culture green
        </Link>
        <Link to="" className="link-ancre">
          Impact écologique
        </Link>
        <Link to="" className="link-ancre-contact">
          Contactez-nous
        </Link>
      </div>
    </header>
  );
};

export default Header;
