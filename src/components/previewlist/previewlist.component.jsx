// import React from "react";
import { useState, useEffect, memo } from "react";
import { Link } from "react-router-dom";
/*slider */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import { LazyLoadImage } from 'react-lazy-load-image-component';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
//my styles
// import './previewlist.styles.css';


const PreviewList = ({data}) => {
    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        if (data != '') {
            setLoading(false);
            // setTimeout(() => setInfo(data),500)
            setInfo(data);
        }
    }, [data]);

    // if (loading) {
    //     return <Item/>;
    // }

    console.log(data);


    const extract = info.filter((f, i) => i > 1 && i < 8 && f.homeSectionName != "LOKLOK Charts" && f.homeSectionName != "K-Stars" && f.homeSectionType != "BLOCK_GROUP");//.map((m,ii)=>{return m.homeSectionName});
    // const extract = info.map((m,ii)=>{return info[ii].homeSectionName})
    // console.log(info[2].homeSectionName);
    // console.log(extract);




    


    const resize = (url)=>{
        // const newsize = `https://images.weserv.nl/?url=${url}&w=175&h=246`;
        const newsize = `https://images.weserv.nl/?url=${url}&w=175&h=246`;
        // console.log(newsize);
        return newsize;
    }

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

    if (loading) {
        return <Item/>;
    }


    return (
        <>
            {extract.map((m, i) => (
                <div key={i} className="mt-5">
                    <h2 className="text-[25px] font-bold">{m.homeSectionName}</h2>
                    <div className="plist mt-2">
                        <Swiper
                            modules={[Navigation]}
                            slidesPerView='auto'
                            slidesPerGroupAuto
                            navigation
                            spaceBetween={67}
                        >
                            {
                                m.recommendContentVOList.map(mm => (
                                    <div key={mm.id} className="pmovie">
                                        <SwiperSlide
                                            style={{
                                                // width: '175px',
                                                width: '200px',
                                                // height: '250px'
                                            }}
                                            key={mm.id}
                                        >
                                            <Link to={`/watch/${mm.category}/${mm.id}`}>
                                                <div className="block_item-movie hover:text-zinc-500">
                                                    <LazyLoadImage
                                                        className="transition duration-700 object-cover h-[295px] w-[225px]"
                                                        alt={mm.title}
                                                        src={resize(mm.imageUrl)}
                                                        effect="opacity"
                                                        delayTime={500}
                                                        visibleByDefault={mm.imageUrl === '/landscape.jpg'}
                                                    />
                                                    <h1  className="text-ellipsis overflow-hidden">{mm.title}</h1>
                                                </div>
                                            </Link>
                                        </SwiperSlide>
                                    </div>)
                                )
                            }
                        </Swiper>
                    </div>
                </div>
            ))}
            {/* <Item/> */}
        </>
    )
}

export default memo(PreviewList); // co ve co nhu khong (kien thuc chua chac note hoc lai)