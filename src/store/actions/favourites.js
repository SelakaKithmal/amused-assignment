import { FAVOURITES_GET, FAVOURITES_DELETE } from "./types";

export const setFavouritesList = (itemList) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: FAVOURITES_GET,
                payload: itemList,
            });
        } catch (err) {
            console.error("err", err);
        }
    };
};

export const deleteFromFavouritesList = (itemList) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: FAVOURITES_DELETE,
                payload: itemList,
            });
        } catch (err) {
            console.error("err", err);
        }
    };
};