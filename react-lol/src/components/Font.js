import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import '../assets/css/Font.css'


class Font extends Component{
    render(){
        return (
            this.props.list && this.props.list.map((item,index)=>{
               return <Link className="font" key={index} dataname="home" to={{pathname:'/detail/' + item._id}}>
                <div className="font-img">
                <img src={item.ims}/>
                </div>
                <div className="font-hp">
                    <h3>{item.use}</h3>
                    <p>{item.title}</p>
                </div>
                <span className="font-span">{item.date}</span>
			</Link>
            })
        )
    }
    
}

export default Font;