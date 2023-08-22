import { combineReducers } from "redux";
import itemReducer from "./item";
import favouritesReducer from "./favourites";

export default combineReducers({
  item: itemReducer,
  favourites: favouritesReducer
});