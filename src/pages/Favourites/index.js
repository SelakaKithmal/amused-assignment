import ItemCard from "../../components/ItemCard";
import { FAVOURITES } from "../../constants/item-card-types";
import useUpdateFavouriteItemList from "../../hooks/useUpdateFavouriteItemList";

function Favourites(props) {
  const [favourites_from_redux] = useUpdateFavouriteItemList()
  let items = favourites_from_redux;
  return (
    <div >
      <h2>Favourites</h2>
      <div style={{ width: "100%" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
          {items?.map((item, index) => <div key={index}>
            <ItemCard itemid={item.idDrink} cardname={item.strDrink} cardimage={item.strDrinkThumb} cardcategory={item.strCategory} type={FAVOURITES} />
          </div>)}
        </div>
      </div>
    </div>
  );
}

export default Favourites;