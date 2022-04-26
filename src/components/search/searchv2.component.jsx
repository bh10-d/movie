import React from "react";
import {useState,useEffect} from "react";
import { Link } from "react-router-dom";
// import './search.styles.css';

const Searchv2 =() => {

    const [show,setShow] = useState('close')
    const [list,setList] = useState([])
    const [input,setInput] = useState('')
    const handleClick = () => {
        if (show === 'open') {
            setShow('close');
        } else {
            setShow('open');
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
            // console.log(d.data.searchResults);
            })
            .catch(err => console.log(err))
    }, [input]);

    let TimerId = 0;

    const handleInput = (e) => {

        clearTimeout(TimerId);
        TimerId = setTimeout(() => {
            setInput(e.target.value);
            // console.log(e.target.value);
        },300)
    }

    return (
        <div>
            <div className={`${show}`}>
                <div onClick={() =>handleClick()}>
                    {/* <i className='bx bx-search'></i> */}
                    <p className="py-4 px-2 text-white-500 font-semibold hover:border-b-4 hover:border-green-500 hover:text-green-500 transition duration-300">Tìm kiếm</p>
                </div>
                {/* <input type="text" placeholder="Search" onChange={handleInput}/> */}
            </div>
            {/* <div className={`block_item_show_list ${show}`}>
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
                                <div className="s_movie">
                                    <img src={m.coverHorizontalUrl} alt={m.name} />
                                    <div>
                                        <p>{m.name}</p>
                                        <h6>{m.releaseTime}</h6>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    )
                    })}
                </ul>
            </div> */}
        </div>
    )
}

export default Searchv2;