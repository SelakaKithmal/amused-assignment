import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRandomItem } from "../services/items"
import { setItemList } from "../store/actions/item";


const useGetItemList = () => {
  const dispatch = useDispatch();
  const items_from_redux = useSelector((state) => state.item?.items);
  const [triggerHook, setTriggerHook] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      let itemArray = [];
      while (itemArray.length < 5) {
        await getRandomItem().then((response) => {
          return itemArray.push(response?.data?.drinks[0]);
        });
      }
      return itemArray;
    };


    if (items_from_redux.length < 5 || triggerHook) {
      fetchItems().then((res) => {
        dispatch(setItemList(res))
        if (triggerHook)
          setTriggerHook(false)
      });
    }
    return () => { };
  }, [triggerHook, dispatch, items_from_redux.length]);

  return [items_from_redux, setTriggerHook];
};

export default useGetItemList;