import React from "react";
// import Girl1 from "../asset/Girl1"
import Button from "./button";
import { Link } from "react-router-dom";

const Card = ({ name, image, description, link }) => {
  return (
    <div className="card">
      <div className="foto">
        <img src={image} alt="" className="product-image" />
      </div>
      <h4 className="space">{name}</h4>
      <p className="spaces">{description}</p>
      <h4>{link}</h4>
      <Link to="/Comment">
        <Button name="Read" />
      </Link>
    </div>
  );
};

export default Card;
