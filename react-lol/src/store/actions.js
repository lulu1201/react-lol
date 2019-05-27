import axios from 'axios';

export let axios1 = ({dispatch,url,params,typename}) => {
    let sum = params ? axios({url,params}) : axios({url})
    sum.then(
        res=>{
            dispatch({type:typename,payload:res.data.data})
            dispatch({type:'LOADING',payload:false})
        }
    )
    return {type:'LOADING',payload:true}
}

export let axios2 = ({typename,url,params}) =>dispatch=> {
    dispatch({type:'LOADING',payload:false})
    return axios({url,params}).then(
        res=>{
            dispatch({type:typename,payload:res.data.data})
            dispatch({type:'LOADING',payload:false})
            return res.data.error
        }
    )
    
}

export let axios3 = ({typename,url,method,data}) =>dispatch=> {
    dispatch({type:'LOADING',payload:false})
    return axios({url,method,data}).then(
        res=>{
            dispatch({type:typename,payload:res.data.data})
            dispatch({type:'LOADING',payload:false})
            return res.data.error
        }
    )
    
}