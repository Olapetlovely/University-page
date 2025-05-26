import React, { useState } from 'react';
import "./Contact.css";
import { IoMdMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoCheckmarkOutline } from "react-icons/io5";

const Contact = () => {

    const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false)

    const formValidation = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Please enter your name";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Please enter your phone number";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Please enter your email";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please provide a valid email";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Please enter your message";
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = formValidation();
        if (Object.keys(validationErrors).length === 0) {
            setFormData({ name: "", email: "", phone: "", message: "" });
            setErrors({})
            setSuccess(true);
        } else {
            setErrors(validationErrors);
            setSuccess(false);
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <span><IoMdMail /></span></h3>
                <p>Feel free to reach out through contact form or find our contact information below. Your feedback,questions and suggestions are important to us as we strive to provide exceptional service to our university community</p>
                <ul>
                    <li><span><IoMdMail /></span>Contact@OlaideUni.com</li>
                    <li><span><FaPhoneVolume /></span>+23481090296</li>
                    <li><span><FaLocationDot /></span>77 Living Word Crescent, My-Word Avenue, Abuja <br /> Nigeria</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input id='name' type="text" name="name" placeholder='Jane Doe' onChange={handleChange} value={formData.name} />
                    {errors.name && <p className='errors'>{errors.name}</p>}

                    <label htmlFor="email">Email</label>
                    <input id='email' type="email" name="email" onChange={handleChange} placeholder='janedoe@yahoo.com' value={formData.email} />
                    {errors.email && <p className='errors'>{errors.email}</p>}

                    <label htmlFor="phone">Phone Number</label>
                    <input id='phone' type="tel" name="phone" placeholder='0812345678' onChange={handleChange} value={formData.phone} />
                    {errors.phone && <p className='errors'>{errors.phone}</p>}

                    <label htmlFor="message">Write Your Message</label>
                    <textarea value={formData.message} name="message" id="message" rows="6" placeholder='Enter your message...' onChange={handleChange}></textarea>
                    {errors.message && <p className='errors'>{errors.message}</p>}

                    <button type="submit" className='btn dark-btn submit'>Submit</button>
                    {success && <p className='send'><span><IoCheckmarkOutline /></span>Form submitted!</p>}
                </form>
            </div>
        </div>
    )
}

export default Contact