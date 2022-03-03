import React from "react";
import '../banner/banner.styles.css';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from "swiper";
// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';

const Banner = () => {
    return (
        <div>
            {/* <img src="./banner1.jpg" alt="" /> */}
            <div id="carouselExampleControls" class="carousel slide relative" data-bs-ride="carousel">
                <div class="carousel-inner relative w-full overflow-hidden">
                    {/* <!-- Single item --> */}
                    <div class="carousel-item active relative float-left w-full">
                        <img
                            src="./banner1.jpg"
                            class="block w-full"
                            alt="Motorbike Smoke"
                        />
                        <div class="carousel-caption hidden md:block absolute text-left">
                            <h5 class="text-xl">First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>

                    {/* <!-- Single item --> */}
                    <div class="carousel-item relative float-left w-full">
                        <img
                            src="./banner1.jpg"
                            class="block w-full"
                            alt="Mountaintop"
                        />
                        <div class="carousel-caption hidden md:block absolute text-left">
                            <h5 class="text-xl">Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>

                    {/* <!-- Single item --> */}
                    <div class="carousel-item relative float-left w-full">
                        <img
                            src="./banner1.jpg"
                            class="block w-full"
                            alt="Woman Reading a Book"
                        />
                        <div class="carousel-caption hidden md:block absolute text-left">
                            <h5 class="text-xl">Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Inner --> */}

                <button
                    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                >
                    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                >
                    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Banner;