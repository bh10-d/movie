import React, { useState, useEffect } from "react";
import './homepage.styles.css';
import Banner from '../../components/banner/banner.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import PreviewList from '../../components/previewlist/previewlist.component';
import Search from '../../components/search/search.component'
const HomePage = ({data}) => {

    // const [preview, setPreview] = useState(data);
    // const [loading, setLoading] = useState(false);

    // let baseUrl3 = 'https://ga-mobile-api.loklok.tv/cms/app/homePage/getHome?page=0' // homepage
    // useEffect(() => {
    //     fetch('https://ga-mobile-api.loklok.tv/cms/app/homePage/getHome?page=0', {
    //         method: 'GET',
    //         headers: {
    //             'Content-type': 'application/json;charset=UTF-8',
    //             'lang': 'en',
    //             'versioncode': '11',
    //             'clienttype': 'ios_jike_default'
    //         }
    //     }).then(res => res.json())
    //         .then(d => {
    //             setPreview(d.data.recommendItems);
    //             console.log(d.data.recommendItems);
    //         })
    //         .catch(err => console.log(err))
    //         .finally(() => setLoading(false));
    // }, []);


    // if (loading) {
    //     return <p>Data is loading...</p>;
    // }

    // const [fetch,setFetch] = useState([]);

    // useEffect(() => {
    //     // console.log(typeof(data));
    //     setFetch(data);
    // },[data])

    return (
        <div className="home-section">
            <div className="homepage_block">
                <div className="homepage_block_e">
                    {/* <div className="banner">
                        <Banner />
                    </div> */}
                    <div className="preview_list">
                        <PreviewList data={data} />
                    </div>
                </div>
                <Search/>
            </div>
        </div>
    )
}

export default HomePage;