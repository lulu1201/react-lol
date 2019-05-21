import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import '../assets/css/Login.css'
import axios from 'axios';
class Login extends Component{
    state={
        username:'',
        password:''
    }


    render(){
        return (
            <div className="Login">
                <div className="header">
                    <div className="header-background"></div>
                        <div className="toolbar statusbar-padding">
                            <span className="iconfont icon-houtui" onClick={()=>{
                                this.props.history.go(-1)
                            }}></span>
                            <div className="header-title">
                            <div className="title">登录</div>
                        </div>
                    
                    </div>
                </div> 
                <div className="dl-top">
                </div>
                <input type="text" name="username" value={this.state.username} onChange={this.changeIpt} placeholder="账号" />
                <input type="text" name="password" value={this.state.password} onChange={this.changeIpt}  placeholder="密码" />
                <input type="button" name="button" defaultValue="登录"  onClick={this.login}/>
                <div className="last">
                    <Link to='/reg' className="zhleft">注册账号</Link>
                    <a href="#" className="zhright">忘记密码</a>
                </div>
            </div>
        )
    }
    changeIpt = (eve) => {
        this.setState({
          [eve.target.name]:eve.target.value
        })
      }
    login = async()=>{
            let res = await axios({url:"/api/login",params:{username:this.state.username,password:this.state.password}})
            console.log(res.data)
            if(res.data.error === 0){
                localStorage.setItem('zl_user',JSON.stringify(res.data.data))
                this.props.history.push('/user')
                
            }else{
                alert('登录失败')
            }
    }

}

export default Login;