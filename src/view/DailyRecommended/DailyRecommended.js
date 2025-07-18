import React from "react";
import './DailyRecommended.scss';

import iphone16 from '../asset/image/dienthoai/iphone-16.jpg';
import iphone16promax from '../asset/image/dienthoai/iphone16promax.jpg';
import iphone16pro from '../asset/image/dienthoai/iphone16pro.png';
import iphone15 from '../asset/image/dienthoai/iphone15.jpg';
import iphone15plus from '../asset/image/dienthoai/iphone-15-plus.jpg';
import s24ultra from '../asset/image/dienthoai/s24ultra.jpg';
import a06 from '../asset/image/dienthoai/samsung-galaxy-a06.jpg';
import a35 from '../asset/image/dienthoai/samsung-galaxy-a35.jpg';
import zfold6 from '../asset/image/dienthoai/samsung-galaxy-z-fold6.jpg';
import xiaomi14t from '../asset/image/dienthoai/xiaomi-14t.jpg';
import xiaominote13 from '../asset/image/dienthoai/xiaomi-redmi-note-13-green.jpg';
import macbookm3 from '../asset/image/item_img/macbook-m3.jpg';


import icondealsale from '../asset/image/icon/icon-deal-sale.png';

import { FaStar } from "react-icons/fa";
    



class DailyRecommended extends React.Component { 

    constructor(props) {
    super(props);
        this.state = {
        showMore: false, // Trạng thái hiển thị thêm sản phẩm
        };
    }

    // Toggle giữa Xem thêm và Thu gọn
    handleToggle = (e) => {
        e.preventDefault();
        this.setState((prevState) => ({
        showMore: !prevState.showMore,
        }));
    };

