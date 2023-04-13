import React, { useEffect, useState } from "react";
// import Logo from '../assets/img/logo.svg'
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Socials from "./Socials";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Header = () => {
  const [bgScroll, setBgScroll] = useState(false);

  const scrollBG = () => {
    if (window.scrollY > 50) {
      setBgScroll(true);
    } else {
      setBgScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollBG);
  }, []);
  return (
    <header
      className={`${
        bgScroll ? "md:bg-white h-20" : "md:h-24"
      } flex items-center fixed top-0 w-full 
    text-white z-50 transition-all duration-300`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* logo */}
        <motion.div
          initial={{ opacity: 0, x: -400 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hidden lg:block"
        >
          <Link to="home" className="cursor-pointer">
            <h2
              className={`text-2xl leading-[24px] md:text-5xl md:leading-tight lg:text-3xl lg:leading-[1.2] font-bold md:tracking-[-2px] ${
                bgScroll ? "text-black" : "text-white"
              }`}
            >
              Saptha
            </h2>
          </Link>
        </motion.div>
        {/* nav */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hidden lg:block z-[100]"
        >
          <Nav bgScroll={bgScroll} />
        </motion.div>

        {/* social */}
        <motion.div
          initial={{ opacity: 0, x: 400 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hidden lg:block"
        >
          <Socials bgScroll={bgScroll} />
        </motion.div>

        {/* nav mobile */}
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
