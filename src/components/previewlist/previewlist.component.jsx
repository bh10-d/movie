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
import './previewlist.styles.css';


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

    if (loading) {
        return <p></p>;
    }

    console.log(data);


    const extract = info.filter((f, i) => i > 1 && i < 8 && f.homeSectionName != "LOKLOK Charts" && f.homeSectionName != "K-Stars" && f.homeSectionType != "BLOCK_GROUP");//.map((m,ii)=>{return m.homeSectionName});
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


    const resize = (url)=>{
        const newsize = `https://images.weserv.nl/?url=${url}&w=175&h=246`;
        // console.log(newsize);
        return newsize;
    }



    return (
        <>
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
                                                width: '175px',
                                            }}
                                            key={mm.id}
                                        >
                                            <Link to={`/watch/${mm.category}/${mm.id}`}>
                                                <div className="block_item-movie">
                                                    <LazyLoadImage
                                                        className="transition duration-500 object-cover"
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
        </>
    )
}

export default memo(PreviewList); // co ve co nhu khong (kien thuc chua chac note hoc lai)