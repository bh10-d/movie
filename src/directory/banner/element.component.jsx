import { React, useState, useEffect, memo } from "react";
// import ChildBanner from "../banner/image.component";
import { Carousel, Typography } from "@material-tailwind/react";

const HotBanner = ({ data }) => {
    // // const resize = (url)=>{
    // //     const newsize = `https://images.weserv.nl/?url=${url}&w=175&h=246`;
    // //     // console.log(newsize);
    // //     return newsize;
    // // }

    console.log(data)

    return (
        <>
            <Carousel
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                      {/* {new Array(length).fill("").map((_, i) => (
                        <span
                          key={i}
                          className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                            activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                          }`}
                          onClick={() => setActiveIndex(i)}
                        />
                      ))} */}
                    </div>
                  )}
            >
                {data.map((m, i) => (
                    <div className="relative h-full w-full" key={i}>
                        <img
                            // src={resize(m.imageUrl)}
                            // src={m.imageUrl}
                            src={'https://image.tmdb.org/t/p/original' + m.backdrop_path}
                            // src="./banner1.jpg"
                            className="block w-full opacity-50"
                            alt="background film"
                        />
                        <div className="absolute inset-0 grid h-full w-full place-items-center">
                            <div className=" left-20 lg:left-40 bottom-10 lg:bottom-36 absolute h-[31%] w-full overflow-hidden text-ellipsis">
                                <div className="w-3/4 md:w-2/4">
                                    <Typography
                                        variant="h1"
                                        color="white"
                                        className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                                    >
                                        {m.title}
                                    </Typography>
                                    <Typography
                                        variant="lead"
                                        color="white"
                                        className="mb-12 opacity-80"
                                    >
                                        {m.overview}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </>
    )


}


export default memo(HotBanner);