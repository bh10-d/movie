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
        <>
            <div className={`block_item_input_search ${show}`}>
                <div className="block_item_input_search_icon" onClick={() =>handleClick()}>
                    <i className='bx bx-search'></i>
                </div>
                <input type="text" placeholder="Search"/>
            </div>
        </>
    )
}

export default Search;