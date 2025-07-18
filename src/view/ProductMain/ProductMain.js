import React from "react";
import './ProductMain.scss';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaChevronRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { LuCirclePlus } from "react-icons/lu";
import { AiFillLike } from "react-icons/ai";

const ip15Images = [
  "/images/ip15/iphone-15-pro-max-thumb-youtube.jpg",
  "/images/ip15/iphone-15-pro-max-2.jpg",
  "/images/ip15/iphone-15-pro-max-3.jpg",
  "/images/ip15/iphone-15-pro-max-4.jpg",
  "/images/ip15/iphone-15-pro-max-5.jpg",
  "/images/ip15/iphone-15-pro-max-6.jpg",
  "/images/ip15/iphone-15-pro-max-7.jpg",
  "/images/ip15/iphone-15-pro-max-8.jpg",
  "/images/ip15/iphone-15-pro-max-9.jpg",
  "/images/ip15/iphone-15-pro-max-10.jpg",
  "/images/ip15/iphone-15-pro-max-11.jpg",
  "/images/ip15/iphone-15-pro-max-black-slider-2.jpg",
  "/images/ip15/iphone-15-pro-max-slider-3.jpg",
  "/images/ip15/iphone-15-pro-max-slider-4.jpg",
  "/images/ip15/iphone-15-pro-max-slider-5.jpg"
];

const products=[
    {
        name: "iPhone 15 Pro Max 1TB",
        url: "https://www.thegioididong.com/dtdd/iphone-15-pro-max-1tb",
        image: "https://cdn.tgdd.vn/Products/Images/42/305660/iphone-15-pro-max-blue-thumbnew-600x600.jpg",
        price: 38190000,
        brand: "iPhone (Apple)",
        rating: 4.9,
        reviewCount: 3898,
        os: "iOS 17",
        chip: "Apple A17 Pro 6 nhân",
        cpuSpeed: "3.78 GHz",
        gpu: "Apple GPU 6 nhân",
        ram: "8 GB",
        storage: "1 TB",
        storageAvailable: "1009 GB",
        screen: {
            size: "6.7\"",
            type: "OLED",
            resolution: "Super Retina XDR (1290 x 2796 Pixels)",
            refreshRate: "120 Hz",
            brightness: "2000 nits"
        },
            rearCamera: "Chính 48 MP & Phụ 12 MP, 12 MP",
            frontCamera: "12 MP",
            video: "HD 720p@30fps",
            battery: {
            capacity: "4422 mAh",
            type: "Li-Ion",
            charge: "20 W",
            tech: "Tiết kiệm pin"
        },
            sim: "1 Nano SIM & 1 eSIM",
            connection: {
            port: "Type-C",
            wifi: "Wi-Fi MIMO",
            bluetooth: "v5.3",
            gps: "QZSS",
            network: "Hỗ trợ 5G",
            nfc: "Có"
        },
            design: {
            material: "Khung Titan & Mặt lưng kính cường lực",
            dimension: "Dài 159.9 mm - Ngang 76.7 mm - Dày 8.25 mm - Nặng 221 g",
            glass: "Kính cường lực Ceramic Shield",
            waterResistant: "IP68"
        },
        features: {
            faceID: true,
            dolby: true,
            special: "Âm thanh Dolby Atmos"
        }
    }
]

class ProductMain extends React.Component{
    
    render(){
        const settingsMain = {
            dots: true,
            dotsClass: "slick-dots slick-thumb",
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true
        };
        return(
            products.map((product,index)=>{
                return(
                    <div className="product-main">
                        <div className="breadcrumb">
                            <ul>
                                <li>
                                    <a href="#">Điện thoại</a>
                                </li>
                                <li>
                                    <span><FaChevronRight /></span>
                                    <a href="#">Điện thoại {product.brand}</a>
                                </li>
                            </ul>
                        </div>
                        <div className="product-name">
                            <h1>Điện thoại {product.name}</h1>
                            <div className="box">
                                <span>Đã bán {product.reviewCount}</span>
                                <div className="box-left">
                                    <div className="detail-rate">
                                        <FaStar />
                                        <p>
                                            {product.rating}
                                        </p>
                                    </div>
                                    <a href="#">
                                        <TfiRulerAlt2 />
                                        Thông số
                                    </a>
                                </div>
                                <div className="box-right">
                                    <LuCirclePlus />
                                    So sánh
                                </div>
                            </div>
                            <div className="like-page">
                                <div className="btn btn-like">
                                    <a href="#">
                                        <span>
                                            <AiFillLike />
                                        </span>
                                        
                                        <span>
                                            Thích
                                        </span>
                                    </a>
                                </div>
                                <div className="btn btn-share">
                                    <a href="#">
                                        <span>
                                            Chia sẻ
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="box-main">
                            <div className="boxmain-left">
                                <div className="slider-detail">
                                    <Slider {...settingsMain}>
                                        {
                                            ip15Images.map((img,index)=>(
                                                <div className="item-img" key={index}>
                                                    <img 
                                                        src={img} 
                                                        alt={`slide-${index}`}
                                                    />
                                                </div>
                                            ))
                                        }
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }))
        
    }
}

export default ProductMain;