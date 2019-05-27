import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import '../assets/css/Reg.css'
import axios from 'axios';
import connect from 'react-redux/es/connect/connect'
import { axios3 } from '../store/actions'
class Reg extends Component{
    state={
        username:'',
        password:''
    }


    render(){
        return (
            <div className="Reg">
                <div className="header">
                    <div className="header-background"></div>
                        <div className="toolbar statusbar-padding">
                            <span className="iconfont icon-houtui" onClick={()=>{
                                this.props.history.go(-1)
                            }}></span>
                            <div className="header-title">
                            <div className="title">注册</div>
                        </div>
                    
                    </div>
                </div> 
                <div className="dl-top">
                </div>
                <input type="text" name="username" value={this.state.username} placeholder="账号" onChange={this.chengeInt} />
                <input type="text" name="password" value={this.state.password} placeholder="密码" onChange={this.chengeInt} />
                <input type="button" name="button" value="注册" onClick={this.reg} />
                <div className="last">
                    <Link to='/Login' className="zhleft">登录账号</Link>
                    <a href="" className="zhright">忘记密码</a>
                </div>
            </div>
        )
    }
    chengeInt=(eve)=>{
        this.setState({
            [eve.target.name]:eve.target.value
        })
    }

    reg= ()=>{
        if(this.state.username !== '' && this.state.password !== ''){
            let formData = new FormData();
            formData.append("username",this.state.username)
            formData.append("password",this.state.password)

            // let res= await axios({
            //     url:"/api/reg",
            //     method:"POST",
            //     data:formData
            // })
            this.props.get({
                url:"/api/reg",
                method:"POST",
                data:formData,
                typename:'REG'
            }).then(
                error=>{
                    if(error === 0){
                        alert('注册成功，跳转登录页面')
                        this.props.history.push('/login')
                    }else{
                        alert("注册失败，请重试")
                    }

                }
            )
        }else{
            alert("注册失败，请重试")
        }
    }

}

const State = (state)=>({
    user:state.user
})

const Dispatch = (dispatch)=>({
    get:({url,method,data,typename})=>dispatch(axios3({url,method,data,typename}))
})


export default connect(State,Dispatch)(Reg)