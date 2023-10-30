// import React from "react";
import Editblogs from "../component/Editblogs";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
// import Navbar from "../component/navbar";
import Dashbordognav from"../component/Dashbordognav"

const Blogs = () => {
  const [fetchData, setFechtData] = useState([]);
  console.log("All blog", fetchData);
  useEffect(() => {
    const blogsData = async () => {
      const response = await axios.get(
        "https://klabblogapi.onrender.com/api/klab/blog/read"
      );
      const res = await response.data.data;
      setFechtData(res);
    };
    blogsData();
  }, []);

  return (
    <div>
      {/* <Navbar /> */}
      <Dashbordognav/>

      <div className="add-new">
        <Link to="/Dashbord">
          <button type="submit">ADD NEW +</button>
        </Link>
      </div>

      <section className="grid-containerr">
        {fetchData.map((product, index) => (
          <Editblogs
            // fetchData={_id}
            key={index}
            id={product._id}
            name={product.title}
            image={product.blogImage}
            description={product.content}
            link={product.link}
          />
        ))}
      </section>
    </div>
  );
};

export default Blogs;
