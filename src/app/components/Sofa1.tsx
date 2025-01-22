"use client"
import { useState } from "react";
import Image from "next/image";
export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <div className="p-4 lg:p-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div>
            <div className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-md">
              <Image
                src="/Group 102.png"
                alt="Asgaard Sofa"
                width={200}
                height={400}
                
                className="w-full h-full object-cover rounded-md"
              ></Image>
            </div>
            <div className="flex gap-2 mt-4">
              
                
                  
                  
                  
                  
                
              
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold mb-2">Asgaard Sofa</h1>
            <p className="text-xl text-gray-600 mb-4">Rs. 250,000.00</p>

            <div className="flex items-center gap-2 mb-4">
              <span className="text-yellow-400 text-lg">★★★★★</span>
              <p className="text-sm text-gray-500">5 Customer Reviews</p>
            </div>

            <p className="text-gray-700 mb-6">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>

            {/* Sizes */}
            <div className="mb-4">
              <h4 className="font-medium mb-2">Size</h4>
              <div className="flex gap-2">
                {["XS", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className="border rounded-md px-4 py-2 hover:bg-gray-200"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div className="mb-4">
              <h4 className="font-medium mb-2">Color</h4>
              <div className="flex gap-2">
                {["#6B46C1", "#000000", "#FFD700"].map((color) => (
                  <div
                    key={color}
                    className="w-8 h-8 rounded-full border border-gray-300"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-gray-300 rounded-md">
                <button
                  onClick={decrementQuantity}
                  className="px-4 py-2 hover:bg-gray-200"
                >
                  -
                </button>
                <span className="px-4 py-2">{quantity}</span>
                <button
                  onClick={incrementQuantity}
                  className="px-4 py-2 hover:bg-gray-200"
                >
                  +
                </button>
              </div>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Add to Cart
              </button>
              <button className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-200">
                Compare
              </button>
            </div>

            {/* Additional Info */}
            <div className="text-sm text-gray-500">
              <p>SKU: SS001</p>
              <p>Category: Sofas</p>
              <p>Tags: Sofa, Chair, Home, Shop</p>
            </div>

            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
