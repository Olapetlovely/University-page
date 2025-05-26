import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { FaChevronUp } from "react-icons/fa";
import { Link } from 'react-scroll';

function App() {

  const [visible, setVisible] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setVisible(scrollY > 500)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll)
    };
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title title="What We Offer" subtitle="Our program" />
        <Programs />
        <About />
        <Title title="Campus Photos" subtitle="Gallery" />
        <Campus />
        <Title title="What student says" subtitle="Testimonials" />
        <Testimonials />
        <Title title="Contact Us" subtitle="Get in Touch" />
        <Contact />
        {visible && <div className="up-icon"><Link to="hero" smooth={true} offset={0} duration={700}><FaChevronUp /></Link></div>}
      </div>
      <Footer />
    </>
  )
}

export default App
