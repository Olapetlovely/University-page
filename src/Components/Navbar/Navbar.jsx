import { useState, useEffect } from 'react'
import "./Navbar.css"
import { GiGraduateCap } from "react-icons/gi";
import { Link } from 'react-scroll';
import { TfiMenu } from "react-icons/tfi";
import { RiCloseLargeFill } from "react-icons/ri";

const Navbar = () => {

    const [sticky, setSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 20 ? setSticky(true) : setSticky(false)
        })
    }, [])

    function toggleMenu() {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

    return (
        <nav className={`container ${sticky ? "colord-nav" : ""} `} >
            <div className="logo-container">
                <div className="logo-icon">
                    <GiGraduateCap />
                </div>
                <h1>Olaide <br />University</h1>
            </div>
            <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
                <li><Link to="hero" smooth={true} offset={50} duration={500}>Home</Link></li>
                <li><Link to="program" smooth={true} offset={-260} duration={500}>Program</Link></li>
                <li><Link to="about" smooth={true} offset={-150} duration={500}>About us</Link></li>
                <li><Link to="campus" smooth={true} offset={-260} duration={500}>Campus</Link></li>
                <li><Link to="testimonials" smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
                <li>
                    <Link to="contact" smooth={true} offset={-260} duration={500}>Contact us</Link>
                </li>
            </ul>
            <span onClick={toggleMenu} className='menu'>{mobileMenu ? <RiCloseLargeFill /> : <TfiMenu />}</span>
        </nav>
    )
}

export default Navbar