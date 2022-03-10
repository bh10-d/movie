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
            setInfo(data[2]);
        }
    }, [data]);

    if (loading) {
        return <p>Data is loading...</p>;
    }

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


            <h2 className="text-[25px] font-bold">Topic</h2>
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
                                    <Link to={`/watch/${m.id}`}>
                                        <img style={{ height: '70%' }} src={m.imageUrl} alt={m.title} />
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
}

export default PreviewList;