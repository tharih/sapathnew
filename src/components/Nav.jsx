import React from "react";
import { navigation } from "../data";
import { Link } from "react-scroll";

const Nav = ({ bgScroll }) => {
  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-[15px] z-[100]">
        {navigation.map((item, index) => {
          return (
            <li
              className={`${
                bgScroll ? "text-black" : "text-white"
              } cursor-pointer transition-all duration-100`}
              key={index}
            >
              <Link
                to={item.href}
                activeClass={bgScroll ? "active" : "active-idle"}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="transition-all duration-100"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
