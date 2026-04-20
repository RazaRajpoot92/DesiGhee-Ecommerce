import React from "react";


const ProductCard = ({product}) => {
  return (
    <div className="group bg-white/80 backdrop-blur-md border border-amber-100 
    p-4 rounded-3xl shadow-sm hover:shadow-xl transition duration-300 text-center">

      {/* Badge */}
      <div className={`${product.bestSeller?'visible':'hidden'}  absolute mt-2 ml-2 bg-green-400 text-white text-xs px-3 py-1 rounded-full`}>
        Best Seller
      </div>

      {/* Image */}
      <div className="overflow-hidden rounded-2xl">
        <img
          src={product.img}
          alt="Desi Ghee"
          className="mx-auto w-full h-50 object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <h3 className="mt-2 font-semibold text-lg text-[#3A2E2A]">
        {product.shortTitle}
      </h3>

      <p className="text-sm text-gray-500 mt-2">
        {product.desc}
      </p>

      {/* Price */}
      <p className="mt-3 text-lg font-bold text-amber-500">
        Rs {product.price}
      </p>

      {/* CTA */}
      <button className="mt-3 w-full bg-yellow-400 hover:bg-yellow-500 
      text-white font-medium py-2.5 rounded-full transition">
        Order on WhatsApp
      </button>

    </div>
  );
};

export default ProductCard;