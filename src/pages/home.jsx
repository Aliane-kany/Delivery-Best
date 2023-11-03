import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../component/navbar";
import Card from "../component/card";
import welcome from "../pages/Girl.png";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://klabblogapi.onrender.com/api/klab/blog/read")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((res) => {
        if (res.data) {
          setPosts(res.data);
        }
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  console.log("POSTS", posts);

  return (
    <div>
      <Navbar />
      <section className="hero">
        <div className="welcome-container">
          <div className="welcome-left-side">
            <img src={welcome} alt="image" />
          </div>
          <div className="welcome-right-side">
            <h2>Welcome...</h2>
            <div className="paragraph">
              <p className="paragraph-h">
                I am Aliane – photographer & Influencer. My life motto: Dance
                like there’s nobody watching love like you’ll never be hurt. Be
                who you are and say what you feel… My life motto: Dance like
                there’s nobody watching love like you’ll never be hurt. Be who
                you are and say what you feel…
              </p>
            </div>
            <div className="find-more">
              <button>FIND MORE</button>
            </div>
          </div>
        </div>
      </section>

      <section className="grid-container">
        {loading ? (
          <p>Loading posts...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : posts.length > 0 ? (
          posts.map((blog) => <Card key={blog.id} cardData={blog} />)
        ) : (
          <p>No posts available.</p>
        )}
      </section>

      <div className="main-h">
        <h2 className="follow-me">FOLLOW ME ...</h2>
        <div className="main-iconn">
          <div className="home-para"></div>
          <div className="long-para">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
              eius sit blanditiis rem totam asperiores quibusdam quidem error
              necessitatibus. Nemo tenetur rem odio exercitationem aliquam
              soluta quidem odit, voluptates est. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Dignissimos debitis veritatis ea
              eveniet, tempore delectus saepe, dolor voluptatum nam numquam odio
              praesentium fugit natus libero distinctio, odit atque itaque
              iusto!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
