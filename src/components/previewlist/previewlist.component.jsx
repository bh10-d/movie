import React from "react";
import { Link } from "react-router-dom";

/*slider */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
//my styles
import '../previewlist/previewlist.styles.css';

let lists = [
    {
        idtopic: 1,
        topic: 'Movie',
        movie: [
            {
                idmovie: 1,
                title: 'Fast and Furious 8hasgdjgasjgdgagsjgsajdgjasgagsjgasjd',
                banner: './banner1.jpg'
            },
            {
                idmovie: 2,
                title: 'Fast and Furious 8',
                banner: './banner1.jpg'
            },
            {
                idmovie: 3,
                title: 'Fast and Furious 8',
                banner: './banner1.jpg'
            },
            {
                idmovie: 4,
                title: 'Fast and Furious 8',
                banner: './banner1.jpg'
            },
            {
                idmovie: 5,
                title: 'Fast and Furious 8',
                banner: './banner1.jpg'
            },
            {
                idmovie: 6,
                title: 'Fast and Furious 8',
                banner: './banner1.jpg'
            },
            {
                idmovie: 7,
                title: 'Fast and Furious 8',
                banner: './banner1.jpg'
            },
            {
                idmovie: 8,
                title: 'Fast and Furious 8',
                banner: './banner1.jpg'
            },
        ]
    },
    {
        idtopic: 2,
        topic: 'Drama',
        movie: [
            {
                idmovie: 10,
                title: 'Fast and Furious 8',
                banner: './banner1.jpg'
            },
            {
                idmovie: 11,
                title: 'Fast and Furious 8',
                banner: './banner1.jpg'
            },
            {
                idmovie: 12,
                title: 'Fast and Furious 8',
                banner: './banner1.jpg'
            },
            {
                idmovie: 13,
                title: 'Fast and Furious 8',
                banner: './banner1.jpg'
            },
            {
                idmovie: 14,
                title: 'Fast and Furious 8',
                banner: './banner1.jpg'
            },
            {
                idmovie: 15,
                title: 'Fast and Furious 8',
                banner: './banner1.jpg'
            },
            {
                idmovie: 16,
                title: 'Fast and Furious 8',
                banner: './banner1.jpg'
            },
            {
                idmovie: 17,
                title: 'Fast and Furious 8',
                banner: './banner1.jpg'
            },
        ]
    },
    {
        idtopic: 3,
        topic: 'Sitcom',
        movie: [
            {
                idmovie: 18,
                title: 'Fast and Furious 8',
                banner: './banner1.jpg'
            },
            {
                idmovie: 19,
                title: 'Fast and Furious 8',
                banner: './banner1.jpg'
            },
            {
                idmovie: 20,
                title: 'Fast and Furious 8',
                banner: './banner1.jpg'
            },
            {
                idmovie: 21,
                title: 'Fast and Furious 8',
                banner: './banner1.jpg'
            },
            {
                idmovie: 22,
                title: 'Fast and Furious 8',
                banner: './banner1.jpg'
            },
            {
                idmovie: 23,
                title: 'Fast and Furious 8',
                banner: './banner1.jpg'
            },
            {
                idmovie: 24,
                title: 'Fast and Furious 8',
                banner: './banner1.jpg'
            },
            {
                idmovie: 25,
                title: 'Fast and Furious 8',
                banner: './banner1.jpg'
            },
        ]
    },
];

const PreviewList = () => {
    return (
        <div className="">

            {lists.map(list =>
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
            )}



        </div>
    )
}

export default PreviewList;