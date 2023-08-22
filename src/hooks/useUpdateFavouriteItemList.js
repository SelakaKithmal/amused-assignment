import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getItemById } from "../services/items"
import { setFavouritesList } from "../store/actions/favourites";


const useUpdateFavouriteItemList = () => {
  const dispatch = useDispatch();
  const favourites_from_redux = useSelector((state) => state.favourites?.items);
  const [favouriteId, setFavouriteId] = useState(null);

  useEffect(() => {
    const fetchItemById = async (id) => {
      return await getItemById(id).then((response) => {
        return response?.data?.drinks[0];
      });
    }

    const identifyIfAlreadyExists = (id) => {
      let condition = false;
      favourites_from_redux?.map((item) => {
        if (item?.idDrink === id) {
          condition = true;
        }
        return false;
      });
      return condition;
    }

    if (favouriteId && !identifyIfAlreadyExists(favouriteId)) {
      fetchItemById(favouriteId).then((res) => {
        dispatch(setFavouritesList(res))
      }).finally(() => {
        setFavouriteId(null)
      });
    }

    return () => { };
  }, [favouriteId, dispatch, favourites_from_redux]);

  return [favourites_from_redux, setFavouriteId];
};

export default useUpdateFavouriteItemList;