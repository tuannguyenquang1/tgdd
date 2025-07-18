import React from "react";

import './Footer.scss'

import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

import topzone from '../asset/image/logo_tapdoan/topzone.png';
import dmx from '../asset/image/logo_tapdoan/dmx.png';
import ankhang from '../asset/image/logo_tapdoan/ankhang.png';
import kids from '../asset/image/logo_tapdoan/kids.png';
import vieclam from '../asset/image/logo_tapdoan/vieclam.png';
import maiam from '../asset/image/logo_tapdoan/maiam.png';
import tdmx from '../asset/image/logo_tapdoan/tdmx.png';
import era from '../asset/image/logo_tapdoan/era.png';

import dcma from '../asset/image/logo_tapdoan/dmca-protection-badge-status.png';
import bocongthuong from '../asset/image/logo_tapdoan/logo-da-thong-bao-bo-cong-thuong-mau-xanh.png';
import nscs from '../asset/image/logo_tapdoan/ncsc.png';

import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { SiZalo } from "react-icons/si";

class Footer extends React.Component{

    constructor(props) {
    super(props);
        this.state = {
            showMore: false,
        };
    }

    toggleShowMore = () => {
        this.setState({ showMore: true });
    };

    toggleCollapse = () => {
        this.setState({ showMore: false });
    };

    render(){
        const { showMore } = this.state;
        return(
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-col">
                        <div className="footer-list">
                            <p className="footer-list-title">
                                <strong>Tổng đài hỗ trợ</strong>
                            </p>
                            <p className="f-col-content">
                                <span>Gọi mua: </span>
                                <a href="#"> 1900 232 460 </a>
                                (8:00 - 21:30)
                            </p>
                            <p className="f-col-content">
                                <span>Khiếu nại: </span>
                                <a href="#"> 1800.1062 </a>
                                (8:00 - 21:30)
                            </p>
                            <p className="f-col-content">
                                <span>Bảo hành:</span>
                                <a href="#"> 1900 232 464 </a>
                                (8:00 - 21:00)
                            </p>
                        </div>
                    </div>
                    <div className="footer-col">
                        <div className="footer-title">
                            <p>Về công ty</p>
                        </div>
                        <ul className="footer-listmenu">
                            <li>
                                <a href="#">Giới thiệu công ty (MWG.vn)</a>
                            </li>
                            <li>
                                <a href="#">Tuyển dụng</a>
                            </li>
                            <li>
                                <a href="#">Gửi góp ý, khiếu nại</a>
                            </li>
                            <li>
                                <a href="#">Tìm siêu thị (2.956 shop)</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <p className="footer-title">
                        <strong>Thông tin khác</strong>
                        </p>
                        <ul className="footer-listmenu">
                            <li><a href="#">Tích điểm Quà tặng VIP</a></li>
                            <li><a href="#">Lịch sử mua hàng</a></li>
                            <li><a href="#">Đăng ký bán hàng CTV chiết khấu cao</a></li>
                            <li><a href="#">Tìm hiểu về mua trả chậm</a></li>
                            <li><a href="#">Chính sách bảo hành</a></li>

                            {!showMore && (
                                <li className="more_footer" onClick={this.toggleShowMore} style={{ cursor: "pointer" }}>
                                <span>Xem thêm</span>
                                <FaAngleDown />
                                </li>
                            )}

                            {showMore && (
                                <>
                                <li className="footer-hidden-item"><a href="#">Chính sách đổi trả</a></li>
                                <li className="footer-hidden-item"><a href="#">Giao hàng & Thanh toán</a></li>
                                <li className="footer-hidden-item"><a href="#">Hướng dẫn mua online</a></li>
                                <li className="footer-hidden-item"><a href="#">Bán hàng doanh nghiệp</a></li>
                                <li className="footer-hidden-item"><a href="#">Phiếu mua hàng</a></li>
                                <li className="footer-hidden-item"><a href="#">In hóa đơn điện tử</a></li>
                                <li className="footer-hidden-item"><a href="#">Quy chế hoạt động</a></li>
                                <li className="footer-hidden-item"><a href="#">Chính sách xử lý dữ liệu cá nhân</a></li>
                                <li className="footer-hidden-item"><a href="#">Nội quy cửa hàng</a></li>
                                <li className="footer-hidden-item"><a href="#">Chất lượng phục vụ</a></li>
                                <li className="footer-hidden-item"><a href="#">Cảnh báo giả mạo</a></li>
                                <li className="footer-hidden-item"><a href="#">Chính sách khui hộp sản phẩm Apple</a></li>
                                <li className="footer-hidden-item"><a href="#">Hợp tác bán hàng</a></li>
                                <li className="footer-hidden-item"><a href="#">Mạng xã hội thegioididong.com</a></li>
                                <li className="footer-hidden-item"><a href="#">Xem bản mobile</a></li>
                                <li className="hidden-item" onClick={this.toggleCollapse} style={{ cursor: "pointer" }}>
                                    <span>Thu gọn</span>
                                    <FaAngleUp />
                                </li>
                                </>
                            )}
                        </ul>
                    </div>
                    <div className="footer-col">
                        <div className="footer-website">
                            <div className="footer-logo">
                                <p className="footer-logo-title">
                                    Website cùng tập đoàn
                                </p>
                                <ul className="footer-logo-list">
                                    <li>
                                        <a href="#">
                                            <img src={topzone}/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src={dmx}/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src={ankhang}/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src={kids}/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src={vieclam}/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src={maiam}/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src={tdmx}/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src={era}/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-social">
                                <a href="#">
                                    <FaFacebook />
                                    3886.8k Fan
                                </a>
                                <a href="#">
                                    <FaYoutube />
                                    872k Đăng ký
                                </a>
                                <a href="#">
                                    <SiZalo />
                                    Zalo TGDĐ
                                </a>
                            </div>
                            <div className="footer-certify">
                                <a href="#">
                                    <img src={dcma}/>
                                </a>
                                <a href="#">
                                    <img src={bocongthuong}/>
                                </a>
                                <a href="#">
                                    <img src={nscs}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div className="copyright-container">
                        <p>
                            © 2018. Công ty cổ phần Thế Giới Di Động. GPDKKD: 0303217354 do sở KH & ĐT TP.HCM cấp ngày 02/01/2007. GPMXH: 238/GP-BTTTT do Bộ Thông Tin và Truyền Thông cấp ngày 04/06/2020.
                            <br></br>
                            Địa chỉ: 128 Trần Quang Khải, P.Tân Định, Q.1, TP.Hồ Chí Minh. Địa chỉ liên hệ và gửi chứng từ: Lô T2-1.2, Đường D1, Đ. D1, P.Tân Phú, TP.Thủ Đức, TP.Hồ Chí Minh. Điện thoại: 028 38125960. Email: cskh@thegioididong.com. Chịu trách nhiệm nội dung: Huỳnh Văn Tốt. Email: hotrotmdt@thegioididong.com
                        <a href="#"> Xem chính sách sử dụng</a>
                        </p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;