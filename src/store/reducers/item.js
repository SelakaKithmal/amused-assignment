
import { ITEMS_GET } from "../actions/types";

const DEFAULT_STATE = {
  items: []
};

const itemReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ITEMS_GET:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};

export default itemReducer;
