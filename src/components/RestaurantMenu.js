import { useEffect, useState } from "react";
import ShimmerCard from "./Shimmer";

export const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 2000);
  }, []);

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setresInfo(json.data.cards[0].card.card.imageGridCards.info);
  }

  console.log(resInfo);
  return resInfo === null ? (
    <ShimmerCard />
  ) : (
    <div>
      {resInfo.map((e) => {
        return <MenuCard data={e} key={e.id} />;
      })}
    </div>
  );
};

const MenuCard = ({ data }) => {
  console.log(data);
  return (
    <div id="menu">
      <h1>{data.action.text}</h1>
    </div>
  );
};
