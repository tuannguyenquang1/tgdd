import React from "react";
import './BannerOffers.scss'

import banneroffer1 from '../asset/image/banner/banner_offer_1.png'
import banneroffer2 from '../asset/image/banner/banner_offer_2.png'
import banneroffer3 from '../asset/image/banner/banner_offer_3.png'
import banneroffer4 from '../asset/image/banner/banner_offer_4.png'

class BannerOffers extends React.Component{
    render(){
        return(
            <div className="banner-offers">
                <h3>Gian hàng ưu đãi</h3>
                <div className="box-banner-offers">
                    <div className="banner-offer-item">
                        <img src={banneroffer1}/>
                    </div>
                    <div className="banner-offer-item">
                        <img src={banneroffer2}/>
                    </div>
                    <div className="banner-offer-item">
                        <img src={banneroffer3}/>
                    </div>
                    <div className="banner-offer-item">
                        <img src={banneroffer4}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default BannerOffers;