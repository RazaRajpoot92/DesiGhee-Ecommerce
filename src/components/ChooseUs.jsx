import React from "react";


const ChooseUs = () => {
  return (
    <section className="py-16 ">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-900">
          Why Our Desi Ghee is Truly <span className="text-yellow-400">Special</span>
        </h2>

        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          Prepared with care using traditional methods to deliver purity and taste in every drop.
        </p>

        {/* Content */}
        <div className="mt-12 flex flex-col lg:flex-row items-center gap-10">

          {/* LEFT - CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full lg:w-1/2">

            <div className="bg-white hover:scale-105 hover:cursor-default transition-all duration-300 p-5 rounded-2xl shadow-md border border-yellow-100">
              <h3 className="font-semibold text-lg text-yellow-400">
                Traditional Method
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Hand churned using age old techniques to preserve nutrients.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-md border border-amber-100">
              <h3 className="font-semibold text-lg text-yellow-400">
                Farm Fresh Milk
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Sourced directly from local farms to ensure purity.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-md border border-amber-100">
              <h3 className="font-semibold text-lg text-yellow-400">
                No Chemicals Added
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Completely natural process with no preservatives or additives.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-md border border-amber-100">
              <h3 className="font-semibold text-lg text-yellow-400">
                Rich in Nutrition
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Supports digestion and provides natural energy for daily life.
              </p>
            </div>

          </div>

          {/* RIGHT - VIDEO */}
          <div className="w-full lg:w-1/2">

            <div className="rounded-3xl overflow-hidden shadow-lg">

              <video
                src=""
                controls
                autoPlay
                loop
                muted
                className="w-full h-75 object-cover"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ChooseUs;