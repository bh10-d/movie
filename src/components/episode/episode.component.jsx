import React from "react";
import { Link, useParams } from "react-router-dom";
// import '../episode/episode.styles.css';
const Episode = ({ ep,first }) => {
    let { c, v, e } = useParams();
    console.log(c, v)
    console.log(ep);
    const episode = e;
    console.log(episode);
    if (ep == null) {
        return <p>waitting</p>
    } else {
        return (
            <div>
                <h1>Episode</h1>
                <div className="episode">
                    {ep.map((e, i) => (
                        // <button className="py-2 px-4 mr-5 mt-3 text-white rounded-lg bg-red-500 shadow-md hover:bg-red-700">Tập {i + 1}</button>
                        <Link
                            key={e.id}
                            type="button"
                            className="py-2 px-4 mr-5 mt-3 text-white rounded-lg bg-red-500 shadow-md hover:bg-red-700"
                            style={(episode==e.id||first==e.id)?{backgroundColor:'#990000'}:{}}
                            to={`/watch/${c}/${v}/${e.id}`}
                        >
                            <p>Tập {i + 1}</p>
                        </Link>
                    ))
                    }
                </div>
            </div>
        )
    }

}

export default Episode;