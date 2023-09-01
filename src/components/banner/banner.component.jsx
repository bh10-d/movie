import React from "react";
import { useState, useEffect, memo } from 'react';
import '../banner/banner.styles.css';
import HotBanner from '../../directory/banner/element.component';
import Loading from '../loading/loading.component';

const Banner = ({ data }) => {
    const [banner, setBanner] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        if (data != '') {
            setLoading(false);
            setBanner(data);
        }
    }, [data]);

    if (loading) {
        return <Loading typeLoading="banner" />
    }

    // const extract = banner.filter((f, i) => f.homeSectionType == 'BANNER');//.map((m,ii)=>{return m.homeSectionName});

    console.log(data);

    return (
        <div>
            {/* <img src="./banner1.jpg" alt="" /> */}
            <div id="carouselExampleControls" className="carousel slide relative" data-bs-ride="carousel">
            {/* <img src="./banner1.jpg" alt="" /> */}
                <HotBanner extract={data}/>
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default memo(Banner);