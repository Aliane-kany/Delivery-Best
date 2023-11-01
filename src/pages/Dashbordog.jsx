import React, { Component } from "react";
import "../pages/Dashbordog.css";
import { AiFillEye } from "react-icons/ai";
import { BsPostcard } from "react-icons/bs";
import { BiSolidCommentDots } from "react-icons/bi";
import { PiUsersFill } from "react-icons/pi";
import Dashbordognav from "../component/Dashbordognav";
import { useState, useEffect } from "react";
import axios from "axios";

const apiUrlPosts = "https://klabblogapi.onrender.com/api/klab/blog/read";
const apiUrlUsers = "https://klabblogapi.onrender.com/api/klab/user/read";
const token = localStorage.getItem("token");

console.log("Token =", token);
function Dashbordog() {
  const [data, setData] = useState({
    userCount: 0,
    postCount: 0,
    viewCount: 0,
    commentCount: 0,
  });

  useEffect(() => {
    // Fetch posts data
    fetch(apiUrlPosts)
      .then((response) => response.json())
      .then((postData) => {
        const posts = postData.data;
        const postsCount = posts.length;

        let commentsCount = 0;
        let viewsCount = 0;

        // Loop through the posts to count comments and views
        posts.forEach((post) => {
          commentsCount += post.Comments.length;
          viewsCount += post.views;
        });

        // Update the data state with post counts
        setData((prevData) => ({
          ...prevData,
          postCount: postsCount,
          viewCount: viewsCount,
          commentCount: commentsCount,
        }));
      })
      .catch((error) => {
        console.error("Error fetching post data:", error);
      });

    // Fetch users data to count users
    fetch(apiUrlUsers, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`, // Include your authentication token here
      },
    })
      .then((response) => response.json())
      .then((userData) => {
        const userCount = userData.data.length;

        // Update the data state with user count
        setData((prevData) => ({
          ...prevData,
          userCount,
        }));
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <>
      <Dashbordognav />
      <div>
        <main class="content-wrap">
          <header class="content-head">
            {/* <h1>Delivery Best Story</h1> */}
            {/* <div class="action">
            <button>Save search</button>
          </div> */}
          </header>

          <div class="content">
            <section class="info-boxes">
              <div class="info-box">
                <div class="box-icon">
                  <BsPostcard size={20} color="black" />
                </div>

                <div class="box-content">
                  <span class="big">{data.postCount}</span>
                  Post
                </div>
              </div>

              <div class="info-box">
                <div class="box-icon">
                  <AiFillEye size={20} color="black" />
                </div>

                <div class="box-content">
                  <span class="big">{data.viewCount}</span>
                  views
                </div>
              </div>

              <div class="info-box active">
                <div class="box-icon">
                  <BiSolidCommentDots size={20} color="black" />
                </div>

                <div class="box-content">
                  <span class="big">{data.commentCount}</span>
                  Comments
                </div>
              </div>

              <div class="info-box">
                <div class="box-icon">
                  <PiUsersFill size={20} color="black" />
                </div>

                <div class="box-content">
                  <span class="big">{data.userCount}</span>
                  Users
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default Dashbordog;
