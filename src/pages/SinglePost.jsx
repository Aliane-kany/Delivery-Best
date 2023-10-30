// import Comment from "../asset/Girl4.jpg";
// import first from "../asset/Girl8.jpg";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import first from "../asset/Girl1.png";
import Navbar from "../component/navbar";

function SinglePost() {
  const { _id } = useParams();
  const [blogData, setBlogData] = useState({});
  const [loading, setLoading] = useState(true);
  const [comment, setComments] = useState([]);
  console.log("comment: ", comment);
  const [message, setMessage] = useState("");
  console.log("message is: ", message);

  useEffect(() => {
    fetch(`https://klabblogapi.onrender.com/api/klab/blog/read/${_id}`)
      .then((response) => response.json())
      .then((data) => {
        setBlogData(data.data);
        setComments(data.data.Comments || []);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [_id]);

  console.log("POSTS", blogData);

  if (!blogData) {
    return <div>Loading...</div>;
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("message", message);

    // Retrieve the token from localStorage
    const token = localStorage.getItem("token");

    console.log("token", token);

    if (token) {
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      fetch(`https://klabblogapi.onrender.com/api/klab/comment/create/${_id}`, {
        method: "POST",
        headers: headers,
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            setMessage("");
            console.log("blog added");
            alert("Comment added successfully");
            return response.json();
          } else {
            console.error("Request failed with status:", response.status);
            alert("Request failed with status:", response.status);
          }
        })
        .catch((error) => {
          alert("Fetch error:", error);
        });
    } else {
      alert("Token not found in localStorage. Please log in.");
    }
  };

  return (
    <>
    <Navbar/>
    <div className="all-in-comment">
      <div className="comment-pic">
        <div className="comment-image">
          <img src={blogData.blogImage} alt="image" />
        </div>
        <div className="paragraph-in-comment">
          <h2>{blogData.title}</h2>
          <p>{blogData.content}</p>
          <p>
            {blogData.creator} | {blogData.PostedDate}
          </p>
        </div>
      </div>

      {!loading && (
        <>
          <div className="blog-title">
            <h1>{blogData.title}</h1>
          </div>
          <div className="image-title">
            <img src={blogData.image} alt="Ghost of tsushima" />
          </div>
          <div className="single-description">
            <div className="author-category-date">
              <div className="author-single">
                <span>
                  {blogData.author.firstname.charAt(0).toUpperCase() +
                    blogData.author.firstname.slice(1)}
                </span>
              </div>
              <div className="category-single">
                Category: <span>{blogData.category}</span>
              </div>
              <div className="date-single">
                Date: <span>October 9, 2023</span>
              </div>
            </div>
            <div className="description">
              <p>{blogData.content}</p>
            </div>
          </div>
        </>
      )}
      <div className="main">
        <form onSubmit={handleSubmit}>
          <h2>// LEAVE COMMENT //</h2>
          <div className="addcommenthere">
            <textarea
              type="text"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              placeholder="Add your comment..."
            />
          </div>
          <div className="send-buttonn">
            <button type="submit">POST COMMENT</button>
          </div>
        </form>
      </div>

      {/* <h2>// COMMENTS //</h2> */}

      <div className="comment-container">
        {Array.isArray(comment) && comment.length > 0 ? (
          comment.map((comments, index) => (
            <div key={index} className="comment">
              <div className="comment-content">
                <div className="comment-header">
                  <div className="imagecomment">
                    {/* <img src={first} alt=" " /> */}
                  </div>
                  <h3>Name : {comments.author.Fname}</h3>
                  <p>Comment : {comments.message}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No comments available.</p>
        )}
      </div>
    </div>
    </>
  );
}

export default SinglePost;
