import React from "react";


const HotBanner = ({extract}) => {
    
    return (
        <>
            <div className="carousel-inner relative w-full overflow-hidden">
                    {extract[1].recommendContentVOList.filter((f,i)=>f.title != '' && f.title != 'Sound Track 1').map((m,i)=>(
                        <div key={i} className={(i==0)?'carousel-item relative float-left w-full bannerr active':'carousel-item relative float-left w-full bannerr'}>
                            <img
                                src={`${m.imageUrl}`}
                                className="block"
                                alt="Motorbike Smoke"
                            />
                            <div className="carousel-caption hidden md:block absolute text-left">
                                <h5 className="text-4xl">{m.title}</h5>
                            </div>
                        </div>
                    ))}
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


export default HotBanner;