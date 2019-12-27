import React from 'react';

const Navbar = () => {
  return (
    <nav class='nav'>
      <div class='nav__menu'>
        <div class='nav__menu--left'>
          <ul>
            <li>
              <a class='nav__links' id='nav-link-home'>
                Home
              </a>
            </li>
            <li>
              <a class='nav__links' id='nav-link-about'>
                About
              </a>
            </li>
            <li>
              <a class='nav__links' id='nav-link-location'>
                Location
              </a>
            </li>
          </ul>
        </div>
        <div class='nav__logo' id='nav-link-logo'>
          <img class='nav__logo__image' src='./img/logo-cut.png' />
        </div>
        <div class='nav__menuicon'>
          <i class='fa fa-bars fa-2x'></i>
        </div>
        <div class='nav__menu--right'>
          <ul>
            <li>
              <a class='nav__links' id='nav-link-drinks'>
                Drinks
              </a>
            </li>
            <li>
              <a class='nav__links' id='nav-link-menu'>
                Menu
              </a>
            </li>
            <li>
              <a class='nav__links' id='nav-link-reservation'>
                Reservation
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
