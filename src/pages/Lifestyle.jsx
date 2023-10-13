import React from "react";
import Navbar from "../component/navbar";
import Card from "../component/card";
import welcome1 from "../asset/Girl1.png";
import welcome2 from "../asset/Girl2.jpg";
import welcome3 from "../asset/Girl9.jpg";
import welcome4 from "../asset/Girl4.jpg";
import welcome5 from "../asset/Girl5.jpg";
import welcome6 from "../asset/Girl6.jpg";
import welcome7 from "../asset/Girl7.jpg";
import welcome8 from "../asset/Girl8.jpg";
import welcome9 from "../asset/Girl9.jpg";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"

const Lifestyle = () => {
  const products = [
    {
      name: "Yoga Changed It All",
      image: welcome1,
      price: "Nov 04-",
      Sharee: "share",
      description:
        "You ve gotta dance like there s nobody watching, love like you ll never be hurt sing like theres nobody",
      link: "/cart",
    },
    {
      name: "Make Me Smile",
      image: welcome2,
      price: "Nov 04-",
      Sharee: "share",
      description:
        "You ve gotta dance like there s nobody watching, love like you ll never be hurt sing like theres nobody",
      link: "/cart",
    },
    {
      name: "Make Me Smile",
      image: welcome3,
      price: "Nov 04-",
      Sharee: "share",
      description:
        "You ve gotta dance like there s nobody watching, love like you ll never be hurt sing like theres nobody",
      link: "/cart",
    },

    {
      name: "Autumn Flowers",
      image: welcome4,
      price: "Nov 04-",
      Sharee: "share",

      description:
        "You ve gotta dance like there s nobody watching, love like you ll never be hurt sing like theres nobody",
      link: "/cart",
    },
    {
      name: "Autumn Gifts",
      image: welcome5,
      price: "Nov 04-",
      Sharee: "share",
      description:
        "You ve gotta dance like there s nobody watching, love like you ll never be hurt sing like theres nobody",
      link: "/cart",
    },
    {
      name: "Make Me Smile",
      image: welcome6,
      price: "Nov 04-",
      Sharee: "share",
      description:
        "You ve gotta dance like there s nobody watching, love like you ll never be hurt sing like theres nobody",
      link: "/cart",
    },
    {
      name: "From Bali",
      image: welcome7,
      price: "Nov 04-",
      Sharee: "share",
      description:
        "You ve gotta dance like there s nobody watching, love like you ll never be hurt sing like theres nobody",
      link: "/cart",
    },
    {
      name: "Our New Project",
      image: welcome8,
      price: "Nov 04-",
      Sharee: "share",
      description:
        "You ve gotta dance like there s nobody watching, love like you ll never be hurt sing like theres nobody",
      link: "/cart",
    },
    {
      name: "Make Me Smile",
      image: welcome9,
      price: "Nov 04-",
      Sharee: "share",
      description:
        "You ve gotta dance like there s nobody watching, love like you ll never be hurt sing like theres nobody",
      link: "/cart",
    },
  ];
  return (
    <div>
      <Navbar />

      <section className="grid-container">
        {products.map((product, index) => (
          <Card
            key={index}
            name={product.name}
            image={product.image}
            price={product.price}
            sharee={product.sharee}
            description={product.description}
            link={product.link}
          />
        ))}
      </section>
    </div>
  );
};

export default Lifestyle;
