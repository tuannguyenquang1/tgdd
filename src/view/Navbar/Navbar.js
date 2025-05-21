import React from "react";
import logo from '../asset/image/Logo.png';
import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping, faLocationDot, faAngleRight, faSearch } from '@fortawesome/free-solid-svg-icons';

class Navbar extends React.Component{
    
    render(){
        return(
            <div className="nav">
                <div className="container">
                    <ul>
                        {/* Logo */}
                        <li>
                            <a href="#">
                                <img src={logo} alt="Logo" />
                            </a>
                        </li>

                        {/* Tìm kiếm */}
                        <li className="search">
                            <FontAwesomeIcon icon={faSearch}/>
                            <input type="text" placeholder="Bạn cần tìm gì ..." />
                        </li>

                        {/* Đăng nhập */}
                        <li className="btn">
                            <a>
                                <FontAwesomeIcon icon={faUser} /> Đăng nhập
                            </a>
                        </li>

                        {/* Giỏ hàng */}
                        <li className="btn">
                            <a>
                                <FontAwesomeIcon icon={faCartShopping} /> Giỏ hàng
                            </a>
                        </li>

                        {/* Địa chỉ */}
                        <li id="adress_form" className="adress">
                            <a>
                                <span className="left-icon">
                                    <FontAwesomeIcon icon={faLocationDot} /> Hồ Chí Minh
                                </span>
                                <span className="right-icon">
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </span>
                            </a>
                        </li>
                        <div className="adress-form">
                            <div className="adress-from-content">
                                <h2>Chọn địa chỉ nhận hàng</h2>
                                <form>
                                    <p>Chọn đầy đủ địa chỉ nhận hàng để biết chính xác thời gian giao</p>
                                    <select>
                                        <option value="">Chọn địa điểm</option>
                                        <option value="">TP.Hồ Chí Minh</option>
                                    </select>
                                    <select name="" id="">
                                    <option value="">Chọn Quận\Huyện</option>
                                    <option value="">Quận Bình Tân</option>
                                    </select>
                                    <select name="" id="">
                                        <option value="">Chọn Phường Xã</option>
                                        <option value="">Bình Hưng Hòa B</option>
                                    </select>
                                    <input type="text" placeholder="Số nhà, tên đường (không bắt buộc)"></input>
                                </form>
                                <span>Submit</span>
                            </div>
                    </div>
                    </ul>
                    
                </div>
            </div>
        )
    }
}

export default Navbar;