import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../sidebar/sidebar.styles.css';

const Sidebar = () => {

    const [list,setList] = useState([]);


    useEffect(() =>{
        fetch("https://ga-mobile-api.loklok.tv/cms/app/search/v1/searchLeaderboard",{
            method: "GET",
            headers: {
                'Content-type': 'application/json;charset=UTF-8',
                'lang': 'en',
                'versioncode': '11',
                'clienttype': 'ios_jike_default'
            }
        }).then(res=>res.json())
        .then(response => {
            setList(response.data.list)
            // console.log(response)
        })
    },[])

    return (
        <div className="sidebar">

            {/* <h2>Sidebar component đang được phát triển</h2>
            <div style={{
                // backgroundColor: 'red',
                height: '100%',
            }}>
            </div> */}
            <ul>
                {list.map(m=>{

                    return (
                        <li key={m.id}>
                            <Link to={`/watch/${m.domainType}/${m.id}`}>
                                <div className="ss_movie">
                                    <img src={m.cover} alt={m.title} />
                                    <p>{m.title}</p>
                                </div>
                            </Link>
                        </li>
                    )
                })}
                </ul>
        </div>
    )
}

export default Sidebar;