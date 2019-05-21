import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/User.css'
import queryString from 'query-string'

class User extends Component{

    render(){
        let lis = localStorage.getItem("zl_user")
        let list = JSON.parse(lis)
        return (
            <div className="User">
                <div className="header">
                    <div className="header-background"></div>
                        <div className="toolbar statusbar-padding">
                            <span className="iconfont icon-houtui"></span>
                            <div className="header-title">
                            <div className="title">用户</div>
                            </div>
                    </div>
                </div>       
                <div className="my-info">
                    <div className="my-info-background"></div>
                    <img className="my-avatar" src={list.icon}/>
                    <span className="name">
                    <span>幸运值：{list.xing}</span>
                    </span>
                    <span className="my-vip">超级会员积分:{list.fans}</span>
                </div>
                <div className="my-car-shortcut">
                    <div className="layout-column b-line">
                        <a className="col"  rel="test" href="wait.html">
                            <span className="img-icon-name">昵称:{list.use}</span>
                        </a>
                        <a className="col"  rel="test" href="wait.html">
                            <span className="img-icon-name">性别:{list.pas}</span>
                        </a>
                        <a className="col" href="wait.html" rel="test">
                            <span className="img-icon-name">年龄:{list.age}</span>
                        </a>
                    </div>
                </div>
                <div className="devider b-line"></div>
                <div>
                    <div className="aui-list-cells">
                            <Link to="/home" className="aui-list-cell">
                            <div className="aui-list-cell-cn" onClick={this.use}>退出账号</div>
                            </Link>
                    </div>
                </div>
            </div>
        )
    }
    use=()=>{
        localStorage.removeItem('zl_user')
    }
    componentDidMount(){
        

    }
}

export default User;