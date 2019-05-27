import React,{Component} from 'react'
import Footer from '../components/Footer'
import connect from 'react-redux/es/connect/connect'

class App extends Component{
    render(){
        return (
            <div className="App">
                <Footer></Footer>
            </div>
        )
    }
}

const State=state=>({
    footer:state.footer
})
const Dispatch=dispatch=>({
    Footer:(bl)=>dispatch({type:'FOOTER',payload:bl})
})

export default connect(State,Dispatch)(App);