import React, { useState } from 'react';
import "./Lizard.css";
import { Link } from "react-router-dom";

import Dropdown from './Dropdown';



function Misafir() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const onMouseEnter = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(true);
      }
    };
  
    const onMouseLeave = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(false);
      }
    };

  return (
    <>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/Lizard' className='nav-links' onClick={closeMobileMenu}>
              Misafir Ol
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/Buddy'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Gezi arkadaşı bul <i className='fas fa-caret-down' />
            </Link>
             {dropdown && <Dropdown />}
        
          </li> 
        </ul>
        
      
    </>
  );
}

export default Misafir