import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import ReactHlsPlayer from 'react-hls-player';
// import { data } from "autoprefixer";
import './watch.styles.css';
import Video from '../../components/video/video.component';
import Navbart from '../../components/navbar/navbart.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import Episode from '../../components/episode/episode.component';
import Search from '../../components/search/search.component';

const Watch = () => {
    const { c, v, e } = useParams();
    const [goToTop,setGoToTop] = useState(false); // usestate scroll to top
    // console.log(e);
    // const [data, setData] = useState([]);
    const [movie, setMovie] = useState('');
    // const [media, setMedia] = useState([]);
    const [loading, setLoading] = useState(true);
    const [episode,setEpisode] = useState('');
    const [subtitles, setSubtitles] = useState('');
    const [subtitle, setSubtitle] = useState('');
    // const [reso,setReso] = useState('')


    // scroll to top of page
    useEffect(() => {
        const handleScroll=()=>{
            setGoToTop(window.scrollY >= 650);
        }
        window.addEventListener('scroll',handleScroll);
        return ()=>{
            window.removeEventListener('scroll',handleScroll);
        }
      },[]);
      
      const handleGotoTop = ()=>{
          window.scrollTo({top: 0, behavior: 'smooth'});
      }
    // end scroll to top of page



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
                // setData(d);
                setEpisode(d.data.episodeVo[0].id);
                // console.log(d.data.episodeVo[0].id);
                console.log(d);
                // let test = d.data.episodeVo.filter((f,i)=>f.id === d.data.episodeVo[0].id || f.id === e);
                // test.map((m) =>{
                //     // console.log(m.definitionList[0].code);
                //     setReso(m.definitionList[0].code);
                // })
                // console.log(d.data.episodeVo[0].subtitlingList);
                const {data: {episodeVo}} = d;
                // console.log(episodeVo)
                setSubtitles(episodeVo)
                let sub = d.data.episodeVo[0].subtitlingList.filter((f,i)=>f.languageAbbr=='vi')
                // console.log(sub[0].subtitlingUrl)
                setSubtitle(sub[0].subtitlingUrl)
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
        // console.log(subtitles);
        if(subtitles != ''){
            const ex = subtitles.filter(f=>f.id==e);
            const exx = ex[0].subtitlingList.filter((f,i)=>f.languageAbbr=='vi')
            // console.log(ex)
            // console.log(exx)
            setSubtitle(exx[0].subtitlingUrl)
        }
    },[e]);
    
    

    if (loading) {
        return <p>waiting</p>
    }







    return (
        <>
            <Navbart />
            {/*video*/}
            <div className="relative">
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
                    {/* <Video data={movie} episode={e} first={episode} subtitle={subtitle}/> */}
                    {/* <div className="md:pl-[50px] md:pr-[50px] pl-[10px] pr-[10px]"> */}
                    <div className="md:container">
                        <div className="md:flex">
                            <div className="md:basis-9/12 md:mr-5">
                                <Video data={movie} episode={e} first={episode} subtitle={subtitle}/>
                                <h1 className="text-[30px] text-white-500 font-semibold">{movie ? movie.name : "name"}</h1>
                                <h3><span><i className="fa-solid fa-star text-yellow-300"></i></span> {movie ? movie.score : "score"} <i className="fa-solid fa-calendar"></i> {movie ? movie.year : "year"}</h3>
                                <div className="introduce">
                                    <p>{movie ? movie.introduction : "introduction"}</p>
                                </div>
                                <Episode ep={movie.episodeVo} first={episode}/>
                            </div>
                            <div className="md:basis-3/12 invisible md:visible">
                                <div style={{marginLeft:'-10px'}}>
                                    <Search />
                                </div>
                                <Sidebar />
                            </div>
                        </div>
                        {/* <div className=" mt-[30px] flex flex-row">
                            <div className="sm:basis-9/12">
                                <Episode ep={movie.episodeVo} first={episode}/>
                            </div>
                            <div className="sm:basis-3/12">
                                <div style={{marginLeft:'-10px'}}>
                                    <Search />
                                </div>
                                <Sidebar />
                            </div>
                        </div> */}
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