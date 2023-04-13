import React from "react";
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
// import Hero2 from './components/Hero2';

// import components

const App = () => {
  return (
    <div className="overflow-x-hidden snap-y snap-mandatory">
      <Header />
      <Hero />
      {/* <Hero2 /> */}
      {/* <Brands /> */}
      <section id="about" className="section bg-secondary snap-center">
        <About />
      </section>
      <Skills />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTopBtn />
    </div>
  );
};

export default App;
