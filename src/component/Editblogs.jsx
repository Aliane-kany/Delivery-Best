import React from "react";
// import Girl1 from "../asset/Girl1"
import Button from "./button";
import { Link } from "react-router-dom";
const Editblogs = ({ name, image, description, link }) => {
  return (
    <div className="card">
      <div className="foto">
        <img src={image} alt="" className="product-image" />
      </div>
      <div className="card-body">
        <h4>{name}</h4>
        <p>{description}</p>
      </div>

      <div className="card-footer">
        <div>
          <Button name="Edit" />
        </div>
        <div>
          <Button name="Delete" />
        </div>
      </div>
    </div>
  );
};

export default Editblogs;
