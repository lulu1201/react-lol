import React,{Component} from 'react'
import Swiper from '../components/Swiper'
import Header from '../components/Header'
import Font from '../components/Font'
import axios from 'axios'
import Loading from '../components/Loading'
import connect from 'react-redux/es/connect/connect'
import { axios1 } from '../store/actions';

class Home extends Component{
    state={
        list:[],
        banner:[],
        LoadingDate:false
    }


    render(){
        return (
            <div className="Home">
                {this.props.LoadingDate && <Loading />}
                <Header></Header>
                <Swiper banner={this.props.banner} props={this.props}></Swiper>
                <Font list={this.props.home} props={this.props}></Font>
            </div>
        )
    }
    // async componentDidMount(){
    //     this.setState({LoadingDate:true})
    //    let res = await axios({
    //        url:'/api/follow',params:{_limit:8}
    //    })
    //    this.setState({
    //     list:res.data.data
    //     })

    //     let rem = await axios({
    //         url:'/api/banner'
    //       })
    //       this.setState({
    //         banner:rem.data.data
    //         })
    //     this.setState({LoadingDate:false})
    // }
    componentDidMount(){
        this.props.get({url:'/api/follow',params:{_limit:8},typename:'HOME'})
        this.props.get({url:'/api/banner',params:{_limit:8},typename:'BANNER'})
    }

    
}
const State = (state)=>({
    home:state.home,
    banner:state.banner
})

const Dispatch = (dispatch)=>({
    get:({url,params,typename})=>dispatch(axios1({dispatch,url,params,typename}))
})


export default connect(State,Dispatch)(Home)