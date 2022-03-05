import React from "react";
import { useParams } from "react-router-dom";
import './watch.styles.css';
import Sidebar from '../../components/sidebar/sidebar.component';
import Episode from '../../components/episode/episode.component';

const Watch = () => {
    let { v } = useParams();
    return (
        <div>
            {/*video*/}
            <div className="block_video h-[200vh]">
                <div className="video mt-[70px] w-full h-[70vh] bg-orange-400">
                    <h1 className="text-xl text-cyan-500 text-center">Watch film id: {v}</h1>
                </div>
                <div className="container mx-auto">
                    <h1 className="text-[30px]">Fast and Furious 8</h1>
                    <h3><span><i className="fa-solid fa-star text-yellow-300"></i></span> 10</h3>
                    <div className="introduce">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita aperiam nemo accusantium praesentium animi aliquid adipisci quisquam eaque omnis, quibusdam repudiandae nihil cumque non repellat voluptatem? Cumque adipisci voluptas officia.</p>
                    </div>
                </div>
                <div className="container mx-auto mt-[30px] flex flex-row">
                    <div className="basis-9/12">
                        <Episode/>
                    </div>
                    <div className="basis-3/12">
                        <Sidebar/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Watch;