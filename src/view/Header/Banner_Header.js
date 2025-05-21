import React from "react";
import './Banner_Header.scss';
import banner from '../asset/image/header.png'

class Banner_Header extends React.Component{
    render(){
        return(
            <div className="Header">
                <img src={banner} />
            </div>
        )
    }
}

export default Banner_Header;