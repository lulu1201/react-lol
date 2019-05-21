import React,{Component} from "react";
import '../assets/css/Swiper.css'
import Swipe from '../assets/js/swipe'
import $ from '../assets/js/jquery-1.7.2';
class Swiper extends Component {

  render() {
    let banner = this.props.banner
    return (
      <div className="banner">
        <ul className="clearfix">
              {
                banner && banner.map((item,index)=>{
                    return (
                        <li key={index}>
                          <img src={item.icon} alt=""/>
                          <div className="text-box">
                            <h2>{item.title1}</h2>
                            <p>{item.title2}</p>
                          </div>
                        </li>
                      )
                  })
                }
        </ul>
      </div>
    );
  }
  componentDidUpdate(){
    new Swipe($('.banner')[0],{
      auto:2000,
      continuous:true,
      stopPropation:true,
      callback:function (index,element){
        $('.banner ol li').removeClass('active');
        $('.banner ol li').eq(index).addClass('active');
      }
    })
  }
    

}

export default Swiper;