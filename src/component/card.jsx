import React from "react";
import Button from "./button";
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";

function Card({ cardData }) {
  const blogId = cardData._id;
  return (
    <div className="card">
      <div className="foto">
        <img src={cardData.blogImage} alt="" className="product-image" />
      </div>
      <div className="box-body">
        <div className="box-title">
          <h4>{cardData.title}</h4>
        </div>
        <div className="box-content">
          <p>{cardData.content}</p>
        </div>
      </div>
      <div className="box-footer">
        <div>
          <button>
            <Link to={`/Blog/${blogId}`}>Read More</Link>
          </button>
        </div>
      </div>
      <div className="views">
        <p>
          Views <br />
          <AiFillEye size={20} color="black" />
          {cardData.views}
        </p>
      </div>
    </div>
  );
}

export default Card;
