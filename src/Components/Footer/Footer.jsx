import React from 'react'
import "./Footer.css"

const Footer = () => {
    const date = new Date();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    const day = date.getDate()
    return (
        <div className='footer'>
            <p>{month} {day}, {year}</p>
            <ul>
                <li>Terms of Services</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
    )
}

export default Footer