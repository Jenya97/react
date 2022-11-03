export const counterState={
    count:0
};

export const counterReducer=(state=counterState.count, action)=>{
        if(action.type==="ADD"){
            return state+1
        }
        return state
}

export const counterCreator=()=>({
    type:"ADD",
})