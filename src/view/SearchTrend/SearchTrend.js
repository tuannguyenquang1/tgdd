import React from "react";
import './SearchTrend.scss'

const trend=["iphone 16",
"iphone 16 pro",
"iphone 16 pro max",
"Samsung Galaxy Tab S9",
"Lenovo Tab M11",
"iphone 15",
"iphone 15 plus",
"samsung z flip 7",
"tai nghe airpods",
"airpods 4",
"airpods 4 anc",
"apple watch series 10",
"apple watch series 9",
"apple watch ultra 2",
"asus",
"laptop gaming",
"macbook air",
"macbook pro",
"Mac Studio M4",
"MacBook Air M4",
"airtag",
"loa jbl",
"tai nghe sony",
"loa marshall",
"bàn phím gaming",
"chuột logitech",
"loa harman kardon",
"đồng hồ g shock",
"đồng hồ định vị trẻ em viettel",
"samsung galaxy z series",
"orient star",
"đồng hồ thụy sỹ",
"đồng hồ baby g",
"macbook",
"macbook pro m4",
"samsung s25",
"samsung s25 plus",
"samsung galaxy s25 ultra",
"iphone 16e",
"iphone 14",
"samsung galaxy z fold 7"]

class SearchTrend extends React.Component{
    render(){
        return(
            <div className="search-trend">
                <h3>Mọi người cũng tìm kiếm</h3>
                <div className="search-trend-container">
                    <ul>
                        {trend.map((item,index)=>{
                            return(
                                <li key={index}>
                                    <a href="#">{item}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default SearchTrend;