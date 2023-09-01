import { React } from 'react';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
// import { LazyLoadImage } from 'react-lazy-load-image-component';

const Loading = ({ typeLoading }) => {
    const List = ()=>{
        let arr = [];
        for(let i = 0; i < 10; i++) {
            arr.push({id:i});
        }
        return (
            <div>
                <h2 className="text-[25px] w-[150px] h-[25px] font-bold bg-slate-600 animate-pulse mt-3 mb-3 xl:ml-24"></h2>
                <div className="mb-5 xl:mr-24 xl:ml-24">
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView='4'
                        navigation
                        spaceBetween={100}
                    >
                        {
                            arr.map((m,i)=>(
                                <div key={m.id} className="pmovie">
                                    <SwiperSlide
                                        key={m.id}
                                        // style={{
                                        //     width: '200px',
                                        // }}
                                    >
                                        <Link key={m.id} to={`/`}>
                                            <div className="block_item-movie hover:text-zinc-500 bg-slate-600 animate-pulse">
                                                {/* <LazyLoadImage
                                                    className="transition duration-700 object-cover h-[295px]"
                                                    effect="opacity"
                                                    delayTime={500}
                                                /> */}
                                                <div className="transition duration-700 object-cover h-[270px] xl:h-[370px]"></div>
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
    
    const Banner = ()=>{
        return(
            <Carousel
                navigation={() => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2"></div>
                )}
            >
                <div className="relative h-full w-full">
                    <img
                        src="./banner1.jpg"
                        className="block w-full opacity-0"
                        alt="background film"
                    />
                    <div className="absolute inset-0 grid h-full w-full">
                        {/* <div className="w-full h-screen bg-slate-600 animate-pulse"></div>   */}
                        <div className="w-full h-screen bg-black animate-pulse"></div>  
                    </div>
                </div>
            </Carousel>
        )
    }

    switch(typeLoading) {
        case 'list':
            return <List/>
        case 'banner':
            return <Banner/>
    }

    return(
        <></>
    )
}

export default Loading;