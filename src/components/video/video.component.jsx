import React from "react";
import ReactHlsPlayer from 'react-hls-player';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import axios from 'axios'
import './video.styles.css';

const Video = ({ data, episode, first }) => {
  const { c, v } = useParams();
  const [media, setMedia] = useState([]);
  const [subtitles,setSubtitles] = useState("");

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

  console.log(data);


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
        // setMedia(URL.createObjectURL(data.data.mediaUrl));
        compare(data.data.mediaUrl);
        subtitle();
        // console.log({ data })
        // console.log(data.data.mediaUrl)
        // return media && URL.revokeObjectURL(avatar.preview);
      }
      catch (e) {
        console.log(e)
      }
    }

    useEffect(() => {
      makeAPICall();
    }, [episode||first])
      

  const compare = (str1) => {
    let cstr1 = str1.substr(0,29)
        if(cstr1 == "http://hw-cdn-play.loklok.tv/" || cstr1 == "http://gg-cdn-play.loklok.tv/"){
          makeAPICall();
        }
  }


  const subtitle = ()=>{
    let listfilm = data.episodeVo;
    let filter  = listfilm.filter(f=>f.id == episode)
    .map((list,index) => list.subtitlingList)
    .map((video,index)=> video[6].subtitlingUrl)
    // .filter((lang,index) => lang.transleType == 0);
    setSubtitles(filter);
    console.log(filter);//[0][6].language
  }

  // subtitle();

  // console.log(subtitles)

  return (
    <div className="video">
      {/* <ReactHlsPlayer
        src={`${media}`}
        autoPlay={false}
        controls={true}
        width="100%"
        height="auto"
        crossOrigin="anonymous"
        playsInline
        hlsConfig={{
          startPosition: 0,
          enableWebVTT: true,
          enableCEA708Captions: true,
          captionsTextTrack1Label: "English",
          captionsTextTrack1LanguageCode: "en",
          captionsTextTrack2Label: "Spanish",
          captionsTextTrack2LanguageCode: "es",
          
        }}
      /> */}
      <video id="video" width="640" height="auto"controls>
        <source src="/test.mp4" type="video/mp4"/>
        <source src={`${media}`} type="application/x-mpegURL"/>
        <track label="vi" kind="subtitles" srclang="en" src="/testsub.vtt" default/>
        <track label="Deutsch" kind="subtitles" srclang="de" src="/testsub.vtt"/>
        <track label="Español" kind="subtitles" srclang="es" src="captions/vtt/sintel-es.vtt"/>
      </video>
    </div>
  )
}

export default Video;