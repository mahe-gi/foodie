import Card from "./Card";
import { SWIGGY_API } from "../utils/constants";
import { useEffect, useState } from "react";
import ShimmerCard from "./Shimmer";
import { Link } from "react-router-dom";

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
        <div id="shimmer-ui">
          {Array(10)
            .fill(null)
            .map((e, i) => {
              return <ShimmerCard key={i} />;
            })}
        </div>
      ) : (
        <div id="rest">
          {filterdArr.map((e) => {
            return (
              <Link
                to={"/restaurents/" + e.info.name}
                key={e.info.name}
                id="card"
              >
                <Card data={e.info} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Body;
