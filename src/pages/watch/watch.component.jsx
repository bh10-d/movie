import React from "react";
import { useState, useEffect, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import ReactHlsPlayer from 'react-hls-player';
// import { data } from "autoprefixer";
import './watch.styles.css';
import Video from '../../components/video/video.component';
import Navbart from '../../components/navbar/navbart.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import Episode from '../../components/episode/episode.component';
import Search from '../../components/search/search.component';

const Watch = () => {
    const { c, v, e } = useParams();
    // console.log(e);
    const [data, setData] = useState([]);
    const [movie, setMovie] = useState('');
    // const [media, setMedia] = useState([]);
    const [loading, setLoading] = useState(true);
    const [episode,setEpisode] = useState('');
    const [reso,setReso] = useState('')

    // let baseUrl1 = 'https://ga-mobile-api.loklok.tv/cms/app/movieDrama/get?id=8084&category=0'; // info phim
    useEffect(() => {
        const myAbortController = new AbortController();
        fetch(`https://ga-mobile-api.loklok.tv/cms/app/movieDrama/get?id=${v}&category=${c}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json;charset=UTF-8',
                'lang': 'en',
                'versioncode': '11',
                'clienttype': 'ios_jike_default'
            },
            signal: myAbortController.signal
        }).then(res => res.json())
            .then(d => {
                setMovie(d.data);
                setData(d);
                setEpisode(d.data.episodeVo[0].id);
                // console.log(d.data.episodeVo[0].id);
                console.log(d);
                let test = d.data.episodeVo.filter((f,i)=>f.id === d.data.episodeVo[0].id || f.id === e);
                test.map((m) =>{
                    // console.log(m.definitionList[0].code);
                    setReso(m.definitionList[0].code);
                })
            }).finally(setLoading(false));

        //cleanup
        return () => {
            // setMovie('');
            myAbortController.abort();
        }
    }, [c, v]);
    // console.log('movie + ',movie);
    // console.log('data + ',data);


    // console.log('tap',episode)

    useEffect(() => {
        setEpisode(e);
    },[e]);
    
    
    // let baseUrl2 = 'https://ga-mobile-api.loklok.tv/cms/app/media/previewInfo?category=0&contentId=8084&episodeId=37813&definition=GROOT_LD' // coi phim
    // useEffect(() => {
    //     console.log(episode);
    //     const myAbortController = new AbortController();
    //     if (!loading) {
    //         let ee = movie.episodeVo[0].id;
    //         if(typeof(e) === 'undefined'){
    //             ee = movie.episodeVo[0].id
    //         }else{
    //             ee = e;
    //         }
    //         fetch(`https://ga-mobile-api.loklok.tv/cms/app/media/previewInfo?category=${c}&contentId=${v}&episodeId=${ee}&definition=GROOT_HD`, { // 37813 //data.data.episodeVo[0].id
    //             method: 'GET',
    //             headers: {
    //                 'Content-type': 'application/json;charset=UTF-8',
    //                 'lang': 'en',
    //                 'versioncode': '11',
    //                 'clienttype': 'ios_jike_default'
    //             }
    //         }).then(res => res.json())
    //             .then(d => {
    //                 setMedia(d.data);
    //                 console.log(d);
    //                 console.log(ee);
    //             })
    //     }
    //     //cleanup
    //     return () => {
    //         myAbortController.abort();
    //     }
    // }, [e||movie]);

    if (loading) {
        return <p>waiting</p>
    }

    return (
        <div>
            <Navbart />
            {/*video*/}
            <div className="block_video h-[200vh]">
                {/* <div className="video w-full">
                    <ReactHlsPlayer
                        src={media.mediaUrl}
                        autoPlay={false}
                        controls={true}
                        width="100%"
                        height="auto"
                        outline="none"
                    />
                </div> */}
                <Video data={movie} episode={e} first={episode}/>
                <div className="md:pl-[50px] md:pr-[50px] pl-[10px] pr-[10px]">
                    <h1 className="text-[30px]">{movie ? movie.name : "name"}</h1>
                    <h3><span><i className="fa-solid fa-star text-yellow-300"></i></span> {movie ? movie.score : "score"} <i className="fa-solid fa-calendar"></i> {movie ? movie.year : "year"}</h3>
                    <div className="introduce">
                        <p>{movie ? movie.introduction : "introduction"}</p>
                    </div>
                    <div className=" mt-[30px] flex flex-row">
                        <div className="sm:basis-9/12">
                            <Episode ep={movie.episodeVo} first={episode}/>
                        </div>
                        <div className="sm:basis-3/12">
                            <div style={{marginLeft:'-10px'}}>
                                <Search />
                            </div>
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Watch;