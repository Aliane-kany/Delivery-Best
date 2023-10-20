
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../component/navbar";
import Card from "../component/card";
import welcome from "../pages/Girl.png";
import welcome1 from "../asset/Girl1.png";
import welcome2 from "../asset/Girl2.jpg";
import welcome3 from "../asset/Girl9.jpg";
import welcome4 from "../asset/Girl4.jpg";
import welcome5 from "../asset/Girl5.jpg";
import welcome6 from "../asset/Girl6.jpg";
import welcome7 from "../asset/Girl7.jpg";
import welcome8 from "../asset/Girl8.jpg";
import welcome9 from "../asset/Girl2.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare, FaTwitter } from "react-icons/fa";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getApi = async () => {
      const response = await axios.get(
        "https://klabblogapi.onrender.com/api/klab/blog/read"
      );
      const data = response.data.data;
      setPosts(data);
    };
    getApi();
  }, []);

  return (
    <div>
      <div className="title-container">
        <div className="title">
          <div className="title-header">
            <h4>
              Delivery of the
              <br /> Best story
            </h4>
          </div>
          <div className="title-icon">
            <BsFacebook />
            <FaInstagramSquare />
            <FaTwitter />
          </div>
        </div>
      </div>
      <section className="hero">
        <div className="welcome-container">
          <div className="welcome-left-side">
            <img src={welcome} alt="image" />
          </div>
          <div className="welcome-right-side">
            <h2>hello....</h2>
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
        {posts.length > 0 ? posts.map((post, index) => (
          <Card  key={post.id} cardData={post}/>
        )):<p>Loading...</p>}
      </section>

      <div className="main-h">
        <h2 className="follow-me">//FOLLOW ME//</h2>

        <div className="main-iconn">
          <div className="home-para">
            <p>Creating content from NYC</p>
          </div>
          <div className="long-para">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
              eius sit blanditiis rem totam asperiores quibusdam quidem error
              necessitatibus. Nemo tenetur rem odio exercitationem aliquam
              soluta quidem odit, voluptates est.
            </p>
          </div>
          <div className="home-icon">
            <BsFacebook />
            <FaInstagramSquare />
            <FaTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
