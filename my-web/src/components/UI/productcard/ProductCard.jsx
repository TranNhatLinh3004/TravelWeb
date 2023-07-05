import React from "react";
import info1 from "../../../assets/info1.png";
import info2 from "../../../assets/info2.png";
import info3 from "../../../assets/info3.png";
import "./productcard.css";
import { Link } from "react-router-dom";

function ProductCard(props) {
  return (
    <div>
      <div className="destination">
        <img src={props.item.image} alt="" />
        <h3>
          <Link to={`/tour/${props.item.id}`}>{props.item.title}</Link>
        </h3>
        <p>{props.item.subTitle}</p>
        <div className="info">
          <div className="services">
            <img src={info1} alt="" />
            <img src={info2} alt="" />
            <img src={info3} alt="" />
          </div>
          <h4>{props.item.cost}</h4>
        </div>
        <div className="distance">
          <span>1000 Kms</span>
          <span>{props.item.duration}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
