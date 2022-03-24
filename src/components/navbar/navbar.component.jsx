import { React, useState } from "react";
// import { Link } from 'react-router-dom';
import './navbar.styles.css';
import Option from '../../directory/navbar/element.component';


const Navbar = () => {

    const [show, setShow] = useState('open');

    const handleClick = () => {
        if (show === 'open') {
            setShow('');
        } else {
            setShow('open');
        }
    }

    return (
        <div className={`navbar ${show}`}>
            <div className="logo-details">
                <i className="fab fa-shopware icon"></i>
                <div className="logo_name">MovieHot</div>
                <i className='bx bx-menu' id="btn" onClick={() => handleClick()}></i>
            </div>
            <Option />
        </div>
    )
}

export default Navbar;