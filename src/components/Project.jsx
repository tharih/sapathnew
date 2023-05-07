import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { urlFor } from "../client";

const Project = ({ item }) => {
  return (
    
    <div key={item._id} className="flex flex-col h-[400px] w-full overflow-hidden items-center text-center">
       <a href={item.address} target="_blank">
      <div className="w-full h-[300px] overflow-hidden">
        <img
          className="rounded-2xl w-full h-full object-cover"
          src={urlFor(item.image.asset._ref).url()}
          alt=""
          />
      </div>
      <p className="capitalize text-accent text-sm mb-3">
        {item.category.title}
      </p>
      <h3 className="text-2xl font-semibold capitalize mb-3">{item.name}</h3>
          </a>
    </div>
      
  );
};

export default Project;
