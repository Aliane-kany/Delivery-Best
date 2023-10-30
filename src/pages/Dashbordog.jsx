import React, { Component } from "react";
import "../pages/Dashbordog.css";
import { AiFillEye } from "react-icons/ai";
import { BsPostcard } from "react-icons/bs";
import { BiSolidCommentDots } from "react-icons/bi";
import { PiUsersFill } from "react-icons/pi";
import Dashbordognav from "../component/Dashbordognav";
import { useState, useEffect } from "react";
import axios from "axios";
function Dashbordog() {
  // ========================= fetching all blogs ===================
  const [fetchDatas, setFechtDatas] = useState([]);
  useEffect(() => {
    const blogsDatas = async () => {
      const response = await axios.get(
        "https://klabblogapi.onrender.com/api/klab/blog/read"
      );
      const res = await response.data.data;
      setFechtDatas(res);
    };
    blogsDatas();
  }, []);
  console.log("new stuf", fetchDatas);

  // ===============================================end===========================
  const [fetchusers, setFechtusers] = useState([]);
  useEffect(() => {
    const blogsusers = async () => {
      const response = await axios.get(
        "https://klabblogapi.onrender.com/api/klab/user/read"
      );
      const res = await response.data.data;
      setFechtusers(res);
    };
    blogsusers();
  }, []);
  console.log("new stuf", fetchusers);

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
                  <span class="big">{fetchDatas.length}</span>
                  Post
                </div>
              </div>

              <div class="info-box">
                <div class="box-icon">
                  <AiFillEye size={20} color="black" />
                </div>

                <div class="box-content">
                  <span class="big">132</span>
                  views
                </div>
              </div>

              <div class="info-box active">
                <div class="box-icon">
                  <BiSolidCommentDots size={20} color="black" />
                </div>

                <div class="box-content">
                  <span class="big">18</span>
                  Comments
                </div>
              </div>

              <div class="info-box">
                <div class="box-icon">
                  <PiUsersFill size={20} color="black" />
                </div>

                <div class="box-content">
                  <span class="big">{fetchusers.length}</span>
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
