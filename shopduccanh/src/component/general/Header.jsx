import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div>
      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-7">
                <div className="header__top__left">
                  <p>Shop quần áo thể thao</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-5">
                <div className="header__top__right">
                  <div className="header__top__links">
                    <Link
                      to="/shop/signin"
                      className={isActive('/shop/signin') ? 'active' : ''}
                    >
                      Sign in
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <div className="header__logo">
                <Link to="/">
                  <img src="img/logo.png" alt="Logo" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <nav className="header__menu mobile-menu">
                <ul>
                  <li className={isActive('/home') ? 'active' : ''}>
                    <Link to="/home">Home</Link>
                  </li>
                  <li className={isActive('/shop') ? 'active' : ''}>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li className={isActive('/about') ? 'active' : ''}>
                    <Link to="/about">About</Link>
                  </li>
                  <li className={isActive('/blog') ? 'active' : ''}>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li className={isActive('/contact') ? 'active' : ''}>
                    <Link to="/contact">Contacts</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="header__nav__option">
                <a href="#" className="search-switch">
                  <img src="img/icon/search.png" alt="Search" />
                </a>
                <a href="#">
                  <img src="img/icon/heart.png" alt="Favorites" />
                </a>
                <a href="#">
                  <img src="img/icon/cart.png" alt="Cart" /> <span>0</span>
                </a>
                <div className="price">$0.00</div>
              </div>
            </div>
          </div>
          <div className="canvas__open">
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
