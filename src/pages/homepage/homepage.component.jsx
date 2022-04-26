import React, { useState, useEffect } from "react";
// import './homepage.styles.css';
import Banner from '../../components/banner/banner.component';
// import Sidebar from '../../components/sidebar/sidebar.component';
import PreviewList from '../../components/previewlist/previewlist.component';
import Search from '../../components/search/search.component';



const HomePage = () => {




    const [preview, setPreview] = useState([]);
    // // const [loading, setLoading] = useState(false);//false
    const [progress,setProgress] = useState(false);
  
  
    const list = [
      "https://ga-mobile-api.loklok.tv/cms/app/homePage/getHome?page=0",
    //   "https://ga-mobile-api.loklok.tv/cms/app/homePage/getHome?page=1"
    ]
  
  
    useEffect(() => {
      fetch(`${list[0]}`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json;charset=UTF-8',
          'lang': 'en',
          'versioncode': '11',
          'clienttype': 'ios_jike_default'
        }
      }).then(res => res.json())
        .then(d => {
          console.log(d)
          setPreview(d.data.recommendItems);
          // console.log(d.data.recommendItems);
        })
        .catch(err => {
          setProgress(true);
          console.log(err);
        })
        // .finally(() => setLoading(false));
    }, [progress]);



    return (
        // <div className="home-section">
        //     <div className="homepage_block">
        //         <div className="homepage_block_e">
        //             <div className="banner">
        //                 <Banner data={preview}/>
        //             </div>
        //             <div className="preview_list">
        //                 <PreviewList data={preview}/>
        //             </div>
        //         </div>
        //         <div>
        //             {/* <Search/> */}
        //             {/* <div style={{marginLeft:'10px'}}>
        //                 <Sidebar/>
        //             </div> */}
        //         </div>
        //     </div>
        // </div>
        <div className="">
            <Banner data={preview}/>
            <div className="md:container">
                <div className="homepage_block_e">
                    <div className="banner">
                        {/* <Banner data={preview}/> */}
                    </div>
                    <div className="preview_list">
                        <PreviewList data={preview}/>
                    </div>
                </div>
                <div>
                    <Search/>
                    {/* <div style={{marginLeft:'10px'}}>
                        <Sidebar/>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default HomePage;