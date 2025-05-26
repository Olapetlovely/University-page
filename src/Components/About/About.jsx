import React from 'react';
import "./About.css"
import aboutImg from "../../assets/img/about.jpg";
import { IoPlayCircle } from "react-icons/io5";
import { FaPlay } from "react-icons/fa6";

const About = () => {
    return (
        <div className='about'>
            <div className="about-left">
                <div>
                    <img src={aboutImg} alt="about-image" />
                </div>
                <span className="play-icon">
                    <IoPlayCircle />
                </span>
                <span className="background"></span>
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing tomorrow's leaders today</h2>
                <p>Our mission is to foster a culture of academic excellence by providing high-quality education, promoting critical thinking, and encouraging lifelong learning. We are committed to equipping students with the knowledge and skills necessary to thrive in a dynamic global society.</p>
                <p>We aim to advance knowledge through innovative research and creative inquiry. By supporting interdisciplinary collaboration and cutting-edge investigations, the university strives to contribute meaningful solutions to societal challenges at local, national, and international levels.</p>
                <p>he university is dedicated to engaging with communities through outreach, partnerships, and service. We believe in using education and research to empower individuals and drive positive social change, while cultivating civic responsibility and ethical leadership among our students.</p>
                <p>Our mission is to create an inclusive learning environment that embraces diversity, promotes equity, and encourages sustainability. We are committed to nurturing responsible global citizens who contribute to the sustainable development of their communities and the world.</p>
            </div>
        </div>
    )
}

export default About