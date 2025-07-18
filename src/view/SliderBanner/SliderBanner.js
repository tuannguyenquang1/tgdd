import React from "react";
import './SliderBanner.scss';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import banner1 from '../asset/image/banner/home_banner_1.png';
import banner2 from '../asset/image/banner/home_banner_2.png';
import banner3 from '../asset/image/banner/home_banner_3.png';
import banner4 from '../asset/image/banner/home_banner_4.png';
import banner5 from '../asset/image/banner/home_banner_5.png'

class SliderBanner extends React.Component{
    render(){
        var settings = {
                        dots: false,
                        infinite: true,
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        autoplay: true,
                        autoplaySpeed: 2000,
                        pauseOnHover: true
                    };
        return(
            <div className="slider-banner-container">
                <Slider {...settings}>
                    <div>
                        <a href="#">
                            <img src={banner1}/>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <img src={banner2}/>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <img src={banner3}/>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <img src={banner4}/>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <img src={banner5}/>
                        </a>
                    </div>
                </Slider>
            </div>
        )
    }
}
export default SliderBanner;