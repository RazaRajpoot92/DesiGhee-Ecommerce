import React from "react";
import review1 from '../assets/review1.jpg'

const testimonials = [
  {
    type: "text",
    review:
      "The taste reminds me of homemade ghee from my childhood. Truly pure and fresh.",
    name: "Ayesha",
  },
  {
    type: "image",
    src: review1,
  },
  {
    type: "text",
    review:
      "I ordered once and now I can’t go back to market products. Highly recommended.",
    name: "Usman",
  },
  {
    type: "image",
    src: "/reviews/review2.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-[#F0FDF4]">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#3A2E2A]">
          Loved by Families Like Yours
        </h2>

        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          Real feedback from customers who trust our products every day
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">

          {testimonials.map((item, index) => (
            <div key={index}>

              {/* TEXT REVIEW */}
              {item.type === "text" && (
                <div className="bg-white p-6 rounded-2xl shadow-md border border-amber-100">
                  <p className="text-amber-400 text-lg">★★★★★</p>

                  <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                    {item.review}
                  </p>

                  <p className="mt-4 font-semibold text-[#3A2E2A]">
                    — {item.name}
                  </p>
                </div>
              )}

              {/* IMAGE REVIEW */}
              {item.type === "image" && (
                <div className="bg-white w-100 h-40 p-3 rounded-2xl shadow-md border border-amber-100">
                  <img
                    src={item.src}
                    alt="WhatsApp Review"
                    className="w-full h-40   rounded-xl object-cover"
                  />
                </div>
              )}

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;