
import ItemCard from "../../components/ItemCard";
import SearchBar from "../../components/SearchBar";
import { DEFAULT } from "../../constants/item-card-types";
import useGetItemList from "../../hooks/useGetItemList";

function Home() {
  const [itemList, setTrigger] = useGetItemList()
  let items = itemList;
  return (
    <div >
      <SearchBar />
      <div className="row col-12" style={{ padding: "15px" }}> <h2 style={{ paddingRight: "10px" }}>Trending Cocktails</h2>
        <button type="button" className="btn btn-success btn-sm" onClick={() => setTrigger(true)}>Refresh <i className="bi bi-arrow-clockwise" /></button ></div>
      <div style={{ width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
          {items?.map((item, index) => <div key={index}>
            <ItemCard itemid={item.idDrink} cardname={item.strDrink} cardimage={item.strDrinkThumb} cardcategory={item.strCategory} type={DEFAULT} />
          </div>)}
        </div>
      </div>
    </div>
  );
}

export default Home;