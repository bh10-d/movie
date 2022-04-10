import React from "react";
import {Link,useNavigate} from "react-router-dom";
import '../navbar/navbart.styles.css';


function H(){
    const navigate = useNavigate();
    navigate('/');
    return <></>
}


const Navbart = () => {
    // const navigation = useNavigate();
    // navigation('/');
    return(
        <div className="md:pl-[50px] md:pr-[50px] pl-[10px] pr-[10px]">
            {/* <p>navbart</p> */}
            <div style={{display: 'flex',flexDirection: 'center',alignItems: 'center',justifyContent: 'space-between'}}>
                <ul className="navbart">
                    <li>
                        <Link to={'/'}>
                            <p>MovieHot</p>
                        </Link>
                    </li>
                    {/* <li>Search</li> */}
                    <li><p>Hot Film</p></li>
                    <li>Odd Film</li>
                    <li><p>About</p></li>
                </ul>
                <div style={{display:'flex'}}>
                    {/* <p style={{paddingRight: '10px'}}>tim kiem</p>
                    <p>thong tin ca nhan</p> */}
                </div>
            </div>
        </div>
    )
}

export default Navbart;