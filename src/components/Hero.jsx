import React from "react";
import farm from "../assets/heroImg.jpg";

const Hero = () => {
  return (
    <main className="min-h-screen mt-10 lg:mt-0 flex items-center bg-gradient-to-r from-green-50 to-emerald-50">

      <div className="w-full max-w-6xl mx-auto px-6 md:px-10 lg:px-15 py-10">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/2">

            <div className="flex flex-col gap-6 items-center lg:items-start">

              {/* Badge */}
              <div className="w-fit px-4 py-1 rounded-full bg-green-100 text-emerald-900 border border-emerald-200 text-sm font-medium">
                100% Pure and Organic
              </div>

              {/* Heading */}
              <h1 className="text-3xl md:text-5xl  font-bold leading-tight text-emerald-900">
                Taste the Purity of Real Desi Ghee
              </h1>

              {/* Paragraph */}
              <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-xl">
                Our desi ghee is made from pure farm fresh milk using traditional bilona methods.
                It is slow churned with care to preserve its natural aroma rich taste and essential nutrients.
                We do not use any chemicals or preservatives. Just pure healthy goodness made for your family.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-2">

                <a
                  href="#"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full text-center font-medium transition"
                >
                  Shop Now
                </a>

                <a
                  href="#"
                  className="bg-white border border-emerald-200 text-emerald-900 px-6 py-3 rounded-full text-center font-medium hover:bg-emerald-50 transition"
                >
                  View Products
                </a>

              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">

            <div className="w-full max-w-sm md:max-w-md lg:max-w-lg h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-lg">

              <img
                src={farm}
                alt="cow farm"
                className="w-full h-full object-cover scale-105 hover:scale-110 transition duration-700"
              />

            </div>

          </div>

        </div>
      </div>

    </main>
  );
};

export default Hero;