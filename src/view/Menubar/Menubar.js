import React from "react";
import './Menubar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faLaptop, faMobile, faHeadphones, faClock, faCaretDown, faTablet, faRetweet, faDisplay, faCheckToSlot,faSimCard } from '@fortawesome/free-solid-svg-icons';

import sacduphong from '../asset/image/phukien/sacduphong.png';
import saccap from '../asset/image/phukien/sac_cap.png';
import oplungdienthoai from '../asset/image/phukien/opdienthoai.png';
import oplungmaytinhbang from '../asset/image/phukien/oplungmaytinhbang.png';
import miengdan from '../asset/image/phukien/miengdan.png';
import miengdancamera from '../asset/image/phukien/miengdancamera.png';
import tuidungairpods from '../asset/image/phukien/tuidungAirPods.png';
import airtagvobaove from '../asset/image/phukien/airTag_vobaove.png';
import buttablet from '../asset/image/phukien/buttablet.png';
import daydongho from '../asset/image/phukien/daydongho.png';

import tainghebluetooth from '../asset/image/phukien/taingheBluetooth.png';
import taingheday from '../asset/image/phukien/taingheday.png';
import tainghechuptai from '../asset/image/phukien/tainghechup.png';
import tainghethethao from '../asset/image/phukien/tainghethethao.png';
import loa from '../asset/image/phukien/loa.png';
import micro from '../asset/image/phukien/micro.png';
import cameratrongnha from '../asset/image/phukien/camera_trongnha.png';
import camerangoaitroi from '../asset/image/phukien/camera_ngoaitroi.png';
import flycam from '../asset/image/phukien/flycam.png';
import camerahanhtrinh from '../asset/image/phukien/camera_hanhtrinh.png';

import apple from '../asset/image/logo_hang/logo_Apple.png';
import samsung from '../asset/image/logo_hang/logo_Samsung.png';
import imou from '../asset/image/logo_hang/logo_Imou.png';
import basues from '../asset/image/logo_hang/logo_Baseus.png';
import jbl from '../asset/image/logo_hang/logo_JBL.png';
import anker from '../asset/image/logo_hang/logo_Anker.png';
import xmobile from '../asset/image/logo_hang/logo_Xmobile.png';

import chuot from '../asset/image/phukien/chuotmaytinh.png';
import banphim from '../asset/image/phukien/banphim.png';
import router from '../asset/image/phukien/router.png';
import balotuichongsoc from '../asset/image/phukien/balo_tuichongsoc.png';

import thenhodidong from '../asset/image/phukien/thenho.png';
import usb from '../asset/image/phukien/USB.png';

import pintieu from '../asset/image/phukien/pintieu.png';
import phukienoto from '../asset/image/phukien/phukienoto.png';

import maycu from '../asset/image/icon/maycu.png';
import thucu from '../asset/image/icon/thucu.png';

import maytinhdeban from '../asset/image/phukien/maytinhdeban.png';
import manhinh from '../asset/image/phukien/manhinhmaytinh.png';
import maytinhchoigame from '../asset/image/phukien/maychoigame.png';
import phanmem from '../asset/image/phukien/phanmem.png';

import mayin from '../asset/image/phukien/mayin.png';
import mucin from '../asset/image/phukien/mucin.png';

import simthecao from '../asset/image/icon/simthecao.png';
import esim from '../asset/image/icon/esim.png';

import dongtientragop from '../asset/image/icon/dongtientragop.png';
import dongtiendien from '../asset/image/icon/dongtiendien.png';
import dongtiennuoc from '../asset/image/icon/dongtiennuoc.png';
import dongtiennetfpt from '../asset/image/logo_hang/dongtienNETFPT.png';
import dongtiennetcap from '../asset/image/logo_hang/dongtienNETcap.png';
import vetauxemaybay from '../asset/image/icon/vetauxemaybay.png';

import muabaohiem from '../asset/image/icon/muabaohiemxe.png';
import dongtienbaohiem from '../asset/image/icon/dongtienbaohiem.png';
import muagoitruyenhinh from '../asset/image/icon/muagoitruyenhinh.png';
import vaytienmatcake from '../asset/image/logo_hang/vaytienmatCAKE.png';
import vaytienmatcathay from '../asset/image/logo_hang/vaytienCATHAY.png';

import muagoi3g4g from '../asset/image/icon/muagoidata4g.png';
import naptientratruoc from '../asset/image/icon/naptientratruoc.png';
import naptientrasau from '../asset/image/icon/naptientrasau.png';
import thecaogame from '../asset/image/icon/thecaogame.png';
import thecaodienthoai from '../asset/image/icon/thecaodienthoai.png';


