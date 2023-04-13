import React, { useEffect, useState } from "react";
import { services } from "../data";
import { fetchService } from "../utils/fetchService";
import { urlFor } from "../client";
import laptop from "../assets/img/services/lap.png";

const Services = () => {
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchService()
      .then((res) => {
        setService(res);
        // console.log(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) return <div>Loading...</div>;

  return (
    <section id="services" className="section bg-tertiary snap-center">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block">
            What I do for clients
          </h2>
          <p className="subtitle">
            {/* Lorem hfguydwfuyfgewf urgiufguigidu igfguirgh hgfruoighruig  uigrrhuigrehuier
                    ifugiugfuig uigrureuieru fhguegdfg ugrgouirg g urguri gruidghuidr ughfug
                    iufgfdugfuig dfguifhfui udgfuidfui */}
          </p>
        </div>

        {/* item grid  */}
        <div className="grid lg:grid-cols-3 gap-8">
          {service.map((service, index) => {
            const { icon, name, description } = service;
            return (
              <div
                className="bg-secondary p-6 rounded-2xl flex flex-col items-center"
                key={index}
              >
                <div className="relative rounded-sm flex w-16 overflow-hidden justify-center items-center text-[28px] image-bg">
                  <img
                    className="w-full z-10 p-2"
                    src={urlFor(service?.icon?.asset._ref).url()}
                    alt=""
                  />
                </div>
                <h4 className="text-xl font-medium mb-2 text-center">
                  {service?.name}
                </h4>
                <p className="text-center">{service?.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
