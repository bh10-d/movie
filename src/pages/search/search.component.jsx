import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Navbart from '../../components/navbar/navbart.component';
import {AppContext} from '../../context/AppProvider';


const Search = ()=>{
    const {BASE_URL, CONFIG} = useContext(AppContext)
    const [list,setList] = useState([])
    const [input,setInput] = useState('')

    useEffect(() => {
        fetch(`${BASE_URL}/search/multi?query=${input}&include_adult=true&language=vi&page=1`,CONFIG)
        .then(res => res.json())
            .then(d => {
                setList(d.results);
            })
            .catch(err => console.log(err))
    }, [input]);

    let TimerId = 0;

    const handleInput = (e) => {

        clearTimeout(TimerId);
        TimerId = setTimeout(() => {
            setInput(e.target.value);
        },400)
    }

    console.log(list)
    const resize = (url)=>{
        const newsize = `https://images.weserv.nl/?url=${url}&w=175&h=246`;
        return newsize;
    }

    return (
        <>
            <Navbart/>
            <div className="container">
                <input className="w-full mt-3 mb-3 rounded-sm p-2 font-bold text-black" type="text" placeholder="Nhập tên phim vào đê chần chừ gì nữa" onChange={handleInput}/>
                <div className="grid gap-5 grid-cols-3 lg:grid-cols-5 justify-items-center">
                    {list.map(m => {
                        const converttype = (type)=>{
                            let convert = 0;
                            switch(type){
                                case "movie":
                                    return convert = 0;
                                case "tv":
                                    return convert = 1; 
                                default:
                                    return convert = 1;
                            }
                        }
                        return (
                            <Link className="md:w-[225px]" to={`/watch/${converttype(m.media_type)}/${m.id}`} key={m.id}>
                            {/* // <Link className="md:w-[225px]" to={`/watch/movie/${m.id}`} key={m.id}> */}
                                <div className="block_item-movie hover:text-zinc-500 overflow-hidden">
                                    <LazyLoadImage
                                        className="transition duration-700 object-cover h-[295px] w-[225px]"
                                        alt={(m.title != undefined)?m.title:m.name}
                                        // src={resize(m.coverVerticalUrl)}
                                        src={`https://image.tmdb.org/t/p/original${m.poster_path}`}
                                        effect="opacity"
                                        delayTime={1000}
                                    />
                                    <h1 className="text-ellipsis ">{(m.title != undefined)?m.title:m.name}</h1>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </>
    )


}



export default Search;