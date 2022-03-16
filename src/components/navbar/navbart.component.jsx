import React from "react";
import {Link} from "react-router-dom";
import '../navbar/navbart.styles.css';

const Navbart = () => {
    return(
        <div className="pl-[50px] pr-[50px]">
            {/* <p>navbart</p> */}
            <div style={{display: 'flex',flexDirection: 'center',alignItems: 'center',justifyContent: 'space-between'}}>
                <ul className="navbart">
                    <li>
                        <Link to={'/'}>
                            <p>MovieHot</p>
                        </Link>
                    </li>
                    {/* <li>Search</li> */}
                    <li><p>Hot film</p></li>
                    {/* <li>phim le</li> */}
                    <li><p>About</p></li>
                </ul>
                {/* <div style={{display:'flex'}}>
                    <p style={{paddingRight: '10px'}}>tim kiem</p>
                    <p>thong tin ca nhan</p>
                </div> */}
            </div>
        </div>
    )
}

export default Navbart;