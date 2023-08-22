import { useEffect, useState } from "react";

import { getItemByName } from "../services/items"

const useSearchItemList = () => {

  const [searchName, setSearchName] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const fetchSearchItems = async () => {
      let searchArray = [];
      if (searchName) {
        await getItemByName(searchName).then((response) => {
          return searchArray.push(response?.data?.drinks);
        });
      }
      return searchArray;
    };

    fetchSearchItems().then((res) => {
      setSearchResult(res[0])
    });

    return () => { };
  }, [searchName]);

  return [searchResult, setSearchName];
};

export default useSearchItemList;