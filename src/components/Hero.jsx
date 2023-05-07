import React from "react";
import WomanImg from "../assets/img/about.webp";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center bg-[#1C1D24] bg-cover bg-center bg-no-repeat overflow-hidden bg-[url('https://images.pexels.com/photos/4792729/pexels-photo-4792729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] banner-after"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          <div className="flex-1 flex flex-col items-center lg:items-start z-40">
            <p className="text-3xl text-white mb-[22px] uppercase font-semibold tracking-widest">
              Hey, I'm Saptha{" "}
            </p>
            <h1 className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px] ">
              I build & Design <br /> Web Interfaces.
            </h1>
            <p className="max-w-[480px] text-lg text-center lg:text-left text-white z-[10]">
            IT Solutions Specialist located in Australia.
            </p>
            <p className="max-w-[480px] text-lg text-center lg:text-left text-white z-[10]">
              Specialized in{" "}
              <span className="font-semibold text-[25px]">
                <Typewriter
                  words={[
                    "Designing UI/UX",
                    "Creating Websites",
                    "ERP ( microsoft Dynamics and Zoho books )",
                    "Photography",
                    "Cybersecurity project",
                    "Microsoft M365 / modern workplace consultancy",
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
        activeclassName="active"
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
        className="absolute bottom-[-1px] w-full left-0 z-[5]"
        id="home-svg"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1400 300"
        preserveAspectRatio="none"
      >
        <path
          fill="#1C1D24"
          className="p-curve"
          d="M0,96.1c109.9,67.5,145.1,201.1,329.6,202.5S1043.2,99.5,1400,0v300H0V96.1z"
        />
      </svg>
    </section>
  );
};

export default Hero;
