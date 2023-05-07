import React, { useState, useEffect } from "react";
import { projectsData } from "../data";
import { projectsNav } from "../data";
import Project from "./Project";
import { fetchProject } from "../utils/fetchProject";
import { fetchCategory } from "../utils/fetchCategory";
import { motion, AnimatePresence } from "framer-motion";
import Photography from "./photography";
import { fetchImage } from "../utils/fetchImage";
import { urlFor } from "../client";
import Image from "../assets/img/about.webp";


const Photographys = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
 

  useEffect(() => {
    setLoading(true);
    fetchImage()
      .then((res) => {
        setImages(res);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
   
  }, []);


  // if (loading) return <div>Loading data....</div>;
  return (
    <section className="snap-center">
      <div className="grid lg:grid-cols-4 gap-y-12 lg:gap-x-8 lg:gap-y-8">
        {images.map((image, index) => {
          return (
            <AnimatePresence >
              <motion.div
             
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0,
                }}
              >
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="mb-6 h-[400px]  overflow-hidden">
                    <img
                      className="rounded-2xl object-cover h-[400px] "
                      src={urlFor(image?.photo?.asset?._ref).url()}
                      alt={image.alt}
                    />
                  </div>
                  <p className="capitalize text-accent text-sm mb-3">
                    {/* {item.category.title} */}
                  </p>
                  {/* <h3 className="text-2xl font-semibold capitalize mb-3">{item.name}</h3> */}
                </div>
              </motion.div>
            </AnimatePresence>
          );
         })} 
                  <a className=" btn-red content-center" href="https://www.flickr.com/photos/saptha/" target="_blank" >
            {" "}
            View More
          </a>
      </div>
    </section>
  );
};

export default Photographys;
