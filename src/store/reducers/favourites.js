
import { FAVOURITES_GET, FAVOURITES_DELETE } from "../actions/types";

const DEFAULT_STATE = {
  items: []
};

const favouritesReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case FAVOURITES_GET:
      return { ...state, items: [...state.items, action.payload] };
    case FAVOURITES_DELETE:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};

export default favouritesReducer;
