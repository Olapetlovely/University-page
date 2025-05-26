import React from 'react';
import "./Programs.css";
import ProgramCard from "./ProgramCard";

import program1 from "../../assets/img/program1.png";
import program2 from "../../assets/img/program2.jpg";
import program3 from "../../assets/img/program3.png";
import { FaBookReader } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { FaDraftingCompass } from "react-icons/fa";

const Programs = () => {
    return (
        <div className='programs'>
            <ProgramCard
                programImg={program1}
                icon={<FaBookReader />}
                programTitle="Graduation Degree"
            />
            <ProgramCard
                programImg={program2}
                icon={<FaDraftingCompass />}
                programTitle="Masters Degree"
            />
            <ProgramCard
                programImg={program3}
                icon={<FaUserGraduate />}
                programTitle="Post Degree"
            />
        </div>
    )
}

export default Programs