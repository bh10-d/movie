import {React, useState, useEffect} from "react";
import {Link,useNavigate} from "react-router-dom";
import '../navbar/navbart.styles.css';


// function H(){
//     const navigate = useNavigate();
//     navigate('/');
//     return <></>
// }



const Navbart = ({absolute}) => {
    // const navigation = useNavigate();
    // navigation('/');

    const [show, setShow] = useState(false);


    const handleShowMenu = (showw)=>{
        if(showw) {
            setShow("hidden");
        }else{
            setShow("");
        }
    }


    return(
        <div className={`${absolute} z-50 w-full`}>
            <nav className="">
                <div className={`max-w-full mx-auto px-4`}>
                    <div className="flex justify-between">
                        <div className="flex space-x-7">
                                <div>
                                    <Link to="/" className="flex items-center py-4 px-2">
                                        <span className="font-semibold text-white-800 text-3xl">MovieHot</span>
                                    </Link>
                                </div>
                                <div className="hidden md:flex items-center space-x-1">
                                    <Link to="/" className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold ">Phim hot</Link>
                                    <Link to="/" className="py-4 px-2 text-white-500 font-semibold hover:border-b-4 hover:border-green-500 hover:text-green-500 transition duration-300">Phim lẻ</Link>
                                    <Link to="/" className="py-4 px-2 text-white-500 font-semibold hover:border-b-4 hover:border-green-500 hover:text-green-500 transition duration-300">Phim bộ</Link>
                                    <Link to="/" className="py-4 px-2 text-white-500 font-semibold hover:border-b-4 hover:border-green-500 hover:text-green-500 transition duration-300">Phim mới</Link>
                                    <Link to="/history" className="py-4 px-2 text-white-500 font-semibold hover:border-b-4 hover:border-green-500 hover:text-green-500 transition duration-300">Lịch sử</Link>
                                    <Link to="/search" className="py-4 px-2 text-white-500 font-semibold hover:border-b-4 hover:border-green-500 hover:text-green-500 transition duration-300">Tìm kiếm</Link>
                                </div>
                        </div>
                        <div className="hidden md:flex items-center space-x-3">
                            <a href="" className="py-2 px-2 font-medium text-white rounded hover:bg-green-500 hover:text-white transition duration-300">Đăng nhập</a>
                            <a href="" className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Đăng ký</a>
                        </div>
                        {/* mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button className="outline-none" onClick={()=>{handleShowMenu(!show)}}>
                                <svg className=" w-10 h-10 text-gray-500 hover:text-green-500"
                                    x-show="!showMenu"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
					    </div>
                    </div>
                </div>
                {/* mobile menu */}
                <div className={`${(show)?null:'hidden'} bg-slate-600`}>
                    <ul className="">
                        <li className="active"><a href="index.html" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Phim hot</a></li>
                        <li><a href="#services" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Phim lẻ</a></li>
                        <li><a href="#about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Phim bộ</a></li>
                        <li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Phim mới</a></li>
                        <li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Đăng nhập</a></li>
                        <li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Đăng ký</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbart;