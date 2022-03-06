import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactHlsPlayer from 'react-hls-player';
// import { data } from "autoprefixer";
import './watch.styles.css';
import Sidebar from '../../components/sidebar/sidebar.component';
import Episode from '../../components/episode/episode.component';

const Watch = () => {
    let { v } = useParams();

    const [data, setData] = useState([]);
    const [movie, setMovie] = useState('');
    const [media, setMedia] = useState([]);

    // async function postData(url = '') {
    //     const response = await fetch(url, {
    //         // method: 'GET', // *GET, POST, PUT, DELETE, etc.
    //         mode: 'cors',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'lang': 'en',
    //             'versioncode': '11',
    //             'clienttype': 'ios_jike_default'
    //         }
    //     });
    //     return response.json();
    // }
    // postData('https://ga-mobile-api.loklok.tv/cms/app/movieDrama/get?id=8084&category=0')
    //     .then(response => {
    //         // setData(response);
    //         console.log(response);
    //     });

    useEffect(() => {
        fetch('https://ga-mobile-api.loklok.tv/cms/app/movieDrama/get?id=8084&category=0', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json;charset=UTF-8',
                'lang': 'en',
                'versioncode': '11',
                'clienttype': 'ios_jike_default'
            }
        }).then(res => res.json())
            .then(d => {
                setData(d);
                setMovie(d.data);
                console.log(d);
            })
        // cleanup 
        // return ()=>{
        //     setData([]);
        // }
    }, [])

    useEffect(() => {
        fetch('https://ga-mobile-api.loklok.tv/cms/app/media/previewInfo?category=0&contentId=8084&episodeId=37813&definition=GROOT_LD', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json;charset=UTF-8',
                'lang': 'en',
                'versioncode': '11',
                'clienttype': 'ios_jike_default'
            }
        }).then(res => res.json())
            .then(d => {
                setMedia(d.data);
            })
    }, []);


    return (
        <div>
            {/*video*/}
            <div className="block_video h-[200vh]">
                <div className="video mt-[70px] w-full h-[90vh]">
                    <ReactHlsPlayer
                        src={media.mediaUrl}
                        autoPlay={false}
                        controls={true}
                        width="100%"
                        height="auto"
                    />
                </div>
                <div className="container mx-auto">
                    <h1 className="text-[30px]">{movie.name}</h1>
                    <h3><span><i className="fa-solid fa-star text-yellow-300"></i></span> {movie.score} <i className="fa-solid fa-calendar"></i> {movie.year}</h3>
                    <div className="introduce">
                        <p>{movie.introduction}</p>
                    </div>
                </div>
                <div className="container mx-auto mt-[30px] flex flex-row">
                    <div className="basis-9/12">
                        <Episode />
                    </div>
                    <div className="basis-3/12">
                        <Sidebar />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Watch;