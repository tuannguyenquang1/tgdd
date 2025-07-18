import React from "react";

import './NewsHome.scss'

import news1 from '../asset/image/news/newshome1.jpg'
import news2 from '../asset/image/news/newshome2.jpg'
import news3 from '../asset/image/news/newshome3.jpg'
import news4 from '../asset/image/news/newshome4.jpg'

const news=[
    {img:news1, content:'Hướng dẫn cách đổi thẻ căn cước online sau khi sáp nhập tỉnh, không cần ra cơ quan Công an'},
    {img:news2, content:'8 cách xóa nhiều trang trong Word nhanh, đơn giản dễ thực hiện'},
    {img:news3, content:'Trên tay HONOR 400 5G: Smartphone cận cao cấp với nhiều tính năng AI thú vị'},
    {img:news4, content:'Đánh giá iPhone 15 Pro Max: Có nên mua ở thời điểm hiện tại?'}
]

class NewsHome extends React.Component{
    render(){
        return(
            <div className="news-home">
                <h3>Mạng xã hội thegioididong.com</h3>
                <div className="box-list-news">
                    {news.map((item,index)=>{
                        return(
                            <div className="news-item" key={index}>
                            <a href="#">
                                <img src={item.img}/>
                            </a>
                            <p>{item.content}</p>
                        </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
export default NewsHome;