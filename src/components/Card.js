import { SWIGGY_IMAGE_URL } from "../utils/constants";

const Card = (props) => {
  // console.log(props.data);
  return (
    <div id="card">
      <div id="imageWrapper">
        <img src={SWIGGY_IMAGE_URL + props.data.cloudinaryImageId} />
      </div>
      <div id="cardText">
        <div id="name">{props.data.name}</div>

        <div id="rating">
          <span> Rating :{props.data.avgRatingString} </span>
        </div>
        <div id="deliveryTime">
          <span> {props.data.sla.slaString}</span>
        </div>
        <div id="cusine">{props.data.cuisines.slice(0, 3).join(",  ")}</div>
        <div id="area">{props.data.areaName}</div>
      </div>
    </div>
  );
};

export default Card;
