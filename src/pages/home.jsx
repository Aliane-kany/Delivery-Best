import React from 'react'
import Navbar from '../component/navbar'
import Card from '../component/card'
import welcome from '../pages/Girl.png'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import {BsFacebook} from "react-icons/bs"
import {FaInstagramSquare,FaTwitter} from "react-icons/fa"

const Home = () => {
    const products = [
        {
            name: 'Itel 31',
            image: 'https://plus.unsplash.com/premium_photo-1670328876789-2b3e51a3fd61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdhbGwlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
            price: '500$',
            description: 'This product is just for testing',
            link: '/cart'
        },
        {
            name: 'Iphone 19',
            image: 'https://plus.unsplash.com/premium_photo-1670328876789-2b3e51a3fd61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdhbGwlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
            price: '500$',
            description: 'This product is just for testing',
            link: '/cart'
        },
        {
            name: 'Tecno camon 19',
            image: 'https://plus.unsplash.com/premium_photo-1670328876789-2b3e51a3fd61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdhbGwlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
            price: '500$',
            description: 'This product is just for testing',
            link: '/cart'
        },
     
        {
            name: 'pixel 7',
            image: 'https://plus.unsplash.com/premium_photo-1670328876789-2b3e51a3fd61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdhbGwlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
            price: '500$',
            description: 'This product is just for testing',
            link: '/cart'
        },
        {
            name: 'redmi noto 7',
            image: 'https://plus.unsplash.com/premium_photo-1670328876789-2b3e51a3fd61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdhbGwlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
            price: '500$',
            description: 'This product is just for testing',
            link: '/cart'
        }

    ]
    return (
        <div>
            <Navbar />
            <div className="title-container">
                    <div className="title">
                        <div className="title-header">
                            <h4>Delivery of the
                                <br/> Best story</h4>
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
                        <p>I am Aliane – photographer &
                            Influencer. My life motto: Dance like
                            there’s nobody watching love like you’ll
                            never be hurt. Be who you are and say
                            what you feel…
                            My life motto: Dance like
                            there’s nobody watching love like you’ll
                            never be hurt. Be who you are and say
                            what you feel…
                        </p>
                        </div>
                        <div className="find-more">
                        <button>FIND MORE</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="grid-container">
             {/* {products.map((product, index)=>(
                <Card key={index} name={product.name}image={product.image} price={product.price} description={product.description} link={product.link}/>
             )
             )} */}
             
            </section>
            <div className="family">
                <div class></div>
            </div>
        </div>
    
    )
}

export default Home