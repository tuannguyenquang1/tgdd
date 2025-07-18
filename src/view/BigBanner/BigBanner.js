import React from "react";
import './BigBanner.scss'
import bigbanner from '../asset/image/banner/big_banner1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
class BigBanner extends React.Component{
    render(){
        return(
            <div className="big-banner">
                <div className="big-banner-container">
                    <a href="">
                        <img src={bigbanner}/>
                    </a>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </div>
                
            </div>
        )
    }
}
export default BigBanner;