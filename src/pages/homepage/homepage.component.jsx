import React from "react";
import './homepage.styles.css';
import Banner from '../../components/banner/banner.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import PreviewList from '../../components/previewlist/previewlist.component';

const HomePage = () => {


    return (
        <div className="homepage">
            <div className="homepage_block flex flex-row">
                <div className="homepage_block_e basis-9/12 md:basis-9/12">
                    <div className="banner">
                        <Banner />
                    </div>
                    <div className="preview_list">
                        <PreviewList />
                    </div>
                </div>
                <Sidebar />
            </div>
        </div>
    )
}

export default HomePage;