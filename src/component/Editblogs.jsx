import React from "react";
import Button from "./button";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
const Editblogs = ({ id, name, image, description, link }) => {
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);

  const token = localStorage.getItem("token");
  console.log("token", token);

  const handleDelete = (e) => {
    e.preventDefault();
    // Close the delete confirmation dialog
    setDeleteConfirmationOpen(false);
    axios
      .delete(`https://klabblogapi.onrender.com/api/klab/blog/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        alert("Blog deleted");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting data", error);
        alert("failed to delete");
      });
  };
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
          <Link to="/Update">
            {/* <button type="submit" onClick={localStorage.setItem("id", id)}> */}
            <button
              type="submit"
              onClick={(e) => {
                localStorage.setItem("id", id);
              }}
            >
              EDIT
            </button>
          </Link>
        </div>
        <div>
          <button
            className="action-btn"
            onClick={() => setDeleteConfirmationOpen(true)}
          >
            Delete
          </button>

          <div></div>
        </div>
      </div>
      {deleteConfirmationOpen && (
        <div className="delete-confirmation">
          <p>Are you sure you want to delete this blog?</p>
          <button onClick={handleDelete}>Yes</button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setDeleteConfirmationOpen(false);
            }}
          >
            No
          </button>
        </div>
      )}
    </div>
  );
};

export default Editblogs;
