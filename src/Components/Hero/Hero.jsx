import React from 'react'
import "./Hero.css";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
    return (
        <div className='hero container'>
            <div className="hero-text">
                <h1>Shaping Tomorrow's Leaders Through Innovation </h1>
                <p>To be a leading institution where the pursuit of knowledge and the power of innovation shape minds, solve real-world problems, and drive sustainable development.</p>
                <button className="btn">Explore More <span><FaArrowRightLong /></span></button>
            </div>

        </div>
    )
}

export default Hero 