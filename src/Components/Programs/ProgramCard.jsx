import React from 'react';

const ProgramCard = ({ programImg, icon, programTitle }) => {

    return (
        <div className="program">
            <img src={programImg} alt="graduation pics" />
            <div className="overlay"></div>
            <div className="caption">
                <div>
                    {icon}
                </div>
                <p>{programTitle}</p>
            </div>
        </div>
    )
}

export default ProgramCard