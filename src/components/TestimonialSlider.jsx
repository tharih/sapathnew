import React, { useEffect, useState } from "react";
import { testimonials } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../swiper.css";
import { Autoplay, Pagination } from "swiper";
import { fetchTestimonials } from "../utils/fetchTestimonials";
import { urlFor } from "../client";

const TestimonialSlider = () => {
  const [testimonial, setTestimonial] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchTestimonials()
      .then((res) => {
        setTestimonial(res);
        // console.log(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section className="snap-center">
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {testimonial.map((testimonial, index) => {
          // const { authorImg, authorText,authorName, authorPosition} = item;
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center gap-4 pb-10">
                <div className="">
                  <img
                    className="rounded-3xl"
                    src={urlFor(testimonial?.image?.asset?._ref)?.url()}
                    alt=""
                  />
                </div>
                <div className="flex flex-col max-w-3xl">
                  <h5 className="font-body text-2xl italic font-normal">
                    {testimonial?.description}
                  </h5>
                <div className="mt-5">
                  <p className="text-lg text-primaryRed">{testimonial?.name}</p>
                  <p>{testimonial?.position}</p>
                </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default TestimonialSlider;
