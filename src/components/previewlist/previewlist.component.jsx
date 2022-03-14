import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
/*slider */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
//my styles
import '../previewlist/previewlist.styles.css';


const PreviewList = ({ data }) => {


    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(true);





    useEffect(() => {
        setLoading(true);
        if (data != '') {
            setLoading(false);
            // setInfo(data[2]);
            setInfo(data);
        }
    }, [data]);

    if (loading) {
        return <p>Data is loading...</p>;
    }

    const extract = info.filter((f, i) => i > 1 && i<6);//.map((m,ii)=>{return m.homeSectionName});
    // const extract = info.map((m,ii)=>{return info[ii].homeSectionName})
    // console.log(info[2].homeSectionName);
    console.log(extract);

    return (
        <div className="">

            {/* {lists.map(list =>
            (
                <div key={list.idtopic}>
                    <h2 className="text-[25px] font-bold">{list.topic}</h2>
                    <div className="plist">
                        <Swiper
                            modules={[Navigation]}
                            slidesPerView='auto'
                            slidesPerGroupAuto
                            navigation
                            spaceBetween={50}
                            // onSwiper={(swiper) => console.log(swiper)}
                            // onSlideChange={() => console.log('slide change')}
                        >
                            {
                                list.movie.map(m => (
                                    <div key={m.idmovie} className="pmovie">
                                        <SwiperSlide
                                            style={{
                                                width: '150px',
                                                height: '250px',
                                            }}
                                            key={m.idmovie}
                                        >
                                            <Link to={`/watch/${m.idmovie}`}>
                                                <img style={{height:'70%'}} src={m.banner} alt={m.title} />
                                                <h1 className="text-lg text-ellipsis overflow-hidden">{m.title}</h1>
                                            </Link>
                                        </SwiperSlide>
                                    </div>)
                                )
                            }
                        </Swiper>
                    </div>
                </div>
            )
            )} */}
            {/* {data && <img src={info.imageUrl} />} */}

            {extract.map((m, i) => (
                <div key={i}>
                    <h2 className="text-[25px] font-bold">{m.homeSectionName}</h2>
                    <div className="plist">
                        <Swiper
                            modules={[Navigation]}
                            slidesPerView='auto'
                            slidesPerGroupAuto
                            navigation
                            spaceBetween={50}
                        >
                            {
                                m.recommendContentVOList.map(mm => (
                                    <div key={mm.id} className="pmovie">
                                        <SwiperSlide
                                            style={{
                                                width: '150px',
                                                height: '250px',
                                            }}
                                            key={mm.id}
                                        >
                                            <Link to={`/watch/${mm.category}/${mm.id}`}>
                                                <img style={{ height: '70%' }} src={mm.imageUrl} alt={mm.title} />
                                                <h1 className="text-lg text-ellipsis overflow-hidden">{mm.title}</h1>
                                            </Link>
                                        </SwiperSlide>
                                    </div>)
                                )
                            }
                        </Swiper>
                    </div>
                </div>
            ))}

            {/* <h2 className="text-[25px] font-bold">{info.homeSectionName}</h2>
            <div className="plist">
                <Swiper
                    modules={[Navigation]}
                    slidesPerView='auto'
                    slidesPerGroupAuto
                    navigation
                    spaceBetween={50}
                >
                    {
                        info.recommendContentVOList.map(m => (
                            <div key={m.id} className="pmovie">
                                <SwiperSlide
                                    style={{
                                        width: '150px',
                                        height: '250px',
                                    }}
                                    key={m.id}
                                >
                                    <Link to={`/watch/${m.category}/${m.id}`}>
                                        <img style={{ height: '70%' }} src={m.imageUrl} alt={m.title} />
                                        <h1 className="text-lg text-ellipsis overflow-hidden">{m.title}</h1>
                                    </Link>
                                </SwiperSlide>
                            </div>)
                        )
                    }
                </Swiper>
            </div> */}
        </div>
    )
}

export default PreviewList;