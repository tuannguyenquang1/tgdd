import React from "react";
import './HotPromotion.scss';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import flashsale from '../asset/image/icon/flash_sale.png';
import dacquyensale from '../asset/image/icon/dacquyen_sale.png';
import onlineonly from '../asset/image/icon/onlineonly_sale.png';
import itemimg from '../asset/image/item_img/xiaomi-redmi-note-13.jpg';
import flashsaleicon from '../asset/image/icon/flash-sale_icon.png';

class HotPromotion extends React.Component{
    render(){
        const settings = {
            dots: false,
            infinite: false,
            speed: 1000,
            slidesToShow: 6,
            slidesToScroll: 6,
            nextArrow: <IoIosArrowForward />,
            prevArrow: <IoIosArrowBack/>
        };
        return(
            <div className="hot-promotion">
                <div className="hot-promotion-container">
                    <h3>Khuyến mãi Online</h3>
                    <ul>
                        <li>
                            <a href="#">
                                <img src={flashsale}/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={dacquyensale}/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={onlineonly}/>
                            </a>
                        </li>
                        <li class="item-hot-promotion">
                            <a href="">Điện Thoại</a>
                        </li>
                        <li class="item-hot-promotion">
                            <a href="">Apple</a>
                        </li>
                        <li class="item-hot-promotion">
                            <a href="">Laptop</a>
                        </li>
                        <li class="item-hot-promotion">
                            <a href="">Phụ Kiện</a>
                        </li>
                        <li class="item-hot-promotion">
                            <a href="">Đồng Hồ</a>
                        </li>
                    </ul>
                </div>
                <div className="block-products">
                    <div className="block-products-container">
                        <div class="timeline-title">
                            <span>Chỉ còn: 00 : 22 : 02</span>
                        </div>
                        <div className="slider-container">
                            <Slider {...settings}>
                                <div className="slide">
                                    <div className="block-product-list">
                                        <div className="block-product-item">
                                                <a href="#">
                                                    <div className="item-img">
                                                        <img src={itemimg}/>
                                                    </div>
                                                    <h3>Xiaomi Redmi Note 13 8GB/128GB</h3>
                                                    <strong className="item-price">
                                                        <p>9.990.000₫</p>
                                                        <span className="price-and-discount">
                                                            <label className="price-old">10.000.000₫</label>
                                                            <small>-16%</small>
                                                        </span>
                                                    </strong>
                                                    <div className="block-product-contain">
                                                        <img src={flashsaleicon}/>
                                                        <span>
                                                            Còn 50/50 suất
                                                        </span>
                                                    </div>
                                                    <div className="btn-buy">
                                                        <a href="">
                                                            <span>
                                                                Mua ngay
                                                            </span>
                                                        </a>
                                                    </div>
                                                </a>
                                            </div>
                                        <div className="block-product-item">
                                                <a href="#">
                                                    <div className="item-img">
                                                        <img src={itemimg}/>
                                                    </div>
                                                    <h3>Xiaomi Redmi Note 13 8GB/128GB</h3>
                                                    <strong className="item-price">
                                                        <p>9.990.000₫</p>
                                                        <span className="price-and-discount">
                                                            <label className="price-old">10.000.000₫</label>
                                                            <small>-16%</small>
                                                        </span>
                                                    </strong>
                                                    <div className="block-product-contain">
                                                        <img src={flashsaleicon}/>
                                                        <span>
                                                            Còn 50/50 suất
                                                        </span>
                                                    </div>
                                                    <div className="btn-buy">
                                                        <a href="">
                                                            <span>
                                                                Mua ngay
                                                            </span>
                                                        </a>
                                                    </div>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                                <div className="slide">
                                    <div className="block-product-list">
                                        <div className="block-product-item">
                                                <a href="#">
                                                    <div className="item-img">
                                                        <img src={itemimg}/>
                                                    </div>
                                                    <h3>Xiaomi Redmi Note 13 8GB/128GB</h3>
                                                    <strong className="item-price">
                                                        <p>9.990.000₫</p>
                                                        <span className="price-and-discount">
                                                            <label className="price-old">10.000.000₫</label>
                                                            <small>-16%</small>
                                                        </span>
                                                    </strong>
                                                    <div className="block-product-contain">
                                                        <img src={flashsaleicon}/>
                                                        <span>
                                                            Còn 50/50 suất
                                                        </span>
                                                    </div>
                                                    <div className="btn-buy">
                                                        <a href="">
                                                            <span>
                                                                Mua ngay
                                                            </span>
                                                        </a>
                                                    </div>
                                                </a>
                                            </div>
                                        <div className="block-product-item">
                                                <a href="#">
                                                    <div className="item-img">
                                                        <img src={itemimg}/>
                                                    </div>
                                                    <h3>Xiaomi Redmi Note 13 8GB/128GB</h3>
                                                    <strong className="item-price">
                                                        <p>9.990.000₫</p>
                                                        <span className="price-and-discount">
                                                            <label className="price-old">10.000.000₫</label>
                                                            <small>-16%</small>
                                                        </span>
                                                    </strong>
                                                    <div className="block-product-contain">
                                                        <img src={flashsaleicon}/>
                                                        <span>
                                                            Còn 50/50 suất
                                                        </span>
                                                    </div>
                                                    <div className="btn-buy">
                                                        <a href="">
                                                            <span>
                                                                Mua ngay
                                                            </span>
                                                        </a>
                                                    </div>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                                <div className="slide">
                                    <div className="block-product-list">
                                        <div className="block-product-item">
                                                <a href="#">
                                                    <div className="item-img">
                                                        <img src={itemimg}/>
                                                    </div>
                                                    <h3>Xiaomi Redmi Note 13 8GB/128GB</h3>
                                                    <strong className="item-price">
                                                        <p>9.990.000₫</p>
                                                        <span className="price-and-discount">
                                                            <label className="price-old">10.000.000₫</label>
                                                            <small>-16%</small>
                                                        </span>
                                                    </strong>
                                                    <div className="block-product-contain">
                                                        <img src={flashsaleicon}/>
                                                        <span>
                                                            Còn 50/50 suất
                                                        </span>
                                                    </div>
                                                    <div className="btn-buy">
                                                        <a href="">
                                                            <span>
                                                                Mua ngay
                                                            </span>
                                                        </a>
                                                    </div>
                                                </a>
                                            </div>
                                        <div className="block-product-item">
                                                <a href="#">
                                                    <div className="item-img">
                                                        <img src={itemimg}/>
                                                    </div>
                                                    <h3>Xiaomi Redmi Note 13 8GB/128GB</h3>
                                                    <strong className="item-price">
                                                        <p>9.990.000₫</p>
                                                        <span className="price-and-discount">
                                                            <label className="price-old">10.000.000₫</label>
                                                            <small>-16%</small>
                                                        </span>
                                                    </strong>
                                                    <div className="block-product-contain">
                                                        <img src={flashsaleicon}/>
                                                        <span>
                                                            Còn 50/50 suất
                                                        </span>
                                                    </div>
                                                    <div className="btn-buy">
                                                        <a href="">
                                                            <span>
                                                                Mua ngay
                                                            </span>
                                                        </a>
                                                    </div>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                                <div className="slide">
                                    <div className="block-product-list">
                                        <div className="block-product-item">
                                                <a href="#">
                                                    <div className="item-img">
                                                        <img src={itemimg}/>
                                                    </div>
                                                    <h3>Xiaomi Redmi Note 13 8GB/128GB</h3>
                                                    <strong className="item-price">
                                                        <p>9.990.000₫</p>
                                                        <span className="price-and-discount">
                                                            <label className="price-old">10.000.000₫</label>
                                                            <small>-16%</small>
                                                        </span>
                                                    </strong>
                                                    <div className="block-product-contain">
                                                        <img src={flashsaleicon}/>
                                                        <span>
                                                            Còn 50/50 suất
                                                        </span>
                                                    </div>
                                                    <div className="btn-buy">
                                                        <a href="">
                                                            <span>
                                                                Mua ngay
                                                            </span>
                                                        </a>
                                                    </div>
                                                </a>
                                            </div>
                                        <div className="block-product-item">
                                                <a href="#">
                                                    <div className="item-img">
                                                        <img src={itemimg}/>
                                                    </div>
                                                    <h3>Xiaomi Redmi Note 13 8GB/128GB</h3>
                                                    <strong className="item-price">
                                                        <p>9.990.000₫</p>
                                                        <span className="price-and-discount">
                                                            <label className="price-old">10.000.000₫</label>
                                                            <small>-16%</small>
                                                        </span>
                                                    </strong>
                                                    <div className="block-product-contain">
                                                        <img src={flashsaleicon}/>
                                                        <span>
                                                            Còn 50/50 suất
                                                        </span>
                                                    </div>
                                                    <div className="btn-buy">
                                                        <a href="">
                                                            <span>
                                                                Mua ngay
                                                            </span>
                                                        </a>
                                                    </div>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                                <div className="slide">
                                    <div className="block-product-list">
                                        <div className="block-product-item">
                                                <a href="#">
                                                    <div className="item-img">
                                                        <img src={itemimg}/>
                                                    </div>
                                                    <h3>Xiaomi Redmi Note 13 8GB/128GB</h3>
                                                    <strong className="item-price">
                                                        <p>9.990.000₫</p>
                                                        <span className="price-and-discount">
                                                            <label className="price-old">10.000.000₫</label>
                                                            <small>-16%</small>
                                                        </span>
                                                    </strong>
                                                    <div className="block-product-contain">
                                                        <img src={flashsaleicon}/>
                                                        <span>
                                                            Còn 50/50 suất
                                                        </span>
                                                    </div>
                                                    <div className="btn-buy">
                                                        <a href="">
                                                            <span>
                                                                Mua ngay
                                                            </span>
                                                        </a>
                                                    </div>
                                                </a>
                                            </div>
                                        <div className="block-product-item">
                                                <a href="#">
                                                    <div className="item-img">
                                                        <img src={itemimg}/>
                                                    </div>
                                                    <h3>Xiaomi Redmi Note 13 8GB/128GB</h3>
                                                    <strong className="item-price">
                                                        <p>9.990.000₫</p>
                                                        <span className="price-and-discount">
                                                            <label className="price-old">10.000.000₫</label>
                                                            <small>-16%</small>
                                                        </span>
                                                    </strong>
                                                    <div className="block-product-contain">
                                                        <img src={flashsaleicon}/>
                                                        <span>
                                                            Còn 50/50 suất
                                                        </span>
                                                    </div>
                                                    <div className="btn-buy">
                                                        <a href="">
                                                            <span>
                                                                Mua ngay
                                                            </span>
                                                        </a>
                                                    </div>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                                <div className="slide">
                                    <div className="block-product-list">
                                        <div className="block-product-item">
                                                <a href="#">
                                                    <div className="item-img">
                                                        <img src={itemimg}/>
                                                    </div>
                                                    <h3>Xiaomi Redmi Note 13 8GB/128GB</h3>
                                                    <strong className="item-price">
                                                        <p>9.990.000₫</p>
                                                        <span className="price-and-discount">
                                                            <label className="price-old">10.000.000₫</label>
                                                            <small>-16%</small>
                                                        </span>
                                                    </strong>
                                                    <div className="block-product-contain">
                                                        <img src={flashsaleicon}/>
                                                        <span>
                                                            Còn 50/50 suất
                                                        </span>
                                                    </div>
                                                    <div className="btn-buy">
                                                        <a href="">
                                                            <span>
                                                                Mua ngay
                                                            </span>
                                                        </a>
                                                    </div>
                                                </a>
                                            </div>
                                        <div className="block-product-item">
                                                <a href="#">
                                                    <div className="item-img">
                                                        <img src={itemimg}/>
                                                    </div>
                                                    <h3>Xiaomi Redmi Note 13 8GB/128GB</h3>
                                                    <strong className="item-price">
                                                        <p>9.990.000₫</p>
                                                        <span className="price-and-discount">
                                                            <label className="price-old">10.000.000₫</label>
                                                            <small>-16%</small>
                                                        </span>
                                                    </strong>
                                                    <div className="block-product-contain">
                                                        <img src={flashsaleicon}/>
                                                        <span>
                                                            Còn 50/50 suất
                                                        </span>
                                                    </div>
                                                    <div className="btn-buy">
                                                        <a href="">
                                                            <span>
                                                                Mua ngay
                                                            </span>
                                                        </a>
                                                    </div>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                                <div className="slide">
                                    <div className="block-product-list">
                                        <div className="block-product-item">
                                                <a href="#">
                                                    <div className="item-img">
                                                        <img src={itemimg}/>
                                                    </div>
                                                    <h3>Xiaomi Redmi Note 13 8GB/128GB</h3>
                                                    <strong className="item-price">
                                                        <p>9.990.000₫</p>
                                                        <span className="price-and-discount">
                                                            <label className="price-old">10.000.000₫</label>
                                                            <small>-16%</small>
                                                        </span>
                                                    </strong>
                                                    <div className="block-product-contain">
                                                        <img src={flashsaleicon}/>
                                                        <span>
                                                            Còn 50/50 suất
                                                        </span>
                                                    </div>
                                                    <div className="btn-buy">
                                                        <a href="">
                                                            <span>
                                                                Mua ngay
                                                            </span>
                                                        </a>
                                                    </div>
                                                </a>
                                            </div>
                                        <div className="block-product-item">
                                                <a href="#">
                                                    <div className="item-img">
                                                        <img src={itemimg}/>
                                                    </div>
                                                    <h3>Xiaomi Redmi Note 13 8GB/128GB</h3>
                                                    <strong className="item-price">
                                                        <p>9.990.000₫</p>
                                                        <span className="price-and-discount">
                                                            <label className="price-old">10.000.000₫</label>
                                                            <small>-16%</small>
                                                        </span>
                                                    </strong>
                                                    <div className="block-product-contain">
                                                        <img src={flashsaleicon}/>
                                                        <span>
                                                            Còn 50/50 suất
                                                        </span>
                                                    </div>
                                                    <div className="btn-buy">
                                                        <a href="">
                                                            <span>
                                                                Mua ngay
                                                            </span>
                                                        </a>
                                                    </div>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                                <div className="slide">
                                    <div className="block-product-list">
                                        <div className="block-product-item">
                                                <a href="#">
                                                    <div className="item-img">
                                                        <img src={itemimg}/>
                                                    </div>
                                                    <h3>Xiaomi Redmi Note 13 8GB/128GB</h3>
                                                    <strong className="item-price">
                                                        <p>9.990.000₫</p>
                                                        <span className="price-and-discount">
                                                            <label className="price-old">10.000.000₫</label>
                                                            <small>-16%</small>
                                                        </span>
                                                    </strong>
                                                    <div className="block-product-contain">
                                                        <img src={flashsaleicon}/>
                                                        <span>
                                                            Còn 50/50 suất
                                                        </span>
                                                    </div>
                                                    <div className="btn-buy">
                                                        <a href="">
                                                            <span>
                                                                Mua ngay
                                                            </span>
                                                        </a>
                                                    </div>
                                                </a>
                                            </div>
                                        <div className="block-product-item">
                                                <a href="#">
                                                    <div className="item-img">
                                                        <img src={itemimg}/>
                                                    </div>
                                                    <h3>Xiaomi Redmi Note 13 8GB/128GB</h3>
                                                    <strong className="item-price">
                                                        <p>9.990.000₫</p>
                                                        <span className="price-and-discount">
                                                            <label className="price-old">10.000.000₫</label>
                                                            <small>-16%</small>
                                                        </span>
                                                    </strong>
                                                    <div className="block-product-contain">
                                                        <img src={flashsaleicon}/>
                                                        <span>
                                                            Còn 50/50 suất
                                                        </span>
                                                    </div>
                                                    <div className="btn-buy">
                                                        <a href="">
                                                            <span>
                                                                Mua ngay
                                                            </span>
                                                        </a>
                                                    </div>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                                <div className="slide">
                                    <div className="block-product-list">
                                        <div className="block-product-item">
                                                <a href="#">
                                                    <div className="item-img">
                                                        <img src={itemimg}/>
                                                    </div>
                                                    <h3>Xiaomi Redmi Note 13 8GB/128GB</h3>
                                                    <strong className="item-price">
                                                        <p>9.990.000₫</p>
                                                        <span className="price-and-discount">
                                                            <label className="price-old">10.000.000₫</label>
                                                            <small>-16%</small>
                                                        </span>
                                                    </strong>
                                                    <div className="block-product-contain">
                                                        <img src={flashsaleicon}/>
                                                        <span>
                                                            Còn 50/50 suất
                                                        </span>
                                                    </div>
                                                    <div className="btn-buy">
                                                        <a href="">
                                                            <span>
                                                                Mua ngay
                                                            </span>
                                                        </a>
                                                    </div>
                                                </a>
                                            </div>
                                        <div className="block-product-item">
                                                <a href="#">
                                                    <div className="item-img">
                                                        <img src={itemimg}/>
                                                    </div>
                                                    <h3>Xiaomi Redmi Note 13 8GB/128GB</h3>
                                                    <strong className="item-price">
                                                        <p>9.990.000₫</p>
                                                        <span className="price-and-discount">
                                                            <label className="price-old">10.000.000₫</label>
                                                            <small>-16%</small>
                                                        </span>
                                                    </strong>
                                                    <div className="block-product-contain">
                                                        <img src={flashsaleicon}/>
                                                        <span>
                                                            Còn 50/50 suất
                                                        </span>
                                                    </div>
                                                    <div className="btn-buy">
                                                        <a href="">
                                                            <span>
                                                                Mua ngay
                                                            </span>
                                                        </a>
                                                    </div>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                                <div className="slide">
                                    <div className="block-product-list">
                                        <div className="block-product-item">
                                                <a href="#">
                                                    <div className="item-img">
                                                        <img src={itemimg}/>
                                                    </div>
                                                    <h3>Xiaomi Redmi Note 13 8GB/128GB</h3>
                                                    <strong className="item-price">
                                                        <p>9.990.000₫</p>
                                                        <span className="price-and-discount">
                                                            <label className="price-old">10.000.000₫</label>
                                                            <small>-16%</small>
                                                        </span>
                                                    </strong>
                                                    <div className="block-product-contain">
                                                        <img src={flashsaleicon}/>
                                                        <span>
                                                            Còn 50/50 suất
                                                        </span>
                                                    </div>
                                                    <div className="btn-buy">
                                                        <a href="">
                                                            <span>
                                                                Mua ngay
                                                            </span>
                                                        </a>
                                                    </div>
                                                </a>
                                            </div>
                                        <div className="block-product-item">
                                                <a href="#">
                                                    <div className="item-img">
                                                        <img src={itemimg}/>
                                                    </div>
                                                    <h3>Xiaomi Redmi Note 13 8GB/128GB</h3>
                                                    <strong className="item-price">
                                                        <p>9.990.000₫</p>
                                                        <span className="price-and-discount">
                                                            <label className="price-old">10.000.000₫</label>
                                                            <small>-16%</small>
                                                        </span>
                                                    </strong>
                                                    <div className="block-product-contain">
                                                        <img src={flashsaleicon}/>
                                                        <span>
                                                            Còn 50/50 suất
                                                        </span>
                                                    </div>
                                                    <div className="btn-buy">
                                                        <a href="">
                                                            <span>
                                                                Mua ngay
                                                            </span>
                                                        </a>
                                                    </div>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                                <div className="slide">
                                    <div className="block-product-list">
                                        <div className="block-product-item">
                                                <a href="#">
                                                    <div className="item-img">
                                                        <img src={itemimg}/>
                                                    </div>
                                                    <h3>Xiaomi Redmi Note 13 8GB/128GB</h3>
                                                    <strong className="item-price">
                                                        <p>9.990.000₫</p>
                                                        <span className="price-and-discount">
                                                            <label className="price-old">10.000.000₫</label>
                                                            <small>-16%</small>
                                                        </span>
                                                    </strong>
                                                    <div className="block-product-contain">
                                                        <img src={flashsaleicon}/>
                                                        <span>
                                                            Còn 50/50 suất
                                                        </span>
                                                    </div>
                                                    <div className="btn-buy">
                                                        <a href="">
                                                            <span>
                                                                Mua ngay
                                                            </span>
                                                        </a>
                                                    </div>
                                                </a>
                                            </div>
                                        <div className="block-product-item">
                                                <a href="#">
                                                    <div className="item-img">
                                                        <img src={itemimg}/>
                                                    </div>
                                                    <h3>Xiaomi Redmi Note 13 8GB/128GB</h3>
                                                    <strong className="item-price">
                                                        <p>9.990.000₫</p>
                                                        <span className="price-and-discount">
                                                            <label className="price-old">10.000.000₫</label>
                                                            <small>-16%</small>
                                                        </span>
                                                    </strong>
                                                    <div className="block-product-contain">
                                                        <img src={flashsaleicon}/>
                                                        <span>
                                                            Còn 50/50 suất
                                                        </span>
                                                    </div>
                                                    <div className="btn-buy">
                                                        <a href="">
                                                            <span>
                                                                Mua ngay
                                                            </span>
                                                        </a>
                                                    </div>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                                <div className="slide">
                                    <div className="block-product-list">
                                        <div className="block-product-item">
                                                <a href="#">
                                                    <div className="item-img">
                                                        <img src={itemimg}/>
                                                    </div>
                                                    <h3>Xiaomi Redmi Note 13 8GB/128GB</h3>
                                                    <strong className="item-price">
                                                        <p>9.990.000₫</p>
                                                        <span className="price-and-discount">
                                                            <label className="price-old">10.000.000₫</label>
                                                            <small>-16%</small>
                                                        </span>
                                                    </strong>
                                                    <div className="block-product-contain">
                                                        <img src={flashsaleicon}/>
                                                        <span>
                                                            Còn 50/50 suất
                                                        </span>
                                                    </div>
                                                    <div className="btn-buy">
                                                        <a href="">
                                                            <span>
                                                                Mua ngay
                                                            </span>
                                                        </a>
                                                    </div>
                                                </a>
                                            </div>
                                        <div className="block-product-item">
                                                <a href="#">
                                                    <div className="item-img">
                                                        <img src={itemimg}/>
                                                    </div>
                                                    <h3>Xiaomi Redmi Note 13 8GB/128GB</h3>
                                                    <strong className="item-price">
                                                        <p>9.990.000₫</p>
                                                        <span className="price-and-discount">
                                                            <label className="price-old">10.000.000₫</label>
                                                            <small>-16%</small>
                                                        </span>
                                                    </strong>
                                                    <div className="block-product-contain">
                                                        <img src={flashsaleicon}/>
                                                        <span>
                                                            Còn 50/50 suất
                                                        </span>
                                                    </div>
                                                    <div className="btn-buy">
                                                        <a href="">
                                                            <span>
                                                                Mua ngay
                                                            </span>
                                                        </a>
                                                    </div>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                            </Slider>
                        </div> 
                        <div class="block-products-buy">
                            <a href="#">
                                <span>
                                    Xem thêm sản phẩm
                                </span>
                            </a>
                        </div>
                    </div>
                    
                </div>



                
            </div>
        )
    }
}

export default HotPromotion;