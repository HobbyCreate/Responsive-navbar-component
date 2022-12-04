import React, { useState } from 'react';
import './Navbar.css';
import { navbarList } from './NavbarLists';
import { FaLaptopCode } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';

function Navbar() {
    const [click, setClick] = useState(false);

    const onClickHandler = () => {
        setClick(!click);
    }

    return (
        <div className="navbar-container">
            <div className="navbar-logo">
                <i><FaLaptopCode /></i>
                <h3>Code Mania</h3>
            </div>
            
            <ul className={ click ? "navbar-menu-active" : "navbar-menu"}>
                {
                    navbarList.map((item, index) =>
                            <li key={index} >
                                <a href={item.link}>{item.title}</a>
                            </li>

                    )
                }
            </ul>

            <div className="hamburger-container">
                {click ? <RxCross2 className="hamburger-icon-active" onClick={onClickHandler} /> 
                : <GiHamburgerMenu className="hamburger-icon"  onClick={onClickHandler} />}
            </div>
        </div>
    )
}

export default Navbar
