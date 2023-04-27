import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTopBtn from "./components/BackToTopBtn";
import State from "./components/State";
import { BsArrowUp } from "react-icons/bs";
import { Link } from "react-scroll";
import Instagram from "./components/Instagram";
import Photo from "./components/photo";
// import Hero2 from './components/Hero2';

// import components

const App = () => {
  const [bgScroll, setBgScroll] = useState(false);

  const scrollBG = () => {
    if (window.scrollY > 500) {
      setBgScroll(true);
    } else {
      setBgScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollBG);
  }, [bgScroll]);
  return (
    <div className="overflow-x-hidden snap-y snap-mandatory">
      <Link
        to="home"
        className={`fixed group cursor-pointer w-14 h-14 bg-white ${
          bgScroll ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-24"
        } bottom-10 right-10 z-50 rounded-full shadow-md flex items-center justify-center transition-all duration-700`}
      >
        <BsArrowUp className="text-primaryRed font-bold text-2xl group-hover:animate-bounce transition-all duration-300" />
      </Link>
      <Header />
      <Hero />
      {/* <Hero2 /> */}
      {/* <Brands /> */}
      <section id="about" className="section bg-secondary snap-center">
        <About />
      </section>
      <Skills />
      <Services />
      <Portfolio />
      <Photo />
      <Testimonials />
      {/* <section id="instagram" className="section bg-tertiary snap-center">
      <Instagram />
      </section> */}
      <Contact />
      <Footer />
      <BackToTopBtn />
    </div>
  );
};

export default App;
