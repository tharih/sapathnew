import React from "react";
import WomanImg from "../assets/img/about.webp";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-[100vh] flex items-center bg-primary bg-cover bg-center bg-no-repeat py-32 lg:py-0 overflow-hidden bg-[url('https://kalvin.netlify.app/images/background/home-banner-bg.jpg')] banner-after"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          <div className="flex-1 flex flex-col items-center lg:items-start z-40">
            <p className="text-3xl text-white mb-[22px] uppercase font-semibold tracking-widest">
              Hey, I'm Sapath{" "}
            </p>
            <h1 className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px] ">
              I build & Design <br /> Web Interfaces.
            </h1>
            <p className="max-w-[480px] text-lg text-center lg:text-left text-white z-[10]">
              Creative Designer & Developer located in Australia.
            </p>
            <p className="max-w-[480px] text-lg text-center lg:text-left text-white z-[10]">
              Specialized in{" "}
              <span className="font-semibold text-[25px]">
                <Typewriter
                  words={[
                    "Designing UI/UX",
                    "Creating Websites",
                    "Designing Logo",
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </p>
          </div>
        </div>
        <div className="hidden lg:flex flex-1 justify-end items-end h-full">
          <img src={WomanImg} alt="" />
        </div>
      </div>
      <Link
        to="about"
        activeClass="active"
        spy={true}
        smooth={true}
        duration={500}
        offset={-70}
        className="transition-all duration-300"
      >
        <FaChevronDown
          color="#fff"
          size={48}
          className="absolute bottom-[20%] left-[30%] z-[10] animate-bounce cursor-pointer"
        />
      </Link>
      <svg
        className="absolute bottom-0 w-[100vw] left-0 z-[5] h-30"
        id="home-svg"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1400 300"
        preserveAspectRatio="none"
      >
        <path
          fill="#1C1D24"
          class="p-curve"
          d="M0,96.1c109.9,67.5,145.1,201.1,329.6,202.5S1043.2,99.5,1400,0v300H0V96.1z"
        />
      </svg>
    </section>
  );
};

export default Hero;
