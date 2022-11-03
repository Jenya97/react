import data from "../../Component/Main/Goods/datagoods.json";
export const initialState = {
  favorite: JSON.parse(localStorage.getItem("favorite")) ?? [],
  basket: JSON.parse(localStorage.getItem("basket")) || [],
  products: data,
};

export const ReducerFavorite = (state = initialState.favorite, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      localStorage.setItem(
        "favorite",
        JSON.stringify([
          ...state,
          initialState.products.find((item) => item.id === action.payload.id),
        ])
      );
      return [
        ...state,
        initialState.products.find((item) => item.id === action.payload.id),
      ];
    default:
      return state;
  }
};

export const ReducerBasket = (state = initialState.basket, action) => {
  switch (action.type) {
    case "ADD_BASKET":
      const addItems = [
        ...state,
        initialState.products.find(
          (item) => item.id === action.payload.id && { ...item, count: item.count++}) ];
      localStorage.setItem("basket", JSON.stringify(addItems));
      return addItems;
    case "DELETE":
      const delItems = state.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("basket", JSON.stringify(delItems));
      return delItems;
    default:
      return state;
  }
};
export const ReducerProduct = (state = initialState.products, action) => {
  switch (action.type) {
    case "ADD_BASKET":
      return state;
    default:
      return state;
  }
};
