import React from "react";
import { social } from "../data";

const Socials = ({ bgScroll }) => {
  return (
    <ul className="flex space-x-6">
      {social.map((item, index) => {
        return (
          <li
            className={`flex justify-center items-center hover:text-lightRed transition-all duration-200 ease-out ${
              bgScroll ? "text-primaryRed" : "text-white"
            }`}
            key={index}
          >
            <a className="text-base" href={item.href}>
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
