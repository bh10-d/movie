import {React, useState, useEffect, memo} from "react";
import ChildBanner from "../banner/image.component";

const HotBanner = ({extract}) => {

    // const [movie, setMovie] = useState('');
    // const [url, setUrl] = useState('');
    // const [ob, setOb] = useState([]);
    // const [test, setTest] = useState(
    //     {
    //         start: 0,
    //         end: 0
    //     }
    // );
    // // const resize = (url)=>{
    // //     const newsize = `https://images.weserv.nl/?url=${url}&w=175&h=246`;
    // //     // console.log(newsize);
    // //     return newsize;
    // // }

    // // let arr = [];
    // const sinfo = (src)=>{
    //     let test = extract[0].recommendContentVOList.filter(f=>f.id == src)
    //     // console.log(test[0].jumpAddress)
    //     let start = test[0].jumpAddress.search("=");
    //     let end = test[0].jumpAddress.search("&");
    //         // setOb({
    //         //     id: test[0].jumpAddress.slice(start+1,end),
    //         //     category: test[0].jumpAddress.slice(end+6,test[0].jumpAddress.length)
    //         // })
    //     setTest({
    //         start: start,
    //         end: end
    //     })
    // }
    // useEffect(()=>{

    //     setOb({
    //         // id: test[0].jumpAddress.slice(start+1,end),
    //         // category: test[0].jumpAddress.slice(end+6,test[0].jumpAddress.length)
    //         id: 1,
    //         category: 1
    //     })

    // },[])

    // console.log("render")

    return (
        <>
            <div className="carousel-inner relative w-full overflow-hidden">
                    {extract.map(m=>m.recommendContentVOList.filter((f,i)=>f.title != '' && f.title != 'Sound Track 1' && f.title != 'Invite friends get prizes ~').map((m,i)=>(
                        <div key={i} className={(i==0)?'carousel-item relative float-left w-full bannerr active':'carousel-item relative float-left w-full bannerr'}>
                            <img
                                // src={resize(m.imageUrl)}
                                // src={m.imageUrl}
                                src={m.imageUrl}
                                className="block w-full opacity-50"
                                alt="background film"
                            />
                            {/* <video className="w-full z-50" muted autoPlay>
                                <source src="/test.mp4" />
                            </video> */}
                            {/* <div className="absolute md:block">
                                <h5>ashdkjsd</h5>
                            </div> */}
                            <div className="carousel-caption hidden md:block absolute w-1/2 text-left xl:top-2/3 sm:top-2/3">
                                {/* <h5 className="text-4xl">{m.title}</h5> */}
                                {/* <div className="flex">
                                    <a 
                                        className="flex-initial h-[246\px] w-[175px] bg-slate-500 animate-pulse"
                                        href=""
                                    
                                    >
                                        <img
                                            // src={resize(m.imageUrl)}
                                            // src={m.imageUrl}
                                            // src={`${sinfo(m.id)}`}
                                            src={`${sinfo(224971)}`}
                                            className="block w-full opacity-50"
                                            alt="background film"
                                        />
                                        <Image src={m.id} presrc={m.jumpAddress}/>
                                    </a>
                                    <div
                                        className="flex-1 ml-16"
                                    >
                                        <p className="mb-7 text-5xl">
                                            {m.title}
                                        </p>
                                        <p className="text-lg">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus facilis quidem laudantium earum repellendus facere eveniet similique quisquam, inventore labore velit ipsam fugit. Consectetur eum commodi dolore aperiam facilis voluptates.
                                        </p>
                                    </div>
                                </div> */}
                                {/* <video className="w-full" controls>
                                    <source src="/test.mp4" />
                                </video> */}

                                <ChildBanner src={m.id} presrc={m.jumpAddress}/>
                            </div>
                        </div>
                    )))}
                    {/* <div key="1" className="carousel-item active relative float-left w-full bannerr">
                        <img
                            src={`${extract[1].recommendContentVOList[4].imageUrl}`}
                            className="block"
                            alt="Motorbike Smoke"
                        />
                        <div className="carousel-caption hidden md:block absolute text-left">
                            <h5 className="text-4xl">{extract[1].recommendContentVOList[4].title}</h5>
                        </div>
                    </div>

                    <div key="2" className="carousel-item relative float-left w-full bannerr">
                        <img
                            src={`${extract[1].recommendContentVOList[4].imageUrl}`}
                            className="block"
                            alt="Mountaintop"
                        />
                        <div className="carousel-caption hidden md:block absolute text-left">
                            <h5 className="text-4xl">{extract[1].recommendContentVOList[4].title}</h5>
                        </div>
                    </div>

                    <div key="3" className="carousel-item relative float-left w-full bannerr">
                        <img
                            src={`${extract[1].recommendContentVOList[4].imageUrl}`}
                            className="block"
                            alt="Woman Reading a Book"
                        />
                        <div className="carousel-caption hidden md:block absolute text-left">
                            <h5 className="text-4xl">{extract[1].recommendContentVOList[4].title}</h5>
                        </div>
                    </div> */}
                </div>
        </>
    )


}


export default memo(HotBanner);