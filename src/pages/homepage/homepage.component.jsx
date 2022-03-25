import React, { useState, useEffect } from "react";
import './homepage.styles.css';
import Banner from '../../components/banner/banner.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import PreviewList from '../../components/previewlist/previewlist.component';
import Search from '../../components/search/search.component';



const HomePage = ({data}) => {
    return (
        <div className="home-section">
            <div className="homepage_block">
                <div className="homepage_block_e">
                    <div className="banner">
                        <Banner data={data} />
                    </div>
                    <div className="preview_list">
                        <PreviewList data={data} />
                    </div>
                </div>
                <div>
                    <Search/>
                    <div style={{marginLeft:'10px'}}>
                        <Sidebar/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;