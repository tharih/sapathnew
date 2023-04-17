import React from "react";
import InstagramFeed from "react-ig-feed";
import "react-ig-feed/dist/index.css";

const Instagram = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-24">
        {/* <motion.img
          initial={{
            x: -300,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="object-cover h-full w-[566px] md:mx-auto lg-mx-0 rounded-2xl"
          src={Image}
          alt=""
        /> */}
        <InstagramFeed
          className="object-cover h-full w-[566px] md:mx-auto lg-mx-0 rounded-2xl"
          token="your_access_token"
          counter="6"
        />
      </div>
    </div>
  );
};

export default Instagram;
