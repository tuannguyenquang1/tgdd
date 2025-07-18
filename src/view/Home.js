import React from "react";

import Menubar from './Menubar/Menubar';
import BigBanner from './BigBanner/BigBanner';
import HotPromotion from './HotPromotion/HotPromotion';
import SliderBanner from './SliderBanner/SliderBanner';
import DailyRecommended from './DailyRecommended/DailyRecommended';
import Monopoly from './Monopoly/Monopoly';
import BannerBrandWeek from './BannerBrandWeek/BannerBrandWeek';
import BannerOffers from './BannerOffer/BannerOffers';
import NewsHome from './NewsHome/NewsHome';
import SearchTrend from './SearchTrend/SearchTrend';

function Home(){
    return(
        <div>
            <Menubar/>
            <BigBanner/>
            <HotPromotion/>
            <SliderBanner/>
            <DailyRecommended/>
            <Monopoly/>
            <BannerBrandWeek/>
            <BannerOffers/>
            <NewsHome/>
            <SearchTrend/>
        </div>
    )
}
export default Home;