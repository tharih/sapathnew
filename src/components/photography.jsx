import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { urlFor } from "../client";

const Photography = ({ item }) => {
  return (
    <div key={item._id} className="flex flex-col items-center text-center">
      <div className="mb-8 h-[725px]  overflow-hidden">
        <img
          className="rounded-2xl object-cover"
          src={urlFor(item.image.asset._ref).url()}
          alt=""
        />
      </div>
      <p className="capitalize text-accent text-sm mb-3">
        {/* {item.category.title} */}
      </p>
      {/* <h3 className="text-2xl font-semibold capitalize mb-3">{item.name}</h3> */}
    </div>
  );
};

export default Photography;
