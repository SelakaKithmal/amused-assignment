import ItemCard from "../ItemCard";
import { SEARCH_RESULT } from "../../constants/item-card-types";

function SearchResult(props) {
  let items = props.result;
  return (
    items && <div style={{ width: "100%" }}>
      <h2 style={{ paddingLeft: "15px" }}>Search results</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
        {items?.map((item, index) => <div key={index}>
          <ItemCard itemid={item.idDrink} cardname={item.strDrink} cardimage={item.strDrinkThumb} cardcategory={item.strCategory} type={SEARCH_RESULT} />
        </div>)}
      </div>
    </div>
  );
}

export default SearchResult;