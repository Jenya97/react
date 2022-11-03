export const counterState2={
    count2:0
};

export const counterReducer2=(state=counterState2.count2, action)=>{
        if(action.type==="ADD2"){
            return state+action.payload
        }
        return state
}

export const counterCreator2=(num)=>({
    type:"ADD2",
    payload:num
})