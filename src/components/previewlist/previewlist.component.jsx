import { useState, useEffect, memo, useContext } from "react";
import { Link } from "react-router-dom";
import {AppContext} from '../../context/AppProvider';
/*slider */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Loading from '../loading/loading.component';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
//my styles
// import './previewlist.styles.css';


const PreviewList = ({data}) => {
    const {history, setHistory} = useContext(AppContext);
    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setLoading(true);
        if (data != '') {
            setLoading(false);
            setInfo(data);
        }
    }, [data]);

    const handleClick = (url) => {
        setHistory(prev=>{
            const newJobs = [...prev,url]
            const jsonJobs = JSON.stringify(removeduplicates(newJobs.reverse()))
            localStorage.setItem('history',jsonJobs)
            // console.log(prev)
            return removeduplicates(newJobs.reverse())
        })
    }

    const removeduplicates = (arr) => {
        var uniq = {};
        var arrFiltered = arr.filter(obj => !uniq[obj.id] && (uniq[obj.id] = true));
        return arrFiltered;
    }

    // const extract = info.filter((f, i) => i > 1 && i < 8 && f.homeSectionName != "LOKLOK Charts" && f.homeSectionName != "K-Stars" && f.homeSectionType != "BLOCK_GROUP");
    const extract = info.filter((f, i) => f.homeSectionName != '' && f.homeSectionName != "LOKLOK Charts" && f.homeSectionName != "K-Stars" && f.homeSectionType != "BLOCK_GROUP");

    const resize = (url)=>{
        const newsize = `https://images.weserv.nl/?url=${url}&w=175&h=246`;
        return newsize;
    }

    if (loading) {
        return <Loading typeLoading="list"/>;
    }

    return (
        <>
            {extract.map((m, i) => (
                <div key={i} className="mt-5">
                    <h2 className="text-[25px] font-bold">{m.homeSectionName}</h2>
                    <div className="plist mt-2">
                        <Swiper
                            modules={[Navigation]}
                            slidesPerView='auto'
                            slidesPerGroupAuto
                            navigation
                            spaceBetween={49}
                        >
                            {
                                m.recommendContentVOList.map(mm => (
                                    <div key={mm.id} className="pmovie">
                                        <SwiperSlide
                                            style={{
                                                width: '200px'
                                            }}
                                            key={mm.id}
                                        >
                                            <Link 
                                                to={`/watch/${mm.category}/${mm.id}`} 
                                                onClick={()=>{
                                                    handleClick({title: mm.title, imageUrl: mm.imageUrl, category: mm.category, id: mm.id})
                                                }}
                                            >
                                                <div className="block_item-movie hover:text-zinc-500">
                                                    <LazyLoadImage
                                                        className="transition duration-700 object-cover h-[295px] w-[225px]"
                                                        alt={mm.title}
                                                        src={resize(mm.imageUrl)}
                                                        effect="opacity"
                                                        delayTime={500}
                                                        visibleByDefault={mm.imageUrl === '/landscape.jpg'}
                                                        
                                                    />
                                                    <h1  className="text-ellipsis overflow-hidden">{mm.title}</h1>
                                                </div>
                                            </Link>
                                        </SwiperSlide>
                                    </div>)
                                )
                            }
                        </Swiper>
                    </div>
                </div>
            ))}
        </>
    )
}

export default memo(PreviewList); // co ve co nhu khong (kien thuc chua chac note hoc lai)