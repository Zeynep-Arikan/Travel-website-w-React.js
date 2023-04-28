import React, { useState } from "react";
import { MenuItems } from "./DropdownItems";
import "./Dropdown.css";
import { Link } from "react-router-dom";

function Dropdown() {
  // const [click, setClick] = useState(false);

  // const handleClick = () => setClick(!click);

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
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              {/* burası dorpdown menunun açılıp içindekileri yazdığı yer */}
              {/* <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link> */}

              <li className="nav-item">
                <Link
                  to="/Misafir"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >Misafir ol</Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/Buddy"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >Gezi arkadaşı Bul</Link>
              </li>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
