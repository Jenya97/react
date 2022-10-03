import data from '../../Component/Main/Goods/datagoods.json'
export const initialState={
    favorite:JSON.parse(localStorage.getItem('favorite')) || [],
    basket:[],
    products:data
}

export const ReducerFavorite=(state=initialState.favorite,action)=>{
    let exist;
    switch(action.type){
        case "ADD_FAVORITE":
        exist=false;
        localStorage.setItem('favorite', JSON.stringify([...state,initialState.products.find(item=>item.id===action.payload.id)]));
        
        return [...state,initialState.products.find(item=>item.id===action.payload.id)]
        default:
           return state     
    }
}

export const ReducerBasket=(state=initialState.basket,action)=>{
    switch(action.type){
        case "ADD_BASKET":
            return state
       default:
           return state     
    }
}
export const ReducerProduct=(state=initialState.products,action)=>{
    switch(action.type){
        case "ADD_BASKET":
            return state
       default:
           return state     
    }
}