    render() {

    const products = [
    { name: "iPhone 16 128GB", price: "21.490.000₫", oldPrice: "22.990.000₫", compare:"Super Retina XDR  6.1'",gift: "1.050.000₫", img: iphone16, rating: "5.0", sold: "9,3k" },
    { name: "Samsung Galaxy S24", price: "18.990.000₫", oldPrice: "20.990.000₫", img: s24ultra, rating: "4.8", sold: "7,1k" },
    { name: "MacBook Air M3", price: "27.990.000₫", oldPrice: "29.990.000₫", img: macbookm3, compare:"RAM 8 GB - SSD 1TB" ,rating: "4.9", sold: "6,5k" },
    { name: "iPhone 16 Pro Max 256GB",price:"30.590.000₫",oldPrice:"34.990.000₫",img:iphone16promax, compare:"Super Retina XDR 6.9'",rating:"4.9",sold:"188,1k" },
    { name: "iPhone 16 Pro 128GB",price:"25.090.000₫",oldPrice: "28.990.000₫",img:iphone16pro, compare:"Super Retina XDR  6.3'", gift: "500.000₫",rating:"4.9",sold:"21k"},
    {
        name: "iPhone 15 128GB",
        price: "25.490.000₫",
        oldPrice: "27.990.000₫",
        img: iphone15,
        gift: "1.200.000₫",
        rating: "4.9",
        sold: "8,5k"
    },
    {
        name: "Samsung Galaxy A35 5G 8GB/256GB",
        price: "15.990.000₫",
        oldPrice: "17.490.000₫",
        img: a35,
        gift: "600.000₫",
        rating: "4.7",
        sold: "7,0k"
    },
    {
        name: "Samsung Galaxy A06 4GB/64GB",
        price: "13.990.000₫",
        oldPrice: "15.990.000₫",
        img: a06,
        gift: "550.000₫",
        rating: "4.6",
        sold: "6,5k"
    },
    {
        name: "iPhone 15 Plus 128GB",
        price: "19.390.000₫",
        oldPrice: "22.990.000₫",
        img: iphone15plus,
        gift: "1.200.000₫",
        rating: "4.9",
        sold: "8,5k"
    },
    {
        name: "Samsung Galaxy Z Fold6 5G 12GB/256GB",
        price: "35.990.000₫",
        oldPrice: "38.990.000₫",
        img: zfold6,
        gift: "1.500.000₫",
        rating: "5.0",
        sold: "5,5k"
    },
    {
        name: "Xiaomi 14T 5G 12GB/256GB",
        price: "11.490.000₫",
        oldPrice: "12.990.000₫",
        img: xiaomi14t,
        rating: "4.0",
        sold: "31,5k"
    },
    {
        name: "Xiaomi Redmi Note 13 8GB/256GB",
        price: "7.990.000₫",
        oldPrice: "8.990.000₫",
        img: xiaominote13,
        rating: "4.0",
        sold: "20,5k"
    },
    { name: "iPhone 16 128GB", price: "21.490.000₫", oldPrice: "22.990.000₫", compare:"Super Retina XDR  6.1'",gift: "1.050.000₫", img: iphone16, rating: "5.0", sold: "9,3k" },
    { name: "Samsung Galaxy S24", price: "18.990.000₫", oldPrice: "20.990.000₫", img: s24ultra, rating: "4.8", sold: "7,1k" },
    { name: "MacBook Air M3", price: "27.990.000₫", oldPrice: "29.990.000₫", img: macbookm3, compare:"RAM 8 GB - SSD 1TB" ,rating: "4.9", sold: "6,5k" },
    { name: "iPhone 16 Pro Max 256GB",price:"30.590.000₫",oldPrice:"34.990.000₫",img:iphone16promax, compare:"Super Retina XDR 6.9'",rating:"4.9",sold:"188,1k" },
    { name: "iPhone 16 Pro 128GB",price:"25.090.000₫",oldPrice: "28.990.000₫",img:iphone16pro, compare:"Super Retina XDR  6.3'", gift: "500.000₫",rating:"4.9",sold:"21k"},
    {
        name: "iPhone 15 128GB",
        price: "25.490.000₫",
        oldPrice: "27.990.000₫",
        img: iphone15,
        gift: "1.200.000₫",
        rating: "4.9",
        sold: "8,5k"
    },
    {
        name: "Samsung Galaxy A35 5G 8GB/256GB",
        price: "15.990.000₫",
        oldPrice: "17.490.000₫",
        img: a35,
        gift: "600.000₫",
        rating: "4.7",
        sold: "7,0k"
    },
    {
        name: "Samsung Galaxy A06 4GB/64GB",
        price: "13.990.000₫",
        oldPrice: "15.990.000₫",
        img: a06,
        gift: "550.000₫",
        rating: "4.6",
        sold: "6,5k"
    },
    {
        name: "iPhone 15 Plus 128GB",
        price: "19.390.000₫",
        oldPrice: "22.990.000₫",
        img: iphone15plus,
        gift: "1.200.000₫",
        rating: "4.9",
        sold: "8,5k"
    },
    {
        name: "Samsung Galaxy Z Fold6 5G 12GB/256GB",
        price: "35.990.000₫",
        oldPrice: "38.990.000₫",
        img: zfold6,
        gift: "1.500.000₫",
        rating: "5.0",
        sold: "5,5k"
    },
    {
        name: "Xiaomi 14T 5G 12GB/256GB",
        price: "11.490.000₫",
        oldPrice: "12.990.000₫",
        img: xiaomi14t,
        rating: "4.0",
        sold: "31,5k"
    },
    {
        name: "Xiaomi Redmi Note 13 8GB/256GB",
        price: "7.990.000₫",
        oldPrice: "8.990.000₫",
        img: xiaominote13,
        rating: "4.0",
        sold: "20,5k"
    },
];

        const { showMore } = this.state;

       // Hiển thị 6 sản phẩm đầu nếu chưa nhấn "Xem thêm"
        const visibleProducts = showMore ? products : products.slice(0, 12);

        return (
            <div className="daily-recommended">
                <h3>Gợi ý cho bạn</h3>
                <div className="daily-recommended-container">
                    <ul>
                        {visibleProducts.map((product, index) => (
                        <li className="product-item" key={index}>
                            <a href="#">
                            <div className="item-label">
                                <span>Trả chậm 0%</span>
                            </div>
                            <div className="item-img">
                                <img src={product.img} alt={product.name} />
                            </div>
                            <div className="item-sale">
                                <img src={icondealsale} alt="Deal Sale" />
                                <span>Trả trước 0Đ</span>
                            </div>
                            <h3>{product.name}</h3>
                            {product.compare && (
                                <div className="item-compare">
                                <span>{product.compare}</span>
                                </div>
                            )}
                            <div className="item-text-online">
                                <span>Online giá rẻ quá</span>
                            </div>
                            <strong className="item-price">{product.price}</strong>
                            <div className="price-discount">
                                <p className="price-old">{product.oldPrice}</p>
                                <span className="percent">-6%</span>
                            </div>
                            {product.gift && (
                                <p className="item-gift">Quà {product.gift}</p>
                            )}
                            <div className="ratting-compare">
                                <FaStar />
                                <b>{product.rating}</b>
                                <span> - </span>
                                <b>Đã bán {product.sold}</b>
                            </div>
                            </a>
                        </li>
                        ))}
                    </ul>
                    {/* Nút "Xem thêm sản phẩm" hoặc "Thu gọn" */}
                    {products.length > 6 && (
                        <div className="daily-more">
                        <a href="#" onClick={this.handleToggle}>
                            <span>
                            {showMore ? "Thu gọn" : "Xem thêm sản phẩm"}
                            </span>
                        </a>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default DailyRecommended;
