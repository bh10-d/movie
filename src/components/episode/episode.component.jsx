import React from "react";
import { Link, useParams } from "react-router-dom";
// import '../episode/episode.styles.css';
const Episode = ({ ep,first }) => {

    const [showMovie,setShowMovie] = React.useState(false);

    // const handleShow = () => {
    //     if(show){
    //         setshow(false);
    //     }else{
    //         setshow()
    //     }
    // }

    let { c, v, e } = useParams();
    const episode = e;
    if (ep == null) {
        return <p>waitting</p>
    } else {
        return (
            <div>
                <div>
                    <h1 className="text-xl font-bold">Tập</h1>
                    {/* <input type="text"  placeholder="tập phim"/> */}
                </div>
                <div className={`episode ${(showMovie)?``:'h-[60px]'} overflow-hidden`}>
                    {ep.map((e, i) => (
                        // <button className="py-2 px-4 mr-5 mt-3 text-white rounded-lg bg-red-500 shadow-md hover:bg-red-700">Tập {i + 1}</button>
                        <Link
                            key={e.id}
                            type="button"
                            className="py-2 px-4 mr-5 mt-3 text-white rounded-lg bg-red-500 shadow-md hover:bg-red-700"
                            style={(episode==e.id||first==e.id)?{backgroundColor:'#990000'}:{}}
                            to={`/watch/${c}/${v}/${e.id}`}
                        >
                            {/* <p>Tập {i + 1}</p> */}
                            <p>{i + 1}</p>
                        </Link>
                    ))
                    }
                </div>
                    <div className="text-center">
                        {/* mở rộng */}
                        <button className="w-full" onClick={()=>{setShowMovie(!showMovie)}}>{(showMovie)?<i className="fa-solid fa-chevron-up"></i>:<i className="fa-solid fa-chevron-down"></i>}</button>
                    </div>
            </div>
        )
    }

}

export default Episode;