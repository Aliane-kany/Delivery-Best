import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";
const Update = () => {
  const navigate = useNavigate("");

  const [title, setTitle] = useState("");
  const [blogImage, setIfoto] = useState("");
  const [content, setContent] = useState("");

  const identity = localStorage.getItem("id");
  const [single, setSingle] = useState({});
  console.log("data for blog:  ", single);

  const token = localStorage.getItem("token");

  console.log("Token =", token);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    // fetching data for single blog
    const singleBlog = async () => {
      console.log("identity", identity);
      const all = await axios.get(
        `https://klabblogapi.onrender.com/api/klab/blog/read/${identity}`
      );

      const result = all.data.data;

      setSingle(result);
    };
    singleBlog();
  }, []);
  const handleUpdate = async (e) => {
    console.log("helloo");
    e.preventDefault();

    const imageInput = document.getElementById("imageInput");
    const blogImage = imageInput.files[0];

    const formData = new FormData();
    formData.append("title", title);
    formData.append("blogImage", blogImage);
    formData.append("content", content);

    try {
      const response = await axios.put(
        `https://klabblogapi.onrender.com/api/klab/blog/update/${identity}`,
        formData,
        config
      );

      console.log(response);

      if (response.status === 201) {
        alert("Blog has been updated successfully!");
        // window.location.reload();
        navigate("/Blogs");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to update the blog.");
    }
  };
  return (
    <div className="maindashbord">
      <div className="main-dashbord">
        <h1>//UPDATE BLOG//</h1>

        <div className="input-dashbord">
          <input
            type="text"
            name="name"
            placeholder="title"
            value={title ? title : single.title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="add-description">
          <textarea
            placeholder="Description"
            name="message"
            value={content ? content : single.content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="upload-image">
          <input
            className="choose"
            type="file"
            id="imageInput"
            accept="image/*"
            name="image"
            // value={blogImage}
            onChange={(e) => setIfoto(e.target.value)}
          ></input>
          <button type="send" onClick={handleUpdate}>
            UPDATE BLOG
          </button>
        </div>
      </div>
    </div>
  );
};

export default Update;
