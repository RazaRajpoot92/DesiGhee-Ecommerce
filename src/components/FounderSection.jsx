import React from "react";
import img from "../assets/founderImg.jpeg";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const FounderSection = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-gradient-to-b from-white to-emerald-50">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-xl xm:text-2xl sm:text-4xl md:text-5xl font-bold text-emerald-800 flex justify-center gap-2">
          From Our Founder's <span className="text-yellow-400">Heart</span>
          <FaHeart className="text-yellow-400" />
        </h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Started with love for my children, now shared with every family.
        </p>
      </div>

      {/* Content */}
      <div className="flex lg:ml-12 flex-col-reverse md:flex-row items-center gap-10">
        {/* Left - Text */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-xl font-semibold text-emerald-800">
            Because Every Family Deserves Pure{" "}
            <span className="text-yellow-400"> Nourishment</span>
          </h2>

          <p className="text-gray-600 text-sm leading-relaxed">
            <FaQuoteLeft className="inline mr-2 text-3xl text-emerald-500" />{" "}
            <span className="font-semibold">
              {" "}
              A mother understands the care another mother has for her children.
            </span>
            <br />I started this journey for my own children, to give them pure
            and nourishing dairy products that truly support their health. When
            I saw the difference, I felt a responsibility to share it with other
            families.
          </p>

          <p className="text-gray-600 leading-relaxed text-sm ">
            In a time where purity is becoming rare, we choose to stay true to
            our roots. Through our village dairy, we bring you natural products
            made with care and love. So your loved ones can live healthy and
            feel truly nourished.{" "}
            <FaQuoteRight className="inline ml-1 text-3xl text-emerald-500"  />
          </p>

          {/* Founder Info */}
          <div className="mt-6">
            <h3 className="text-lg font-bold text-yellow-400">
              Areesha Tallat
            </h3>
            <p className="text-sm text-gray-500">Founder & Business Owner</p>
          </div>
        </div>

        {/* Right - Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <img
              src={img}
              alt="Areesha Tallat"
              className="w-72 md:ml-4 md:w-96 fancy-border border-green-300 shadow-xl object-cover"
            />
            {/* <div className="absolute inset-0 rounded-2xl ring-1 ring-emerald-200"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
