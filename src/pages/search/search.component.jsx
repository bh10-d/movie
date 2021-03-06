import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Navbart from '../../components/navbar/navbart.component';


const Search = ()=>{
    const [list,setList] = useState([])
    const [input,setInput] = useState('')

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
        },400)
    }


    const resize = (url)=>{
        const newsize = `https://images.weserv.nl/?url=${url}&w=175&h=246`;
        return newsize;
    }

    return (
        <>
            <Navbart/>
            <div className="container">
                <input className="w-full mt-3 mb-3 rounded-sm p-2 font-bold text-black" type="text" placeholder="Nhập tên phim vào đê chần chừ gì nữa" onChange={handleInput}/>
                <div className="grid gap-2 grid-cols-3 lg:grid-cols-6 justify-items-center">
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
                            <Link className="md:w-[225px]" to={`/watch/${converttype(m.dramaType.name)}/${m.id}`} key={m.id}>
                                <div className="block_item-movie hover:text-zinc-500 overflow-hidden">
                                    <LazyLoadImage
                                        className="transition duration-700 object-cover h-[295px] w-[225px]"
                                        alt={m.name}
                                        src={resize(m.coverVerticalUrl)}
                                        effect="opacity"
                                        delayTime={1000}
                                    />
                                    <h1 className="text-ellipsis ">{m.name}</h1>
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