import React from 'react';

const UserInfo = ({ img, name, coment }) => {
    return (
        <div className='user'>
            <div className="user-info">
                <div className="img-container">
                    <img src={img} alt="" />
                </div>
                <div className='name-wrapper'>
                    <h3>{name}</h3>
                    <span>Olaide University, Nigeria</span>
                </div>
            </div>
            <p>{coment}</p>
        </div>
    )
}

export default UserInfo