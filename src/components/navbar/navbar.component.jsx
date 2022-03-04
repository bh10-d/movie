import React from "react";
import './navbar.styles.css';


const Navbar = () => {


    return (
        <div className="navbar_desk basis-3/12 md:basis-3/12">
            <div className="navbar_head">
                <div>
                    <img src={'/avatar.jpg'} alt="5anhemsieunhan" />
                    <span>bốc đầu đón gió</span>
                </div>
                {/* <button>
                    <i className="fa-solid fa-bars"></i>
                </button> */}
            </div>
            <ul className="navbar_desk_ul">
                <li><input type="text" placeholder="Enter film name" style={{
                    backgroundColor: '#003399',
                    outline: 'none',
                    color: '#fff',
                    padding: '10px',
                    width: '100%',
                    borderRadius: '20px'
                }} /></li>
                <li style={{backgroundColor: '#FF6600'}}><a href="#">Home</a></li>
                <li><a href="#">Watch</a></li>
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