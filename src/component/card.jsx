import React from "react";
// import Girl1 from "../asset/Girl1"
import Button from "./button";
import { Link } from "react-router-dom";

const Card = ({ cardData }) => {
  const blogId = cardData._id;
  return (
    <div className="card">
      <div className="foto">
        <img src={cardData.blogImage} alt="" className="product-image" />
      </div>
      <h4 className="space">{cardData.title}</h4>
      <p className="spaces">{cardData.content}</p>
      <Link to={`/Blog/${blogId}`}>
        <Button name="Read" />
      </Link>
    </div>
  );
};

export default Card;
