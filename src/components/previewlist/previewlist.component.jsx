import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
/*slider */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import { LazyLoadImage } from 'react-lazy-load-image-component';
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

    const extract = info.filter((f, i) => i > 1 && i < 8 && f.homeSectionName != "LOKLOK Charts");//.map((m,ii)=>{return m.homeSectionName});
    // const extract = info.map((m,ii)=>{return info[ii].homeSectionName})
    // console.log(info[2].homeSectionName);
    // console.log(extract);




    // const MyImage = ({ image }) => (
    //     <div>
    //         <LazyLoadImage
    //             alt={image.alt}
    //             height={image.height}
    //             src={image.src} // use normal <img> attributes as props
    //             width={image.width} />
    //         <span>{image.caption}</span>
    //     </div>
    // );

    // <LazyLoadImage
    //     alt={mm.title}
    //     // height={image.height}
    //     src={mm.imgUrl} // use normal <img> attributes as props
    //     // width={image.width}
    //      />



    return (
        <div>
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
                                                // height: '250px',
                                            }}
                                            key={mm.id}
                                        >
                                            <Link to={`/watch/${mm.category}/${mm.id}`}>
                                                <div className="rounded-md bg-slate-800 group">
                                                    <LazyLoadImage
                                                        className="group-hover:brightness-75 transition duration-300 object-cover"
                                                        alt={mm.title}
                                                        src={mm.imageUrl} // use normal <img> attributes as props
                                                        // height={image.height}
                                                        // width={image.width}
                                                        effect="opacity"
                                                    />
                                                    {/* <img src={mm.imageUrl} alt={mm.title} /> */}
                                                    <h1 className="text-lg text-ellipsis overflow-hidden mt-1">{mm.title}</h1>
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
        </div>
    )
}

export default PreviewList;