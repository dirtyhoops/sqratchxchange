import React, { useState, useEffect } from 'react';

import Logo from '../../img/sxlogo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Function that handles the scroll event that triggers when the page is scrolled
  const handleScroll = () => {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== true) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  };

  useEffect(() => {
    handleScroll();
  }, [handleScroll]);

  return (
    <nav className={scrolled ? 'nav black' : 'nav'}>
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
