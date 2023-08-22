import { ITEMS_GET } from "./types";

export const setItemList = (itemList) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: ITEMS_GET,
                payload: itemList,
            });
        } catch (err) {
            console.error("err", err);
        }
    };
};