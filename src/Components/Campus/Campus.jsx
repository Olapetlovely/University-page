import React from 'react';
import "./Campus.css";
import campus1 from "../../assets/img/campus1.jpg";
import campus2 from "../../assets/img/campus2.jpg";
import campus3 from "../../assets/img/campus3.jpg";
import campus4 from "../../assets/img/campus4.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

const Campus = () => {
    return (
        <div className='campus'>
            <div className="gallery">
                <div className="img-container">
                    <img src={campus1} alt="campus pics" />
                </div>
                <div className="img-container">
                    <img src={campus2} alt="campus pics" />
                </div>
                <div className="img-container">
                    <img src={campus4} alt="campus pics" />
                </div>
            </div>
            <button className="btn dark-btn">
                See more here <FaArrowRightLong />
            </button>
        </div>
    )
}

export default Campus