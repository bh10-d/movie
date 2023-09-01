import React, { useState, useEffect } from "react";
// import './homepage.styles.css';
import Banner from '../../components/banner/banner.component';
// import Sidebar from '../../components/sidebar/sidebar.component';
import PreviewList from '../../components/previewlist/previewlist.component';
// import Search from '../../components/search/search.component';
// import Loading from '../../components/loading/loading.component';
// import InfiniteScroll from "react-infinite-scroll-component";
import {AppContext} from '../../context/AppProvider';


const HomePage = () => {
    const {BASE_URL, CONFIG, page, setPage, datafilm, setDataFilm} = React.useContext(AppContext)
    const [loading,setLoading] = useState(true);
    useEffect(() => {
      getData();
    });

    const getData = () =>{
      // fetch(`https://ga-mobile-api.loklok.tv/cms/app/homePage/getHome?page=${page}`, {
      //   method: 'GET',
      //   headers: {
      //     'Content-type': 'application/json;charset=UTF-8',
      //     'lang': 'en',
      //     'versioncode': '11',
      //     'clienttype': 'ios_jike_default'
      //   }
      // }).then(res => res.json())
      //   .then(d => {
      //     if(datafilm.length != 0){
      //       setDataFilm(prev=>[...prev,d.data.recommendItems]);
      //     }else{
      //       setDataFilm(d.data.recommendItems);
      //     }
      //     setLoading(d.length == 0)
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   })
      //   // console.log('run get data')

      const url = BASE_URL+'trending/movie/week?language=vi';
        try {
          const response = fetch(url, CONFIG);
          response.then(res => res.json())
          .then(d=>{
            if(datafilm.length != 0){
              setDataFilm(d.results)
              // console.log(d.results);
              // setDataFilm(prev=>[...prev,d.data.recommendItems]);
            }else{
              setDataFilm(d => [...d, d.results]);
            }
            setLoading(d.length == 0)
            // console.log(d)
          });
        } catch (error) {
          console.error(error);
        }
      }
    // console.log('check data result: ', [].concat.apply([], datafilm))

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