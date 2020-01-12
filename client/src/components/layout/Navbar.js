import React from 'react';

import Logo from '../../img/logo-cut.png';

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='nav__menu container'>
        <div className='nav__logo' id='nav-link-logo'>
          <img className='nav__logo__image' src={Logo} />
        </div>
        <div className='nav__menu--right'>
          <ul>
            <li>
              <a className='nav__links' id='nav-link-home' href='/'>
                Home
              </a>
            </li>
            <li>
              <a className='nav__links' id='nav-link-about'>
                About
              </a>
            </li>
            <li>
              <a className='nav__links' id='nav-link-gallery' href='/gallery'>
                Gallery
              </a>
            </li>
            <li>
              <a className='nav__links' id='nav-link-location'>
                Location
              </a>
            </li>
          </ul>
        </div>

        <div className='nav__menuicon'>
          <i className='fa fa-bars fa-2x'></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
