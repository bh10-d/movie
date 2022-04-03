import React from "react";
import ReactHlsPlayer from 'react-hls-player';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import axios from 'axios'
import './video.styles.css';

const Video = ({ data, episode, first }) => {
  const { c, v } = useParams();
  const [media, setMedia] = useState([]);
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
              }

          });
        const data = await response.json();
        setMedia(data.data.mediaUrl);
        console.log({ data })
      }
      catch (e) {
        console.log(e)
      }
    }
    useEffect(() => {
      makeAPICall();
    }, [episode||first])


  // useEffect(() => {
  //   getAllNotes();
  // }, [episode || first]);
  // const url = `https://ga-mobile-api.loklok.tv/cms/app/media/previewInfo?category=${c}&contentId=${v}&episodeId=${episode || first}&definition=GROOT_HD`;
  // const getAllNotes = () => {
  //   axios.get(`${url}`, {
  //     headers: {
  //       lang: "en",
  //       versioncode: "11",
  //       clienttype: "ios_jike_default",
  //     }
  //   })
  //     .then((response) => {
  //       console.log(response.data.data.mediaUrl);
  //       setMedia(response.data.data.mediaUrl);
  //     })
  //     .catch(error => console.error(`Error: ${error}`));
  // }
  // console.log(url)








  console.log(first);

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