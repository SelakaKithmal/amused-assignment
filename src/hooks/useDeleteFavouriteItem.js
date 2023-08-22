import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromFavouritesList } from "../store/actions/favourites";


const useDeleteFavouriteItem = () => {
  const dispatch = useDispatch();
  const favourites_from_redux = useSelector((state) => state.favourites?.items);
  const [deleteFavouriteId, setDeleteFavouriteId] = useState(null);

  useEffect(() => {
    const arrayRemove = async (arr, value) => {
      return await arr.filter((ele) => {
        return ele?.idDrink !== value;
      });
    }

    deleteFavouriteId && arrayRemove(favourites_from_redux, deleteFavouriteId).then((resultedArr) => {
      dispatch(deleteFromFavouritesList(resultedArr))
    }).finally(() => {
      setDeleteFavouriteId(null)
    })

    return () => { };
  }, [dispatch, deleteFavouriteId, favourites_from_redux]);

  return [setDeleteFavouriteId];
};

export default useDeleteFavouriteItem;