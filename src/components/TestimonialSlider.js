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
  const [testimonial, setTestimonial] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    fetchTestimonials()
      .then((res) => {
        setTestimonial(res);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Swiper pagination={{ clickable: true }} autoplay={{delay:2500, disableOnInteraction:false}} modules={[Autoplay, Pagination]} className="mySwiper">
        {testimonial.map((testimonial, index) => {
            // const { authorImg, authorText,authorName, authorPosition} = item;
            return ( 
            <SwiperSlide key={index}>
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-32">
                    <div className="w-48 h-48 lg:w-[328px] lg:h-[328px]">
                        <img className="rounded-3xl" src={urlFor(testimonial?.image?.asset?._ref)?.url()} alt="" />
                    </div>
                    <div className="flex flex-col max-w-3xl">
                        <h5 className="font-body text-2xl mb-8 italic font-normal">{testimonial?.description}</h5>
                    </div>
                    <div>
                        <p className="text-lg text-accent">{testimonial?.name}</p>
                        <p>{testimonial?.position}</p>
                    </div>
                </div>
                
            </SwiperSlide>
            )
        })}
      </Swiper>
    </>
  );
};

export default TestimonialSlider;
