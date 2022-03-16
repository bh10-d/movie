import React from "react";
import ReactHlsPlayer from 'react-hls-player';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Video = ({ data, episode, first }) => {
    const { c, v } = useParams();
    const [media, setMedia] = useState([]);
    //<meta http-equiv="Access-Control-Allow-Origin" content="*" />
    useEffect(() => {
        const myAbortController = new AbortController();
        fetch(`https://ga-mobile-api.loklok.tv/cms/app/media/previewInfo?category=${c}&contentId=${v}&episodeId=${episode||first}&definition=GROOT_HD`, { // 37813 //data.data.episodeVo[0].id
            method: 'GET',
            headers: {
                'Content-type': 'application/json;charset=UTF-8',
                'lang': 'en',
                'versioncode': '11',
                'clienttype': 'ios_jike_default'
            },
        }).then(res => res.json())
            .then(d => {
                setMedia(d.data.mediaUrl);
                console.log(d);
            }).catch((err)=>{console.log(err)});

        //cleanup
        return () => {
            myAbortController.abort();
        }
    }, [first || episode || data]);

    // const urlfilm = data.episodeVo[0].id;
    // console.log(urlfilm);

    console.log(first);

    return (
        <div className="video w-full">
            <ReactHlsPlayer
                src={`${media||first}`}
                autoPlay={false}
                controls={true}
                width="100%"
                height="auto"
                // outline="none"
                crossOrigin=""
                playsInline
            />
            {/* <video controls>
                        <source src="/test.mp4" type="video/mp4"/>
                    </video> */}

        </div>
    )
}

export default Video;