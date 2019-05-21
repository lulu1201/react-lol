import React,{Component} from 'react'
import { NavLink,Switch,Route,Redirect } from 'react-router-dom'
import '../assets/css/Footer.css'
import Home from '../pages/Home'
import Life from '../pages/Life'
import Detail from '../pages/Detail'
import Sort from '../pages/Sort'
import Shopping from '../pages/Shopping'
import User from '../pages/User'
import Login from '../pages/Login'
import Reg from '../pages/Reg'
import AuthRoute from '../guard/Auth'

class Footer extends Component{
    render(){
        return (
            <div className="footer">
				<div className="tab-bar tab-bottom">
				<NavLink className="tab-button active" to="/home"><span className="iconfont icon-shouye"></span><span className="tab-button-txt">首页</span></NavLink>
				<NavLink className="tab-button cached" to="/life"><span className="iconfont icon-shenghuo"></span><span className="tab-button-txt">生活</span></NavLink>
				<NavLink className="tab-button cached" to="/sort"><span className="iconfont icon-icon"></span><span className="tab-button-txt">分类</span></NavLink>
				<NavLink className="tab-button cached" to="/shopping"><span className="iconfont icon-gouwuche"></span><span className="tab-button-txt">购物车</span></NavLink>
				<NavLink className="tab-button cached" to="/user"><span className="iconfont icon-icon-test"></span><span className="tab-button-txt">我的</span></NavLink>
			</div>
			<div>
			<NavLink className="tab-button cached" to="/error"></NavLink>

			</div>
			<Switch>
				<Route path="/home" component={ Home }></Route>
				<Route path="/life" component={ Life }></Route>
				<Route path="/detail/:id" component={ Detail }></Route>
				<Route path="/sort" component={ Sort }></Route>
				<Route path="/shopping" component={ Shopping }></Route>
				<AuthRoute path="/user" component={ User }></AuthRoute>
				<Route path="/login" component={ Login }></Route>
				<Route path="/reg" component={ Reg }></Route>
				<Redirect exact from="/" to="/home"></Redirect>
				<Route component={Error}></Route>
			</Switch>
			</div>
        )
    }
}

export default Footer;