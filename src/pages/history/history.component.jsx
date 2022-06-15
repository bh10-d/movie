import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Navbart from '../../components/navbar/navbart.component';
import {AppContext} from '../../context/AppProvider';

const History = ()=>{
    const {history, setHistory} = React.useContext(AppContext);

    const handleClick = (id) => {
        setHistory(()=>{
            const deMovie = history.filter((movie)=> movie.id !== id)
            const jsonMovie = JSON.stringify(deMovie)
            localStorage.setItem('history',jsonMovie)
            return deMovie
        })
    }

    const resize = (url)=>{
        const newsize = `https://images.weserv.nl/?url=${url}&w=175&h=246`;
        return newsize;
    }

    return (
        <>
            <Navbart/>
            <div className="container">
                <h2 className="font-bold text-xl mt-4 mb-4">{(history.length != 0)?"Phim mà các cậu đã xem đấy":"Các cậu chưa xem phim nào cả"}</h2>
                <div className="grid gap-2 grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 justify-items-center">
                    {history.map((m, i)=>(
                        <div className="block_item-movie hover:text-zinc-500 overflow-hidden relative">
                            <button className="right-0 text-slate-900 bg-slate-400 font-semibold absolute opacity-70 z-99" onClick={() =>{ handleClick(m.id)}}>Xoá</button>
                            <Link className="md:w-[225px]" to={`/watch/${m.category}/${m.id}`} key={i}>
                                <LazyLoadImage
                                    className="transition duration-700 object-cover h-[295px] w-[225px]"
                                    alt={m.title}
                                    src={resize(m.imageUrl)}
                                    effect="opacity"
                                    delayTime={1000}
                                />
                                <h1 className="text-ellipsis mb-3">{m.title}</h1>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default React.memo(History);