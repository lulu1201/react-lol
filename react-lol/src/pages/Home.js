import React,{Component} from 'react'
import Swiper from '../components/Swiper'
import Header from '../components/Header'
import Font from '../components/Font'
import axios from 'axios'
class Home extends Component{
    state={
        list:[],
        banner:[]
    }


    render(){
        return (
            <div className="Home">
                <Header></Header>
                <Swiper banner={this.state.banner} props={this.props}></Swiper>
                <Font list={this.state.list} props={this.props}></Font>
            </div>
        )
    }
    async componentDidMount(){
       let res = await axios({
           url:'/api/follow',params:{_limit:8}
       })
       this.setState({
        list:res.data.data
        })

        let rem = await axios({
            url:'/api/banner'
          })
          this.setState({
            banner:rem.data.data
            })
    }
    
}

export default Home;