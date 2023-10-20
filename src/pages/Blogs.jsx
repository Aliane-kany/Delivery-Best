// import React from "react";
import Editblogs from "../component/Editblogs";
// import welcome1 from "../asset/Girl1.png";
// import welcome2 from "../asset/Girl2.jpg";
// import welcome3 from "../asset/Girl9.jpg";
import welcome4 from "../asset/Girl4.jpg";
import welcome5 from "../asset/Girl5.jpg";
import welcome6 from "../asset/Girl6.jpg";
import welcome7 from "../asset/Girl7.jpg";
import welcome8 from "../asset/Girl8.jpg";
import welcome9 from "../asset/Girl2.jpg";
import { Link } from "react-router-dom";
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

const Blogs = () => {
  const products = [
    // {
    //   name: "Yoga Changed It All",
    //   image: welcome1,
    //   description:
    //     "You ve gotta dance like there s nobody watching, love like you ll never be hurt sing like theres nobody",
    //   link: "/cart",
    // },
    // {
    //   name: "Make Me Smile",
    //   image: welcome2,
    //   price: "Nov 04-",
    //   Sharee: "share",
    //   description:
    //     "You ve gotta dance like there s nobody watching, love like you ll never be hurt sing like theres nobody",
    //   link: "/cart",
    // },
    // {
    //   name: "Make Me Smile",
    //   image: welcome3,
    //   price: "Nov 04-",
    //   Sharee: "share",
    //   description:
    //     "You ve gotta dance like there s nobody watching, love like you ll never be hurt sing like theres nobody",
    //   link: "/cart",
    // },



    // function SingleBlog() {
    //   const { _id } = useParams();
    //   const [blogData, setBlogData] = useState({});
    //   useEffect(() => {
    //     fetch(`https://my-first-blog-apis.onrender.com/api/myblog/blog/read/${_id}`)
    //       .then((response) => response.json())
    //       .then((data) => {
    //         setBlogData(data.data);
    //       })
    //       .catch((error) => {
    //         console.error('Error fetching data:', error);
    //       });
    //   }, [_id]);
    //   console.log("POSTS", blogData);
    //   if (!blogData) {
    //     return <div>Loading...</div>;
    //   }
    //   return (
    //     <>
    //       <Navbar />
    //       <div className="single-blog">
    //         <div className="single-card">
    //           <div className="card-image">
    //             <img src={blogData.PostImage} alt="image" />
    //           </div>
    //           <h2>{blogData.PostTitle}</h2>
    //           <p>{blogData.PostContent}</p>
    //           <p>By {blogData.creator} | {blogData.PostedDate}</p>
    //         </div>
    //       </div>
    //       <Comment />
    //     </>
    //   );
    // }


    {
      name: "Autumn Flowers",
      image: welcome4,
      description:
        "You ve gotta dance like there s nobody watching, love like you ll never be hurt sing like theres nobody",
      link: "/cart",
    },
    {
      name: "Autumn Gifts",
      image: welcome5,
      description:
        "You ve gotta dance like there s nobody watching, love like you ll never be hurt sing like theres nobody",
      link: "/cart",
    },
    {
      name: "Make Me Smile",
      image: welcome6,
      description:
        "You ve gotta dance like there s nobody watching, love like you ll never be hurt sing like theres nobody",
      link: "/cart",
    },
    {
      name: "From Bali",
      image: welcome7,
      description:
        "You ve gotta dance like there s nobody watching, love like you ll never be hurt sing like theres nobody",
      link: "/cart",
    },
    {
      name: "Our New Project",
      image: welcome8,
      description:
        "You ve gotta dance like there s nobody watching, love like you ll never be hurt sing like theres nobody",
      link: "/cart",
    },
    {
      name: "Make Me Smile",
      image: welcome9,
      description:
        "You ve gotta dance like there s nobody watching, love like you ll never be hurt sing like theres nobody",
      link: "/cart",
    },
  ];
  return (
    <div>
      {/* <Navbar /> */}

      <div className="add-new">
        <Link to="/Dashbord">
          <button type="submit">ADD NEW +</button>
        </Link>
      </div>

      <section className="grid-containerr">
        {products.map((product, index) => (
          <Editblogs
            key={index}
            name={product.name}
            image={product.image}
            description={product.description}
            link={product.link}
          />
        ))}
      </section>
    </div>
  );
};

export default Blogs;
