import React from "react";
import {useState} from "react";
import './search.styles.css';

const Search =() => {

    const[show,setShow] = useState('close')


    const handleClick = () => {
        if (show === 'open') {
            setShow('close');
        } else {
            setShow('open');
        }
    }

    return (
        <div style={{marginLeft:'10px'}}>
            <div className={`block_item_input_search ${show}`}>
                <div className="block_item_input_search_icon" onClick={() =>handleClick()}>
                    <i className='bx bx-search'></i>
                </div>
                <input type="text" placeholder="Search"/>
            </div>
            <div className={`block_item_show_list ${show}`}>
                <ul>
                    <li>
                        <div className="s_movie">
                            <img src="./avatar.jpg" alt="ảnh phim" />
                            <p>tên phim</p>
                        </div>
                    </li>
                    <li>
                        <div className="s_movie">
                            <img src="./avatar.jpg" alt="ảnh phim" />
                            <p>tên phim</p>
                        </div>
                    </li>
                    <li>
                        <div className="s_movie">
                            <img src="./avatar.jpg" alt="ảnh phim" />
                            <p>tên phim</p>
                        </div>
                    </li>
                    <li>
                        <div className="s_movie">
                            <img src="./avatar.jpg" alt="ảnh phim" />
                            <p>tên phim</p>
                        </div>
                    </li>
                    <li>
                        <div className="s_movie">
                            <img src="./avatar.jpg" alt="ảnh phim" />
                            <p>tên phim</p>
                        </div>
                    </li>
                    <li>
                        <div className="s_movie">
                            <img src="./avatar.jpg" alt="ảnh phim" />
                            <p>tên phim</p>
                        </div>
                    </li>
                    <li>
                        <div className="s_movie">
                            <img src="./avatar.jpg" alt="ảnh phim" />
                            <p>tên phim</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Search;