import React,{Component} from 'react'
import '../assets/css/Detail.css'
import axios from 'axios';
class Detail extends Component{
    state={
        lists:[]
    }


    render(){
        let lists = this.state.lists
        return (
            <div className="Detail">
                <div className="header">
                    <div className="header-background"></div>
                    <div className="toolbar statusbar-padding">
                        <span className="bar-button back-button" className="iconfont icon-houtui" onClick={()=>{
                            this.props.history.go(-1)
                        }}></span>
                        <div className="header-title">
                            <div className="title">详情页面</div>
                        </div>
                    </div>
                </div>
                <div></div>
               {
                   lists && (<div className="detail1" key={lists.id}>
                                <img className="detail-img" src={lists.ims} />
                                <div className="detail-title">
                                    <span>作者：{lists.use}</span>
                                    <i>日期：{lists.date}</i>
                                </div>
                                <div className="detail-cont">
                                    <h3>{lists.title}</h3>
                                    <p>{lists.cont}</p>
                                </div>
                                <div className="detail-zan">
                                    <i className="detail-zan-you"><span className="iconfont icon-cai"></span>踩</i>
                                    <i className="detail-zan-zuo"><span className="iconfont icon-zan"></span>赞</i>
                                </div>
                            </div>)
               }
                
            </div>
        )
    }
    async componentDidMount(){
        let id = this.props.match.params.id;
        let res = await axios({
            url:"/api/follow/"+ id,
        })
        this.setState({
            lists:res.data.data
        })
    }

}

export default Detail;