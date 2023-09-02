import React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
// import ReactHlsPlayer from 'react-hls-player';
// import { data } from "autoprefixer";
import './watch.styles.css';
import Video from '../../components/video/video.component';
import Navbart from '../../components/navbar/navbart.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import Episode from '../../components/episode/episode.component';
import Search from '../../components/search/search.component';
import {AppContext} from '../../context/AppProvider';

const Watch = () => {
    const {BASE_URL, CONFIG} = useContext(AppContext);
    const { c, v, e } = useParams();
    const [goToTop, setGoToTop] = useState(false); // usestate scroll to top
    // console.log(e);
    // const [data, setData] = useState([]);
    const [movie, setMovie] = useState(v);
    const [showIntro, setShowIntro] = useState(true);
    const [infoMovie, setInfoMovie] = useState({});
    // const [media, setMedia] = useState([]);
    const [loading, setLoading] = useState(true);
    const [episode, setEpisode] = useState('');
    const [subtitles, setSubtitles] = useState('');
    const [subtitle, setSubtitle] = useState('');
    // const [reso,setReso] = useState('')


    // scroll to top of page
    useEffect(() => {
        const handleScroll = () => {
            setGoToTop(window.scrollY >= 650);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    useEffect(() => {
        // 'https://api.themoviedb.org/3/movie/615656?language=vi'
        fetch(`${BASE_URL}movie/${v}?language=vi`,CONFIG)
        .then(res => res.json())
        .then(d => {
            setInfoMovie(d);
            console.log(d)
        })
    },[]);

    const handleGotoTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // end scroll to top of page

    console.log(infoMovie)

    // let baseUrl1 = 'https://ga-mobile-api.loklok.tv/cms/app/movieDrama/get?id=8084&category=0'; // info phim
    useEffect(() => {
        // const myAbortController = new AbortController();
        // fetch(`https://ga-mobile-api.loklok.tv/cms/app/movieDrama/get?id=${v}&category=${c}`, {
        //     method: 'GET',
        //     headers: {
        //         'Content-type': 'application/json;charset=UTF-8',
        //         'lang': 'en',
        //         'versioncode': '11',
        //         'clienttype': 'ios_jike_default'
        //     },
        //     signal: myAbortController.signal
        // }).then(res => res.json())
        //     .then(d => {
        //         setMovie(d.data);
        //         // setData(d);
        //         if(e==undefined){
        //             setEpisode(d.data.episodeVo[0].id);
        //         }
        //         // console.log(e==undefined);
        //         // console.log(d.data.episodeVo[0].id);
        //         // console.log(d);
        //         // let test = d.data.episodeVo.filter((f,i)=>f.id === d.data.episodeVo[0].id || f.id === e);
        //         // test.map((m) =>{
        //         //     // console.log(m.definitionList[0].code);
        //         //     setReso(m.definitionList[0].code);
        //         // })
        //         // console.log(d.data.episodeVo[0].subtitlingList);
        //         const {data: {episodeVo}} = d;
        //         // console.log(episodeVo)
        //         setSubtitles(episodeVo)
        //         if(e==undefined){
        //             let sub = d.data.episodeVo[0].subtitlingList.filter((f,i)=>f.languageAbbr=='vi')
        //             // console.log(sub[0].subtitlingUrl)
        //             setSubtitle(sub[0].subtitlingUrl)
        //         }
        //     }).finally(setLoading(false));

        // //cleanup
        // return () => {
        //     // setMovie('');
        //     myAbortController.abort();
        // }
    }, [c, v]);



    // console.log('movie + ',movie);
    // console.log('data + ',data);


    // console.log('tap',episode)

    // useEffect(() => {
    //     setEpisode(e);
    //     if(subtitles != ''){
    //         const ex = subtitles.filter(f=>f.id==e);
    //         const exx = ex[0].subtitlingList.filter((f,i)=>f.languageAbbr=='vi')
    //         setSubtitle(exx[0].subtitlingUrl)
    //     }
    //     return setSubtitles('');
    // },[e]);



    // if (loading) {
    //     return <p>waiting</p>
    // }


    return (
        <>
            <Navbart />
            <div className="relative">
                <div className="xl:container">
                    <div className="xl:flex overflow-hidden">
                        <div className={`basis-full w-full xl:basis-9/12 ${(c=='movie')?'xl:basis-full':''} xl:mr-5`}>
                            {/* <Video data={movie} episode={e} first={`${(e==undefined)?episode:e}`} subtitle={subtitle}/> */}
                            <div className="h-[330px] md:h-[550px] lg:h-[650px] w-screen lg:w-full">
                                {/* <video className="h-full w-full" controls>
                                    <source src="./test.mp4" type="video/mp4"/>
                                </video> */}
                                <Video data={movie} episode={e || episode} subtitle={subtitle} />
                            </div>
                            <div className="mt-5 bg-blue-gray-900 rounded-lg">
                                <div className="pl-3 pt-3">
                                    <h1 className="text-[30px] text-white-500 font-semibold">{infoMovie ? infoMovie.title : "name"}</h1>
                                    <h3><span><i className="fa-solid fa-star text-yellow-300"></i></span> {infoMovie ? infoMovie.vote_average : "score"} <i className="fa-solid fa-calendar"></i> {infoMovie ? infoMovie.release_date : "year"}</h3>
                                    <p></p>
                                </div>
                                <div className="mb-4 p-3">
                                    <p className={`${(showIntro) ? "" : "h-[200px]"} overflow-hidden`}>{infoMovie ? infoMovie.overview : "introduction"}</p>
                                    <div>
                                        {/* sau nay se dua nhieu thong tin hon o day */}
                                    </div>
                                    <button className="w-full text-right text-green-500" onClick={() => { setShowIntro(!showIntro) }}>{(showIntro) ? "Xem thêm" : "Thu gọn"}</button>
                                </div>
                            </div>
                        </div>
                        <div className={`basis-0 xl:basis-3/12 ${(c=='movie')?'hidden':''} block`}>
                            <div>
                                <Episode ep={movie.episodeVo} first={episode}/>
                            </div>
                            {/* <div style={{ marginLeft: '-10px' }}> */}
                                {/* <Search /> */}
                            {/* </div> */}
                            {/* <Sidebar /> */}
                        </div>
                    </div>
                </div>
            </div>


            {goToTop && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20,
                        zIndex: 99
                    }}
                    onClick={handleGotoTop}
                >
                    <div className="animate-bounce">
                        <i className='bx bx-up-arrow-alt text-4xl'></i>
                    </div>
                </button>
            )}
        </>
    )
}

export default Watch;