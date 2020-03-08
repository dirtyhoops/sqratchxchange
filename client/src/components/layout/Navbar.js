import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { resetLoadingItems } from '../../actions/gallery';

import Logo from '../../img/sxlogo-sm.png';

const Navbar = ({ resetLoadingItems }) => {
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
        <div className='nav__menu__logo' id='nav-link-logo'>
          <Link to={'/'} onClick={() => resetLoadingItems()}>
            <img
              className='nav__menu__logo__image'
              src={Logo}
              alt='sqratch xchange logo'
            />
          </Link>
        </div>
        <div className='nav__menu__links'>
          <ul>
            <li className='nav__links'>
              <Link to={'/'} onClick={() => resetLoadingItems()}>
                Home
              </Link>
            </li>

            {/* <Link to={'/about'}> */}
            {/* <li className='nav__links'>About</li> */}
            {/* </Link> */}

            <li className='nav__links'>
              <Link to={'/gallery'}>Gallery</Link>
            </li>

            {/* <Link to={'/location'}> */}
            {/* <li className='nav__links'>Location</li> */}
            {/* </Link> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

// resetLoadingItems

export default connect(null, { resetLoadingItems })(Navbar);
