import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import JoditEditor from "jodit-react";
import Navbar from "../component/navbar";

const Dashbord = () => {
  const Navigate = useNavigate();
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [blogImage, setblogImage] = useState("");

  const token = localStorage.getItem("token");
  console.log("token", token);

  function handlecreateblog(event) {
    event.preventDefault();
    const imageInput = document.getElementById("imageInput");
    const blogImage = imageInput.files[0];

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("blogImage", blogImage);

    // Replace with your actual API key
    axios
      .post("https://klabblogapi.onrender.com/api/klab/blog/create", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
        alert("Post created successfully");
        Navigate("/Blogs");
        // Navigate should be done using React-Router's useHistory or Link components
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to create post");
      });
  }

  return (
    <>
      <Navbar />
      <div className="maindashbord">
        <div className="main-dashbord">
          <h1>//ADD BLOG//</h1>

          <div className="input-dashbord">
            <input
              type="text"
              name="name"
              placeholder="title"
              value={title}
              onChange={(e) => settitle(e.target.value)}
            />
          </div>
          <div className="add-description">
            <textarea
              placeholder="Description"
              name="message"
              value={content}
              onChange={(e) => setcontent(e.target.value)}
            ></textarea>
          </div>
          <div className="upload-image">
            <input
              className="choose"
              type="file"
              id="imageInput"
              name="image"
              value={blogImage}
              onChange={(e) => setblogImage(e.target.value)}
            ></input>
            <button type="send" onClick={handlecreateblog}>
              ADD BLOG
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashbord;
