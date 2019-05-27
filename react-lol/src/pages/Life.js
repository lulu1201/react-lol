import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import '../assets/css/Life.css'
import axios from 'axios';
import connect from 'react-redux/es/connect/connect'
import { axios1 } from '../store/actions'
class Life extends Component{
    state={
        list:[]
    }


    render(){
        let list = this.props.life;
        return (
            <div className="Life">
                <div className="header">
                    <div className="header-background"></div>
                    <div className="toolbar statusbar-padding">
                        <div className="header-title">
                            <div className="title">爱生活</div>
                        </div>
                    </div>
                </div>
                <div></div>

                {
                    list && list.map((item,value)=>{
                        
                        return (
                            <Link 
                            className="aui-content-text" 
                            key={value} 
                            dataname="follow" 
                            list={this.props.life}
                            to={{
                                pathname:'/detail/' + item._id
                              }}
                              >
                                <div className="aui-content-title">
                                    <h2>{item.title}</h2>
                                </div>
                                <div className="my-car-thumbnail my-car-thumbnail-l"><img src={item.ims}/></div>
                                <div className="aui-content-p">
                                    <p>{item.cont}</p>
                                </div>
                                <div className="aui-coll-s b-line">
                                    <div className="aui-coll-l"><i className="aui-icon-zan"></i>点赞</div>
                                    <div className="aui-coll-f"><i className="aui-icon-shi"></i>分享</div>
                                </div>
                                <div className="devider b-line"></div>
                            </Link>
                        )
                    })
                }
                
            </div>
        )
    }
    componentDidMount(){
        // let res = await axios({url:'api/follow',params:{_limit:10}})
        // this.setState({
        //     list:res.data.data
        // })
        this.props.get({url:'api/follow',params:{_limit:10},typename:'LIFE'})
    }
}

const State = (state)=>({
    life:state.life,
})

const Dispatch = (dispatch)=>({
    get:({url,params,typename})=>dispatch(axios1({dispatch,url,params,typename}))
})


export default connect(State,Dispatch)(Life)