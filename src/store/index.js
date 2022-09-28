import { combineReducers, legacy_createStore as createStore } from "redux";
import { initialState, ReducerBasket, ReducerFavorite, ReducerProduct } from "./favorite/favorite";
export const store=createStore(combineReducers({
  favorite:ReducerFavorite,
  basket:ReducerBasket,
  products:ReducerProduct
}),
 initialState

)

