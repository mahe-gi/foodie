import Card from "./Card";
import { SWIGGY_API } from "../utils/constants";
import { useEffect, useState } from "react";

const Body = () => {
  let [restaurants, setRestuarents] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch(SWIGGY_API);
    const json = await res.json();
    setRestuarents(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <div id="body">
      {restaurants.map((e) => {
        return <Card key={e.info.name} data={e.info} />;
      })}
    </div>
  );
};

export default Body;
