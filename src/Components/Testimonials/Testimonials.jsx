import React, { useRef, useState } from 'react';
import "./Testimonials.css"
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import UserInfo from './UserInfo';
import img3 from "../../assets/img/img3.jpg";
import img4 from "../../assets/img/img4.jpg";
import img5 from "../../assets/img/img5.jpg";
import img6 from "../../assets/img/img6.jpg";
import img7 from "../../assets/img/img7.jpg";
import img8 from "../../assets/img/img8.jpg";
import img9 from "../../assets/img/img9.jpg";


const Testimonials = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    const handleNextSlide = () => {
        const slider = sliderRef.current;
        const slideWidth = slider.clientWidth;
        const nextIndex = (currentIndex + 1) % slider.children.length;
        slider.style.transform = `translate(-${slideWidth * nextIndex}px)`;
        setCurrentIndex(nextIndex);
    };

    const handlePrevSlide = () => {
        const slider = sliderRef.current;
        const slideWidth = slider.clientWidth;
        const prevIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
        slider.style.transform = `translate(-${slideWidth * prevIndex}px)`;
        setCurrentIndex(prevIndex);
    }

    return (
        <div className='testimonials'>
            <span className='prev' onClick={handlePrevSlide}><GrLinkPrevious /></span>
            <div className="slider" >
                <div className="slider-track" ref={sliderRef}>
                    <UserInfo img={img3} name="Sophie Reynolds"
                        coment="I've always been curious about how the human body works, but what really pushed me toward biomedical sciences was losing my uncle to a disease that could’ve been treated with better research. When I discovered that Olaide University has advanced labs and partnerships with teaching hospitals, I knew this was the place I needed to be. I want to be part of the generation that finds answers." />
                    <UserInfo img={img4} name="Isabella Morgan"
                        coment="Back in secondary school, I started selling custom T-shirts to classmates. That small hustle turned into a passion. I’m coming to Olaide University because I’ve heard how much they support young entrepreneurs. From what I’ve seen, the business program here is more than just theory—they actually help you launch your own business. I’m ready to take mine to the next level." />
                    <UserInfo img={img6} name="Olivia Turner"
                        coment="Growing up, I admired my primary school teacher who made every lesson feel like an adventure, even when we didn’t have much. That experience made me want to become a teacher who inspires others too. I chose Olaide University because their Education program is hands-on, and they focus on solving real challenges in Nigerian classrooms. I can’t wait to start." />
                    <UserInfo img={img7} name="Ethan Walker"
                        coment="I’ve been that kid who breaks electronics just to see what’s inside. Now, I want to build things—apps, machines, smart systems—things that matter. When I read about Olaide University’s AI and robotics labs, I was blown away. It feels like the perfect place to turn my love for tech into something that could actually help people." />
                    <UserInfo img={img8} name="Ava Mitchell"
                        coment="Where I come from, a lot of people don’t know their rights, and many are taken advantage of because of that. I want to change that. Studying Law at Olaide University feels right because they don’t just teach you the law—they teach you how to use it to make real change. Their legal clinic even helps people in the community for free, and I want to be part of that." />
                    <UserInfo img={img9} name="Chandy Blessing"
                        coment="Farming runs in my family, but I’ve always believed we can do it smarter—with tech, data, and business skills. That’s why I’m excited to join the Agriculture program at Olaide University. They teach modern, tech-driven farming, and give students access to real farmland. I’m coming here to learn how to make agriculture cool again." />
                </div>
            </div>
            <span className='next' onClick={handleNextSlide}><GrLinkNext /></span>
        </div >
    )
}

export default Testimonials

/* const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextSlide = () => {
        const slider = sliderRef.current;
        const slideWidth = slider.clientWidth;

        const nextIndex = (currentIndex + 1) % slider.children.length;
        slider.style.transform = `translateX(-${slideWidth * nextIndex}px)`;
        setCurrentIndex(nextIndex);
    };

    const handlePrevSlide = () => {
        const slider = sliderRef.current;
        const prevIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
        slider.style.transform = `translateX(-${slideWidth * prevIndex}px)`;
        setCurrentIndex(prevIndex);
    }; */


