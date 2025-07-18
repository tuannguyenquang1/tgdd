import React from "react";
import './BannerBrandWeek.scss'

import bannerweek from '../asset/image/banner/banner_week.png';

class BannerBrandWeek extends React.Component{
    render(){
        return(
            <div className="banner-brand">
            <h3>Khai xuân khuyến mãi</h3>
                <a>
                    <img src={bannerweek}/>
                </a>
            </div>
        )
    }
}
export default BannerBrandWeek;