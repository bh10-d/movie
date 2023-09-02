import { useState, useEffect, useContext } from "react";
// import './homepage.styles.css';
import Banner from '../../components/banner/banner.component';
// import Sidebar from '../../components/sidebar/sidebar.component';
import PreviewList from '../../components/previewlist/previewlist.component';
// import Search from '../../components/search/search.component';
// import Loading from '../../components/loading/loading.component';
// import InfiniteScroll from "react-infinite-scroll-component";
import {AppContext} from '../../context/AppProvider';


const HomePage = () => {
    const {BASE_URL, CONFIG, datafilm, setDataFilm} = useContext(AppContext)
    const [loading,setLoading] = useState(false);

    useEffect(() => {
      console.log("data has been called");
      const url = BASE_URL+'trending/movie/week?language=vi';
        try {
          const response = fetch(url, CONFIG);
          response.then(res => res.json())
          .then(d=>{
            if(datafilm.length != 0){
              setDataFilm(d.results)
              console.log(d.results);
              // setDataFilm(prev=>[...prev,d.data.recommendItems]);
            }else{
              setDataFilm(d => [...d, d.results]);
            }
            setLoading(datafilm == 0)
            console.log(datafilm)
          });
        } catch (error) {
          console.error(error);
        }
    },[loading]);
      console.log('fetch')

    return (
        <div>
            <Banner data={datafilm}/>
            <div id="list" className="md:container">
                <div className="homepage_block_e">
                    <div className="banner">
                    </div>
                    <div className="preview_list">
                        {/* <InfiniteScroll
                          dataLength={[].concat.apply([], datafilm).length || 0}
                          next={() => setPage((prev) => prev + 1)}
                          hasMore={true}
                          loader={(loading)?<Loading typeLoading="list"/>:''}
                          scrollableTarget="scrollableDiv"
                        >
                          <PreviewList data={[].concat.apply([], datafilm)}/>
                        </InfiniteScroll> */}
                          {/* <PreviewList data={[].concat.apply([], datafilm)}/> */}

                        <PreviewList data={datafilm}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;