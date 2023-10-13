import React, { useState } from 'react'
// import {FaBar} from 'react-icons/fa'
import Button from "./button"
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(true)
    console.log("MENU OPEN", mobileMenuOpen)
    return (
        <nav>
            {/* <h3>Logo</h3> */}
            <ul>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/lifestyle">Lifestyle</Link> </li>
                <li>  <Link to="/about">About</Link></li>
                <li> <Link to="/contact">Contact</Link> </li>
                <li> <Link to="/contact">Login</Link> </li>
            </ul>

            <ul className={`mobile-menu ${mobileMenuOpen === false?' hidden':''}`}>
                <Link to="/">Home</Link>
                <Link to="/lifestyle">Lifestyle</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/contact">Login</Link>
            </ul>

            <span className='menu'>
                <button onClick={(e) => {
                    e.preventDefault()
                    setMobileMenuOpen(!mobileMenuOpen)
                }}>
                    Menu
                </button>
               
            </span>
        </nav>
    )
}

export default Navbar