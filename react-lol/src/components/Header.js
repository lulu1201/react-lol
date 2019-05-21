import React,{Component} from 'react'
import { Link, Route } from 'react-router-dom'
import '../assets/css/Header.css'


class Header extends Component{
    render(){
        return (
            <div className="header">
                <Link to="/login" className="header-i">
				    <span className="header-i" className="iconfont icon-denglu"></span>
                </Link>
                <h3 className="header-h">首页</h3>
                <span className="header-span"  className="iconfont icon-ico"></span>
			</div>
            
        )
    }
}

export default Header;