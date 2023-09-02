import React from "react";
import { useState, useEffect, memo } from 'react';
import '../banner/banner.styles.css';
import HotBanner from '../../directory/banner/element.component';
import Loading from '../loading/loading.component';

const Banner = ({ data }) => {
    const [banner, setBanner] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        if (data != '') {
            setLoading(false);
            setBanner(data);
        }
    }, [data]);

    if (loading) {
        return <Loading typeLoading="banner" />
    }

    // const extract = banner.filter((f, i) => f.homeSectionType == 'BANNER');//.map((m,ii)=>{return m.homeSectionName});

    console.log(data);

    return (
        <div>
            <HotBanner data={data}/>
        </div>
    )
}

export default memo(Banner);