class Menubar extends React.Component{
    render(){
        return(
            <div className="menubar">
                <div className="menubar-container">
                    <ul>
                        <li className="phukien_submenu">
                            <a href="#">
                                <FontAwesomeIcon icon={faMobile} />
                                Điện thoại
                            </a>
                            
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faLaptop} />
                                Laptop
                            </a>
                        </li>
                        <li class="phukien-submenu">
                            <a href="#">
                                <span>
                                    <FontAwesomeIcon icon={faHeadphones} />
                                    Phụ kiện
                                </span>
                                <span>
                                    <FontAwesomeIcon icon={faCaretDown} />
                                </span>
                            </a>
                            <div className="submenu">
                                <div className="column-row1">
                                    <div className="submenu-column">
                                        <h3>Phụ kiện di động</h3>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <img src={sacduphong} alt="sacduphong" />
                                                    Sạc dự phòng
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src={saccap} alt="saccap" />
                                                    Sạc, cáp
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src={oplungdienthoai} alt="oplungdienthoai" />
                                                    Ốp lưng điện thoại
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src={oplungmaytinhbang} alt="miengdan" />
                                                    Miếng dán
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src={miengdan} alt="miengdancamera" />
                                                    Miếng dán Camera
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src={tuidungairpods} alt="tuidungairpods" />
                                                    Túi đựng AirPods
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src={airtagvobaove} alt="airtagvobaove" />
                                                    AirTag, Vỏ bảo vệ ...
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src={buttablet} alt="buttablet" />
                                                    Bút Tablet
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src={daydongho} alt="daydongho" />
                                                    Dây đồng hồ
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="column-row1-1">
                                        <div className="submenu-column">
                                            <h3>Thiết bị âm thanh</h3>
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <img src={tainghebluetooth}/>
                                                        Tai nghe Bluetooth
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src={taingheday}/>
                                                        Tai nghe dây
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src={tainghechuptai}/>
                                                        Tai nghe chụp tai
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src={tainghethethao}/>
                                                        Tai nghe thể thao
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src={loa}/>
                                                        Loa
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src={micro}/>
                                                        Micro
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="submenu-column">
                                            <h3>Camera / Flycam</h3>
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <img src={cameratrongnha}/>
                                                        Camera trong nhà
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src={camerangoaitroi}/>
                                                        Camera ngoài trời
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src={flycam}/>
                                                        Flycam
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src={camerahanhtrinh}/>
                                                        Camera hành trình
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="column-row1">
                                    <div className="submenu-column">
                                        <h3>Thương hiệu hàng đầu</h3>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <img src={apple}/>
                                                    Apple
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src={samsung}/>
                                                    Samsung
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src={imou}/>
                                                    Imou
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src={basues}/>
                                                    Baseus
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src={jbl}/>
                                                    JBL
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src={anker}/>
                                                    Anker
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src={xmobile}/>
                                                    Xmobile
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="column-row1-1">
                                        <div className="submenu-column">
                                            <h3>Phụ kiện laptop</h3>
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <img src={chuot}/>
                                                        Chuột máy tính
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src={banphim}/>
                                                        Bàn phím
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src={router}/>
                                                        Router
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src={balotuichongsoc}/>
                                                        Balo, túi chống sốc
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="submenu-column">
                                            <h3>Thiết bị lưu trữ</h3>
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <img src={thenhodidong}/>
                                                        Thẻ nhớ di động
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src={thenhodidong}/>
                                                        Thẻ nhớ
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src={usb}/>
                                                        USB
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            <div className="submenu-column">
                                <h3>Phụ kiện khác</h3>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <img src={pintieu}/>
                                            Pin tiểu
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src={phukienoto}/>
                                            Phụ kiện ô tô
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            
                            </div>
                            
                        </li>

                        <li className="li-submenu">
                            <a href="#">
                                <FontAwesomeIcon icon={faClock} />
                                Smart-watch
                            </a>
                        </li>
                        <li className="li-submenu">
                            <a>
                                <FontAwesomeIcon icon={faClock} />
                                Đồng hồ
                            </a>
                        </li>
                        <li className="li-submenu">
                            <a>
                                <FontAwesomeIcon icon={faTablet} />
                                Tablet
                            </a>
                        </li>
                        <li class="thucu-submenu">
                            <a href="#">
                                <span>
                                    <FontAwesomeIcon icon={faRetweet} />
                                    Máy cũ, Thu cũ
                                </span>
                                <span>
                                    <FontAwesomeIcon icon={faCaretDown} />
                                </span>
                                <div className="submenu-thucu">
                                    <div className="submenu-column-thucu">
                                        <h3>Máy cũ, thu cũ</h3>
                                        <ul>
                                            <li>
                                                <a href="">
                                                    <img src={maycu}/>
                                                    Máy cũ giá rẻ
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <img src={thucu}/>
                                                    Thu cũ đổi mới
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="pcmayin-submenu"> 
                            <a href="#">
                                <span>
                                    <FontAwesomeIcon icon={faDisplay} />
                                    PC, Máy in
                                </span>
                                <span>
                                    <FontAwesomeIcon icon={faCaretDown} />
                                </span>
                                <div className="submenu-pcmayin">
                                    <div className="submenu-column-pc">
                                        <h3>PC, Màn hình</h3>
                                        <ul>
                                            <li>
                                                <a>
                                                    <img src={maytinhdeban}/>
                                                    Máy tính để bàn
                                                </a>
                                            </li>
                                            <li>
                                                <a>
                                                    <img src={manhinh}/>
                                                    Màn hình máy tính
                                                </a>
                                            </li>
                                            <li>
                                                <a>
                                                    <img src={maytinhchoigame}/>
                                                    Máy chơi game
                                                </a>
                                            </li>
                                            <li>
                                                <a>
                                                    <img src={phanmem}/>
                                                    Phần mềm
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="submenu-column-mayinmucin">
                                        <h3>Máy in, Mực in</h3>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <img src={mayin}/>
                                                    Máy in
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src={mucin}/>
                                                    Mực in
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="simthecao-submenu">
                            <a href="#">
                                <span>
                                    <FontAwesomeIcon icon={faSimCard} />
                                    <span>Sim, Thẻ cào</span>
                                </span>
                                <span>
                                    <FontAwesomeIcon icon={faCaretDown} />
                                </span>
                                <div className="submenu-simthecao">
                                    <div className="submenu-column-simthecao">
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <img src={simthecao}/>
                                                    <span>Sim, thẻ cào</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a>
                                                    <img src={esim}/>
                                                    <span>eSim du lịch</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="dichvu-submenu">
                            <a href="#">
                                <span>
                                    <FontAwesomeIcon icon={faCheckToSlot} />
                                    <span>Dịch vụ tiện ích</span>
                                </span>
                                <span>
                                    <FontAwesomeIcon icon={faCaretDown} />
                                </span>
                                    <div className="submenu-dichvu">
                                    <div className="column-row1">
                                        <div className="submenu-column-dichvu">
                                            <h3>Thanh toán hóa đơn</h3>
                                            <ul>
                                                <li>
                                                    <a>
                                                        <img src={dongtientragop}/>
                                                        <span>Đóng tiền trả góp</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                        <img src={dongtiendien}/>
                                                        <span>Đóng tiền trả góp</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                        <img src={dongtiennetfpt}/>
                                                        <span>Đóng tiền NET FPT</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                        <img src={dongtiennetcap}/>
                                                        <span>Đóng tiền net, cáp...</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                        <img src={vetauxemaybay}/>
                                                        Vé tàu, xe, máy bay
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                            <div class="submenu-column-dichvu">
                                                <div className="submenu-column-dichvu1">
                                                    <h3>Tài chính - Bảo hiểm</h3>
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <img src={muabaohiem}/>
                                                                Mua bảo hiểm xe...
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <img src={dongtienbaohiem}/>
                                                                Đóng tiền bảo hiểm
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <img src={muagoitruyenhinh}/>
                                                                Mua gói truyền hình
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <img src={vaytienmatcake}/>
                                                                Vay tiền mặt CAKE
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <img src={vaytienmatcathay}/>
                                                                Vay tiền mặt CATHAY
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="submenu-column-dichvu1">
                                                    <h3>Tiện ích viễn thông</h3>
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <img src={muagoi3g4g}/>
                                                                Mua gói data 3G, 4G
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <img src={naptientratruoc}/>
                                                                Nạp tiền trả trước
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <img src={naptientrasau}/>
                                                                Nạp tiền trả sau
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <img src={thecaogame}/>
                                                                Thẻ cào game
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <img src={thecaodienthoai}/>
                                                                Thẻ cào điện thoại
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        
                                    </div>
                                    </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Menubar;