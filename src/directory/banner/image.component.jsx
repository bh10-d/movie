import {React, useState, useEffect} from "react";
import { Link } from "react-router-dom";

const ChildBanner = ({src, presrc})=>{

    const [movie, setMovie] = useState('');
    const [url, setUrl] = useState('');
    const [ob, setOb] = useState([]);
    const [test, setTest] = useState(
        {
            start: 0,
            end: 0
        }
    );
    const [loading, setLoading] = useState(true);
    // const resize = (url)=>{
    //     const newsize = `https://images.weserv.nl/?url=${url}&w=175&h=246`;
    //     // console.log(newsize);
    //     return newsize;
    // }

    let arr = [];
    // const [{id,category}] = arr
    const sinfo = (s)=>{
        // let test = extract[0].recommendContentVOList.filter(f=>f.id == s)
        // // console.log(test[0].jumpAddress)
        // let start = test[0].jumpAddress.search("=");
        // let end = test[0].jumpAddress.search("&");
        //     // setOb({
        //     //     id: test[0].jumpAddress.slice(start+1,end),
        //     //     category: test[0].jumpAddress.slice(end+6,test[0].jumpAddress.length)
        //     // })
        // setTest({
        //     start: start,
        //     end: end
        // })
        // console.log(test)


        let start = presrc.search("=");
        let end = presrc.search("&");
        console.log(start,end)
        arr.push({
            id: presrc.slice(start+1,end),
            category: presrc.slice(end+6,presrc.length)
        })
        // setOb(arr)
        // setOb({
        //     // id: test[0].jumpAddress.slice(start+1,end),
        //     // category: test[0].jumpAddress.slice(end+6,test[0].jumpAddress.length)
        //     id: presrc.slice(start+1,end),
        //     category: presrc.slice(end+6,presrc.length)
        // })
    }
    sinfo();


    useEffect(() => {
        const myAbortController = new AbortController();
        fetch(`https://ga-mobile-api.loklok.tv/cms/app/movieDrama/get?id=${arr[0].id}&category=${arr[0].category}`, {
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
                // setEpisode(d.data.episodeVo[0].id);
                // console.log(d.data.episodeVo[0].id);
                console.log(d);
                // let test = d.data.episodeVo.filter((f,i)=>f.id === d.data.episodeVo[0].id || f.id === e);
                // test.map((m) =>{
                //     // console.log(m.definitionList[0].code);
                //     setReso(m.definitionList[0].code);
                // })
                // console.log(d.data.episodeVo[0].subtitlingList);
                // const {data: {episodeVo}} = d;
                // console.log(episodeVo)
                // setSubtitles(episodeVo)
                // let sub = d.data.episodeVo[0].subtitlingList.filter((f,i)=>f.languageAbbr=='vi')
                // console.log(sub[0].subtitlingUrl)
                // setSubtitle(sub[0].subtitlingUrl)
            })
            .finally(setLoading(false));

        //cleanup
        return () => {
            // setMovie('');
            myAbortController.abort();
        }
        // console.log(arr[0].id)
    }, [arr[0].id]);


    console.log(arr)
    console.log(movie)
    return (
        <>
            <div className="flex">
                {/* <Link 
                    className={`flex-initial h-[246px] w-[175px] bg-slate-500 ${(loading)?"animate-pulse":''}`}
                    to={`/watch/${arr[0].category}/${arr[0].id}`}
                >
                    <img
                        // src={resize(m.imageUrl)}
                        // src={m.imageUrl}
                        // src={`${sinfo(m.id)}`}
                        src={movie.coverVerticalUrl}
                        className="block w-full opacity-100"
                        alt="banner phim"
                    />
                </Link> */}
                <div className="flex-1 ml-16">
                    <p className="mb-7 text-5xl">
                        {movie.name}
                    </p>
                    <div className="h-14 overflow-hidden text-ellipsis">
                        <p className="text-lg">
                            {movie.introduction}
                        </p>
                    </div>
                    {/* <div className="flex">
                        {
                            (loading)?
                                movie.tagNameList.map(m=>(
                                    <div className="mt-3 ml-3 rounded-xl pl-2 pr-2 bg-slate-700">
                                        {m}
                                    </div>
                                )):''
                        }
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default ChildBanner;