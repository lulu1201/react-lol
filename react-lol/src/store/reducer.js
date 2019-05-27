let reducer=(state,action)=>{
    let {type,payload} = action;
    switch(type){
        case 'HOME':
            return Object.assign({},state,{home:payload})
        case 'BANNER':
            return Object.assign({},state,{banner:payload})
        case 'LIFE':
            return Object.assign({},state,{life:payload})
        case 'DETAIL':
            return Object.assign({},state,{detail:payload})
        case 'USER':
            return Object.assign({},state,{user:payload})
        case 'REG':
            return Object.assign({},state,{reg:payload})
        case 'FOOTER':
            return Object.assign({},state,{reg:payload})
        case 'LOADING':
            return Object.assign({},state,{loading:payload})

            default:
                return state;
    }
}

export default reducer;