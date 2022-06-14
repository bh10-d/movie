import React from "react";
import { Link } from "react-router-dom";
/*slider */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Navbart from '../../components/navbar/navbart.component';
import Loading from '../../components/loading/loading.component';
import {AppContext} from '../../context/AppProvider';

const Item = ()=>{

    let arr = [];
    for(let i = 0; i < 10; i++) {
        arr.push({id:i});
    }
    return (
        <div>
                <h2 className="text-[25px] w-[150px] h-[25px] font-bold bg-slate-600 animate-pulse mt-3 mb-3"></h2>
                <div className="plist">
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView='auto'
                        slidesPerGroupAuto
                        navigation
                        spaceBetween={67}
                    >
                        {
                            arr.map((m,i)=>(
                                <div key={m.id} className="pmovie">
                                    <SwiperSlide
                                        key={m.id}
                                        style={{
                                            // width: '175px',
                                            width: '200px',
                                            // height: '250px'
                                        }}
                                    >
                                        <Link key={m.id} to={`/`}>
                                            <div className="block_item-movie hover:text-zinc-500 bg-slate-600 animate-pulse">
                                                <LazyLoadImage
                                                    className="transition duration-700 object-cover h-[295px]"
                                                    // alt={mm.title}
                                                    // src={resize(mm.imageUrl)}
                                                    effect="opacity"
                                                    delayTime={500}
                                                    // visibleByDefault={mm.imageUrl === '/landscape.jpg'}
                                                />
                                                {/* <h1  className="text-ellipsis w-[100px] h-[25px] overflow-hidden bg-gray-500 animate-pulse"></h1> */}
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                </div>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
    )
}


const History = ()=>{

    const {history} = React.useContext(AppContext);

    const handleClick = ()=>{
        const newJobs = ["asd","alshjdkjh"]
        const jsonJobs = JSON.stringify(newJobs)
        localStorage.setItem('jobs',jsonJobs)
        return newJobs
    }

    const resize = (url)=>{
        const newsize = `https://images.weserv.nl/?url=${url}&w=175&h=246`;
        return newsize;
    }
    // console.log(history)

    return (
        <>
            <Navbart/>
            <div className="container">
                {/* <Item/> */}
                <div className="grid gap-2 grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 justify-items-center">
                    {history.map((m, i)=>(
                        // <div key={i}>
                        //     <div className="w-44 h-60 bg-slate-50 mr-3 text-slate-900 relative">
                        //         <button className="right-0 text-slate-900 bg-slate-400 font-semibold absolute opacity-70" onClick={handleClick}>Xoá</button>
                        //         <img src={m.imageUrl} alt="askjdh" />
                        //     </div>
                        //     <h1 className="text-slate-300 mt-3">{m.title}</h1>
                        // </div>
                        <Link className="md:w-[225px]" to={`/watch/${m.category}/${m.id}`} key={i}>
                            <div className="block_item-movie hover:text-zinc-500 overflow-hidden">
                                <LazyLoadImage
                                    className="transition duration-700 object-cover h-[295px] w-[225px]"
                                    alt={m.title}
                                    src={resize(m.imageUrl)}
                                    effect="opacity"
                                    delayTime={1000}
                                />
                                <h1 className="text-ellipsis mb-3">{m.title}</h1>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            {/* <Loading typeLoading="list"/> */}
        </>
    )
}


export default History;