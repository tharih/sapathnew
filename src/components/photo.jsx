import React from "react";
import Projects from "./Projects";
import Photographys from "./photographys";

const Photo = () => {
  return (
    <section id="photography" className="section bg-tertiary min-h-[1400px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block">
            Photography
          </h2>
          <p className="subtitle">
            {/* loram huirgfiugrtuiy dhgdhdfgiuoh ghifdoghogig ifdjgofighig
                gfhgighfghdfig hgoifhgfoighfiogh hgifdhgifghofdg
                ighjoihgfoighfoighfdoighfdighog hgoifdhgoifghfoigh igfgdfgh */}
          </p>
        </div>
        <Photographys />
      </div>
    </section>
  );
};

export default Photo;
