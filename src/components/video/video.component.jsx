import React from "react";
import ReactHlsPlayer from 'react-hls-player';
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
// import axios from 'axios'
import './video.styles.css';

const Video = ({ data, episode, first }) => {
  const { c, v } = useParams();
  const [media, setMedia] = useState([]);
  const [status,setStatus] = useState(false);

  // const handleError = useRef(null);
  //<meta http-equiv="Access-Control-Allow-Origin" content="*" />
  // useEffect(() => {
  //     const myAbortController = new AbortController();
  //     fetch(`https://ga-mobile-api.loklok.tv/cms/app/media/previewInfo?category=${c}&contentId=${v}&episodeId=${episode||first}&definition=GROOT_HD`, { // 37813 //data.data.episodeVo[0].id
  //         method: 'GET',
  //         headers: {
  //             'Content-type': 'application/json;charset=UTF-8',
  //             'lang': 'en',
  //             'versioncode': '11',
  //             'clienttype': 'ios_jike_default'
  //         },
  //     }).then(res => res.json())
  //         .then(d => {
  //             setMedia(d.data.mediaUrl);
  //             console.log(d);
  //         }).catch((err)=>{console.log(err)});

  //     //cleanup
  //     return () => {
  //         myAbortController.abort();
  //     }
  // }, [first || episode || data]);


  const makeAPICall = async () => {
      try {
        const response = await fetch(`https://ga-mobile-api.loklok.tv/cms/app/media/previewInfo?category=${c}&contentId=${v}&episodeId=${episode||first}&definition=GROOT_HD`, 
          {
              mode:'cors',
              method:'GET',
              headers: {
                  'lang': 'en',
                  'versioncode': '11',
                  'clienttype': 'ios_jike_default'
              },
          });
        const data = await response.json();

        
        setMedia(data.data.mediaUrl);
        compare(data.data.mediaUrl)
        // console.log({ data })
        console.log(data.data.mediaUrl)
      }
      catch (e) {
        console.log(e)
      }
    }
    useEffect(() => {
      makeAPICall();
    }, [episode||first])
    
    
    const handleErrorVideo = (boo)=>{
      if(boo){
        setStatus(true)
      }else{
        setStatus(false)
      }
    }
  
    useEffect(() => {
      makeAPICall()
      // let TimerId = setInterval(()=>{
      //   makeAPICall();
      // },500) 
      // return clearInterval(TimerId)
    },[status])


  const compare = (str1) => {
    let cstr1 = str1.substr(0,29)
        switch(cstr1){
          case "http://hw-cdn-play.loklok.tv/":
            // handleErrorVideo(true)
            setStatus(true)
            console.log("case1")
            console.log(cstr1)
          case "http://gg-cdn-play.loklok.tv/":
            // handleErrorVideo(true)
            setStatus(true)
            console.log("case2")
            console.log(cstr1)
          case "https://ali-cdn-play.loklok.t":
            console.log("case2")
            console.log(cstr1)
          default:
            handleErrorVideo(false) // hoi vo dung nhung co tac dung :)
            console.log("default")
            console.log(cstr1)
        }
  }



  return (
    <div className="video">
      <ReactHlsPlayer
        src={`${media}`}
        type="application/x-mpegURL"
        autoPlay={false}
        controls={true}
        width="100%"
        height="auto"
        // outline="none"
        crossOrigin=""
        playsInline
      />
    </div>
  )
}

export default Video;