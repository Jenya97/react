import data from '../../Component/Main/Goods/datagoods.json'
export const initialState={
    favorite:[],
    basket:[],
    products:data
}

export const ReducerFavorite=(state=initialState.favorite,action)=>{
    switch(action.type){
        case "ADD_FAVORITE":
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