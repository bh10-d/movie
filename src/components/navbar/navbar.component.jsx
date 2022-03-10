import React from "react";
// import { Link } from 'react-router-dom';
import './navbar.styles.css';


const Navbar = () => {


    return (
        <div className="navbar_desk">
            <div className="navbar_head">
                <div>
                    <img src={'/avatar.jpg'} alt="5anhemsieunhan" />
                    <span>movie</span>
                </div>
                <button onClick={() =>{}}> 
                    <i className="fa-solid fa-bars"></i>
                </button>
                {/* <label htmlFor="hamburger"><i className="fa-solid fa-bars"></i></label>
                <input id="hamburger" type="checkbox" hidden/> */}
            </div>
            <ul className="navbar_desk_ul">
                <li><input id="search" type="text" title="Nhap ten phim di mat lon" placeholder="Enter film name"/></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Movie</a></li>
                <li><a href="#">History</a></li>
            </ul>
            <div className="navbar_account">
                <img src="./avatar.jpg" alt="avatar" />
                <div className="navbar_account_info">
                    <span>BuiDucHieu</span><br />
                    <span>Admin</span>
                </div>
                <button><i className="fa-solid fa-arrow-right-from-bracket"></i></button>
            </div>
        </div>
    )
}

export default Navbar;