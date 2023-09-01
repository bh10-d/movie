import React from "react";
import ReactHlsPlayer from 'react-hls-player';
import { useState, useEffect, memo } from "react";
import { useParams } from "react-router-dom";
// import axios from 'axios'
import './video.styles.css';

const Video = ({ data, episode, first, subtitle }) => {
  const { c, v } = useParams();
  const [media, setMedia] = useState(data);
  const [status,setStatus] = useState(false);

  // const makeAPICall = async () => {
  //     try {
  //       const response = await fetch(`https://ga-mobile-api.loklok.tv/cms/app/media/previewInfo?category=${c}&contentId=${v}&episodeId=${episode||first}&definition=GROOT_HD`, 
  //         {
  //             mode:'cors',
  //             method:'GET',
  //             headers: {
  //                 'lang': 'en',
  //                 'versioncode': '11',
  //                 'clienttype': 'ios_jike_default'
  //             },
  //         });
  //       const data = await response.json();
  //       setMedia(data.data.mediaUrl);
  //       compare(data.data.mediaUrl)
  //       // console.log({ data })
  //       // console.log(data.data.mediaUrl)
  //     }
  //     catch (e) {
  //       console.log(e)
  //     }
  //   }
  //   useEffect(() => {
  //     makeAPICall();
      
  //   }, [episode||first])
    
    
  //   const handleErrorVideo = (boo)=>{
  //     if(boo){
  //       setStatus(true)
  //     }else{
  //       setStatus(false)
  //     }
  //   }
  
  //   useEffect(() => {
  //     makeAPICall()
  //     // let TimerId = setInterval(()=>{
  //     //   makeAPICall();
  //     // },500) 
  //     // return clearInterval(TimerId)
  //     return;
  //   },[status])

  //   // console.log(subtitle)


  // const compare = (str1) => {
  //   let cstr1 = str1.substr(0,29)
  //       // switch(cstr1){
  //       //   case "http://hw-cdn-play.loklok.tv/":
  //       //     handleErrorVideo(true)
  //       //     // setStatus(true)
  //       //     console.log("case1: ",cstr1)
  //       //   case "http://gg-cdn-play.loklok.tv/":
  //       //     handleErrorVideo(true)
  //       //     // setStatus(true)
  //       //     console.log("case2",cstr1)
  //       //   case "https://ali-cdn-play.loklok.t":
  //       //     console.log("case3: ",cstr1)
  //       //   case "http://akm-cdn-play.loklok.tv":
  //       //     console.log("case4: ",cstr1)  
  //       //   default:
  //       //     handleErrorVideo(false) // hoi vo dung nhung co tac dung :)
  //       //     console.log("default: ",cstr1)
  //       // }
  //       if(cstr1=="http://hw-cdn-play.loklok.tv/"){
  //         // console.log("case1: ",cstr1)
  //         return handleErrorVideo(!status)
  //       }
  //       if(cstr1=="http://gg-cdn-play.loklok.tv/"){
  //         // console.log("case2",cstr1)
  //         return handleErrorVideo(!status)
  //       }
  //       if(cstr1=="https://ali-cdn-play.loklok.t"){
  //         // console.log("case3: ",cstr1)
  //       }
  //       if(cstr1=="http://akm-cdn-play.loklok.tv"){
  //         // console.log("case4: ",cstr1)
  //       }
  //       // else{
  //       //   console.log("default: ",cstr1)
  //       //   return handleErrorVideo(false) // hoi vo dung nhung co tac dung :)
  //       // }
  // }



  const Player = (props) => {
    return (
      <ReactHlsPlayer
        src={`https://autoembed.to/movie/tmdb/${props.media}`}
        type="application/x-mpegURL"
        autoPlay={false}
        controls={true}
        width="100%"
        height="auto"
        // outline="none"
        crossOrigin=""
        playsInline
      >
        {props.children}
      </ReactHlsPlayer>
    )
  }


  // video
  return (
    <div className="h-full w-full">
      {/* <ReactHlsPlayer
        src={`${media}`}
        type="application/x-mpegURL"
        autoPlay={false}
        controls={true}
        width="100%"
        height="auto"
        crossOrigin=""
        playsInline
      >
        <track label="vi" kind="subtitles" srcLang="en" src="/testsub.vtt" default/>
      </ReactHlsPlayer> */}
      {/* <Player media={media}> */}
        {/* <track label="vi" kind="subtitles" srcLang="en" src={`https://srt-to-vtt.vercel.app?url=${encodeURIComponent(subtitle)}`} default/> */}
      {/* </Player> */}
      <iframe className="h-full w-full" src={`https://autoembed.to/movie/tmdb/${v}`} allowFullScreen></iframe>
    </div>
  )
}

export default memo(Video);