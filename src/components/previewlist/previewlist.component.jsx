import { useState, useEffect, memo, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from '../../context/AppProvider';
/*slider */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Loading from '../loading/loading.component';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
//my styles
// import './previewlist.styles.css';


const PreviewList = ({ data }) => {
    const { history, setHistory } = useContext(AppContext);
    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    // console.log(data);
    useEffect(() => {
        setLoading(true);
        if (data != '') {
            setLoading(false);
            setInfo(data);
        }
    }, [data]);

    // const handleClick = (url) => {
    //     setHistory(prev=>{
    //         const newJobs = [...prev,url]
    //         const jsonJobs = JSON.stringify(removeduplicates(newJobs.reverse()))
    //         localStorage.setItem('history',jsonJobs)
    //         // console.log(prev)
    //         return removeduplicates(newJobs.reverse())
    //     })
    // }

    const removeduplicates = (arr) => {
        var uniq = {};
        var arrFiltered = arr.filter(obj => !uniq[obj.id] && (uniq[obj.id] = true));
        return arrFiltered;
    }

    // const extract = info.filter((f, i) => i > 1 && i < 8 && f.homeSectionName != "LOKLOK Charts" && f.homeSectionName != "K-Stars" && f.homeSectionType != "BLOCK_GROUP");
    // const extract = info.filter((f, i) => f.homeSectionName != '' && f.homeSectionName != "LOKLOK Charts" && f.homeSectionName != "K-Stars" && f.homeSectionType != "BLOCK_GROUP");

    // const extract = info.filter((f, i) => i > 1 && i < 8 && f.homeSectionName != "LOKLOK Charts" && f.homeSectionName != "K-Stars" && f.homeSectionType != "BLOCK_GROUP");
    // const extract = info.filter((f, i) => f.homeSectionName != '' && f.homeSectionName != "LOKLOK Charts" && f.homeSectionName != "K-Stars" && f.homeSectionType != "BLOCK_GROUP");

    const resize = (url) => {
        const newsize = `https://images.weserv.nl/?url=${url}&w=175&h=246`;
        return newsize;
    }

    if (loading) {
        return <Loading typeLoading="list"/>;
    }

    console.log(data)

    return (
        <>
            {/* {data.map((m, i) => ( */}
                {/* // <div key={i} className="mt-5">
                //     <h2 className="text-[25px] font-bold">{m.homeSectionName}</h2>
                //     <div className="plist mt-2">
                //         <div>
                //                 <div key={m.id} className="pmovie">
                //                         <Link 
                //                             to={`/watch/${m.media_type}/${m.id}`} 
                //                             onClick={()=>{
                //                                 handleClick({title: m.title, imageUrl: m.poster_path, category: m.media_type, id: m.id})
                //                             }}
                //                         >
                //                             <div className="block_item-movie hover:text-zinc-500">
                //                                 <LazyLoadImage
                //                                     className="transition duration-700 object-cover h-[295px] w-[225px]"
                //                                     alt={m.title}
                //                                     // src={resize('https://image.tmdb.org/t/p/original'+m.poster_path)}
                //                                     src={'https://image.tmdb.org/t/p/original'+m.poster_path}
                //                                     effect="opacity"
                //                                     delayTime={500}
                //                                     visibleByDefault={m.poster_path === '/landscape.jpg'}
                                                    
                //                                 />
                //                                 <h1  className="text-ellipsis overflow-hidden">{m.title}</h1>
                //                             </div>
                //                         </Link>
                //                 </div>)
                //         </div> */}
                <div className="mt-5">
                    {/* <h2 className="text-[25px] font-bold">test</h2> */}
                        <div className="plist mt-2">
                        <Swiper
                            modules={[Navigation]}
                            slidesPerView='auto'
                            slidesPerGroupAuto
                            navigation={true}
                            spaceBetween={49}
                        >
                            <div className="pmovie">
                            {data.map((m, i) => (
                                <SwiperSlide
                                    style={{
                                        width: '200px'
                                    }}
                                    key={m.id}
                                >
                                    <Link 
                                        to={`/watch/${m.media_type}/${m.id}`} 
                                        onClick={()=>{
                                            handleClick({title: m.title, imageUrl: m.poster_path, category: m.media_type, id: m.id})
                                        }}
                                    >
                                        <div className="block_item-movie hover:text-zinc-500">
                                            <LazyLoadImage
                                                className="transition duration-700 object-cover h-[295px] w-[225px]"
                                                alt={m.title}
                                                src={'https://image.tmdb.org/t/p/original'+m.poster_path}
                                                effect="opacity"
                                                delayTime={500}
                                                visibleByDefault={m.poster_path === '/landscape.jpg'}
                                                
                                            />
                                            <h1  className="text-ellipsis overflow-hidden">{m.title}</h1>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                                ))}
                            </div>
                        </Swiper>
                    </div>
                </div>
            {/* // ))} */}
        </>
    )
}

// export default memo(PreviewList); // co ve co nhu khong (kien thuc chua chac note hoc lai)

export default PreviewList;