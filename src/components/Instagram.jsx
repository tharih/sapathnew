import React from "react";
import InstagramFeed from "react-ig-feed";
import "react-ig-feed/dist/index.css";

const Instagram = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-24">
        
        <InstagramFeed
          className="object-cover h-full w-[566px] md:mx-auto lg-mx-0 rounded-2xl"
          token="IGQVJYTmR0NXBfYzhxbmQ0Y29hRV9MUGlOV2lOVWd3VWJUWWtiOTdfZADQ4VENnUlNfT0NGRjVlTWlMQmRmV0g0THdDV1dtaGNYVmVsRUhNTi0tMW1hdzdEUU9CVEFBUzkweF9VMHVDTzBxVmFETVVycwZDZD"
          counter="6"
        />
      </div>
    </div>
  );
};

export default Instagram;
