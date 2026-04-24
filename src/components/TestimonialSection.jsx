import React, { useState } from "react";
import review from '../assets/review1.jpg'
import { CgProfile } from "react-icons/cg";
import reviewImg from '../assets/reviewPic.jpg'
import TestimonialCard from "./TestimonialCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
   

  return (
    <section className="py-16 bg-gray-50 flex">
      <div className="max-w-6xl flex gap-2 flex-wrap  mx-auto ">
        
       
            <TestimonialCard />
            <TestimonialCard />

      
       

      </div>
     
    </section>
  );
};

export default Testimonials;