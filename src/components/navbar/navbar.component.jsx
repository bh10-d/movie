import { React, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './navbar.styles.css';
import Option from '../../directory/navbar/element.component';


const Navbar = () => {

    const [show, setShow] = useState('close');
    const [smallshow,setSmallShow] = useState('');
    const [list,setList] = useState([])
    const [input,setInput] = useState('')
    const handleClick = () => {
        if (show === 'open') {
            setShow('');
        } else {
            setShow('open');
            if(smallshow === 'open'){
                setSmallShow('');
            }
        }
    }

    const handleSmallShow = () => {
        if (smallshow === 'open') {
            setSmallShow('');
        } else {
            setSmallShow('open');
            if(show === 'open'){
                setShow('');
            }
        }
    }



    useEffect(() => {
        fetch('https://ga-mobile-api.loklok.tv/cms/app/search/v1/searchWithKeyWord', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json;charset=UTF-8',
                'lang': 'en',
                'versioncode': '11',
                'clienttype': 'ios_jike_default'
            },
            body: JSON.stringify({
                "searchKeyWord": input,
                "size": 50,
                "sort": "",
                "searchType": ""
            })
        }).then(res => res.json())
            .then(d => {
                setList(d.data.searchResults);
            })
            .catch(err => console.log(err))
    }, [input]);

    let TimerId = 0;

    const handleInput = (e) => {

        clearTimeout(TimerId);
        TimerId = setTimeout(() => {
            setInput(e.target.value);
        },300)
    }


    return (
        <>
            <div className={`navbar ${show}`}>
                <div className="logo-details">
                    <i className="fab fa-shopware icon"></i>
                    <div className="logo_name">MovieHot</div>
                    <i className='bx bx-menu' id="btn" onClick={() => handleClick()}></i>
                    <i className="bx bx-search" id="search" onClick={() => handleSmallShow()}></i>
                </div>
                <Option />
                
            </div>
            <div className={`small_search ${smallshow}`}>
                {/* <h1>Search</h1> */}
                <input type="text" placeholder="Search" onChange={handleInput}/>
                <div className="small_search_list_film">
                    <ul>
                    {list.map(m => {
                        const converttype = (type)=>{
                            let convert = 0;
                            switch(type){
                                case "movie":
                                    return convert = 0;
                                case "drama":
                                    return convert = 1; 
                                default:
                                    return convert = 1;
                            }
                        }
                        
                        return (
                        <li key={m.id}>
                            <Link to={`/watch/${converttype(m.dramaType.name)}/${m.id}`}>
                                <div className="small_search_film_element">
                                    <img src={m.coverHorizontalUrl} alt={m.name} />
                                    <div>
                                        <h1>{m.name}</h1>
                                        <p>({m.releaseTime})</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    )
                    })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;