import React from "react";
import ProductCard from "./ProductCard";
import product1 from '../assets/products/product1.jpeg'

const productsData = [
    {
        id:1,
        shortTitle:"Cow's Milk Desi Ghee 1KG",
        fullTitle:"Cow's Milk Desi Ghee 1KG Bucket",
        desc:"Rich aroma and traditional taste",
        img:product1,
        price:3000,
        weight:"1kg",
        bestSeller:true,
    },
     
     {
        id:3,
        shortTitle:"Cow's Milk Desi Ghee 2KG",
        fullTitle:"Cow's Milk Desi Ghee 2KG Bucket",
        desc:"Rich aroma and traditional taste",
        img:product1,
        price:6000,
        weight:"2kg",
        bestSeller:false,
    },

    {
        id:2,
        shortTitle:"Cow's Milk Butter 1KG",
        fullTitle:"Cow's Milk Butter Natural Unsalted Frozen 1KG",
        desc:"Rich aroma and traditional taste",
        img:product1,
        price:2500,
        weight:"1kg",
        bestSeller:true,
    },

    {
        id:4,
        shortTitle:"Cow's Milk Butter 2KG",
        fullTitle:"Cow's Milk Butter Natural Unsalted Frozen 2KG",
        desc:"Rich aroma and traditional taste",
        img:product1,
        price:5000,
        weight:"2kg",
        bestSeller:false,
    }
]


const Products = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-900">
          From Our Village <span className="text-yellow-400">Dairy</span> to Your Home
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Choose from our range of pure and traditionally prepared dairy products.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 xl:grid-cols-4 md:gap-4 lg:gap-3 mt-12">
         
        {
            productsData.map((product)=>(
                <ProductCard key={product.id}  product = {product} />
            ))
        }
        </div>
      </div>
    </section>
  );
};

export default Products;
