import Card from "./Card";
import { SWIGGY_API } from "../utils/constants";
import { useEffect, useState } from "react";

const Body = () => {
  let [restaurants, setRestuarents] = useState([]);
  let [filterdArr, setfilteredArr] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await fetch(SWIGGY_API);
      const json = await res.json();
      setRestuarents(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setfilteredArr(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch {
      setfilteredArr([]);
    }
  };

  const handleSortRest = () => {
    const list = restaurants.filter((e) => {
      return e.info.avgRating > 4.3;
    });
    setfilteredArr(list);
  };

  let val = "";
  const inputHandler = (e) => {
    val = e.target.value;
  };

  const handleSearch = () => {
    let search = restaurants.filter((e) => {
      return e.info.name.toLowerCase().includes(val.toLowerCase());
    });
    setfilteredArr(search);
  };

  return (
    <div id="body">
      <div id="search">
        <input
          type="text"
          onChange={inputHandler}
          placeholder="Search Resturents"
        />
        <button onClick={handleSearch}>search</button>
        <button id="fourstar" onClick={handleSortRest}>
          4.3 rating above
        </button>
      </div>
      {filterdArr.length == 0 ? (
        <div>no restaurants found ! </div>
      ) : (
        <div id="rest">
          {filterdArr.map((e) => {
            return <Card key={e.info.name} data={e.info} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Body;
