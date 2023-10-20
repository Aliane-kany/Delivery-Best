import Comment from "../asset/Girl4.jpg";
import first from "../asset/Girl8.jpg";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function coment() {
  const { _id } = useParams();
  const [blogData, setBlogData] = useState({});
  useEffect(() => {
    fetch(`https://klabblogapi.onrender.com/api/klab/blog/read${_id}`)
      .then((response) => response.json())
      .then((data) => {
        setBlogData(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [_id]);
  console.log("POSTS", blogData);
  if (!blogData) {
    return <div>Loading...</div>;
  }
  return (
    <div className="all-in-comment">
      <div className="comment-pic">
        <div className="comment-image">
          <img src={Comment} alt="image" />
        </div>
        <div className="paragraph-in-comment">
          <h2>{blogData.PostTitle}</h2>
          <p>{blogData.PostContent}</p>
          <p>
            By {blogData.creator} | {blogData.PostedDate}
          </p>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Asperiores similique possimus aperiam nostrum tenetur ducimus
             mollitia alias dignissimos saepe, nulla incidunt eveniet voluptatibus
              voluptatem maiores libero numquam quidem vel eos.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Asperiores similique possimus aperiam nostrum tenetur ducimus
             mollitia alias dignissimos saepe, nulla incidunt eveniet voluptatibus
              voluptatem maiores libero numquam quidem vel eos.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Asperiores similique possimus aperiam nostrum tenetur ducimus
             mollitia alias dignissimos saepe, nulla incidunt eveniet voluptatibus
              voluptatem maiores libero numquam quidem vel eos.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Asperiores similique possimus aperiam nostrum tenetur ducimus
             mollitia alias dignissimos saepe, nulla incidunt eveniet voluptatibus
              voluptatem maiores libero numquam quidem vel eos.
              Asperiores similique possimus aperiam nostrum tenetur ducimus
             mollitia alias dignissimos saepe, nulla incidunt eveniet voluptatibus
              voluptatem maiores libero numquam quidem vel eos.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Asperiores similique possimus aperiam nostrum tenetur ducimus
             mollitia alias dignissimos saepe, nulla incidunt eveniet voluptatibus
              voluptatem maiores libero numquam quidem vel eos.
              </p> */}
        </div>
      </div>
      <div className="comment-page">
        <div className="first-person">
          <img src={first} image="image" />
        </div>
        <div className="comment-of-person">
          <h1>Sandos</h1>
          <h3> nov, 04</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            quo aut nemo qui facilis, repellendus veritatis, harum consequuntur
            alias excepturi illo corrupti laborum enim fuga? Aliquam vitae alias
            quo culpa.
          </p>
        </div>
        {/* <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing eli
            t. Labore dignissimos quidem magnam repellendus, et eligendi deleniti. Optio, dolore. Libero veniam eius aperiam perferendis impedit, unde dolore quibusdam! Aliquam, quisquam ipsum.</p>
        </div> */}
      </div>

      <div className="comment-page">
        <div className="first-person">
          <img src={first} image="image" />
        </div>
        <div className="comment-of-person">
          <h1>Toni</h1>
          <h3> nov, 04</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            quo aut nemo qui facilis, repellendus veritatis, harum consequuntur
            alias excepturi illo corrupti laborum enim fuga? Aliquam vitae alias
            quo culpa.
          </p>
        </div>
      </div>
      <div className="comment-page">
        <div className="first-person">
          <img src={first} image="image" />
        </div>
        <div className="comment-of-person">
          <h1>Cyiza</h1>
          <h3> nov, 10</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            quo aut nemo qui facilis, repellendus veritatis, harum consequuntur
            alias excepturi illo corrupti laborum enim fuga? Aliquam vitae alias
            quo culpa.
          </p>
        </div>
      </div>

      <div className="main">
        <div className="main-comment">
          <h1>//LEAVE A REPLY//</h1>
          <div className="page-comment">
            <div className="add-comment">
              <textarea placeholder="Add comment" name="message"></textarea>
            </div>

            <div className="input-comment">
              <input type="text" name="name" placeholder="Enter your name" />
              <input type="text" name="email" placeholder="Enter your email" />
            </div>
            <div class="comment-button">
              <button type="send">SEND COMMENT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default coment;
