"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { createClient } from "next-sanity";
import Image from "next/image";
import Swal from "sweetalert2"

interface Product {
  _id: string;
  title: string;
  description: string;
  productImageUrl: string;
  price: number;
  tags: string[];
  discountPercentage?: number;
  isNew?: boolean;
}










const client = createClient({
  projectId: "e60o0emy", //
  dataset: "production",
  apiVersion: "2023-01-01", // 
  useCdn: false,
});

const ProductPage = () => {const addToCart = (product: Product) => {
  const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
  const updatedCart = [...cartItems, product];
  localStorage.setItem("cart", JSON.stringify(updatedCart));

  Swal.fire({
    title: "Success!",
    text: "Item added to cart!",
    icon: "success",
    confirmButtonText: "OK",
  }).then(() => {
    window.location.reload();
  });
};
  const { id } = useParams(); // 
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await client.fetch(
          `*[_type == "product" && _id == $id][0] {
            _id,
            title,
            description,
            "productImageUrl": productImage.asset->url,
            price,
            tags,
            discountPercentage,
            isNew
          }`,
          { id }
        );

        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (!product) {
    return <div className="text-center mt-10">Product not found.</div>;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="bg-white rounded-lg shadow p-6">
        {/* Product Image */}
        {product.productImageUrl ? (
          <Image
            src={product.productImageUrl}
            alt={product.title}
            width={600}
            height={400}
            className="rounded"
          />
        ) : (
          <div className="text-gray-500 text-center py-20">
            No Image Available
          </div>
        )}

        {/* Product Details */}
        <h1 className="text-3xl font-bold mt-4">{product.title}</h1>
        {product.isNew && (
          <span className="bg-green-200 text-green-800 text-xs px-3 py-1 rounded-full uppercase font-semibold">
            New
          </span>
        )}

        <p className="text-gray-700 mt-4">{product.description}</p>
        <p className="text-2xl font-bold text-blue-600 mt-4">${product.price}</p>

        {product.discountPercentage && (
          <p className="text-sm text-red-500">
            Discount: {product.discountPercentage}%
          </p>
        )}

        {/* Tags */}
        {product.tags.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Tags:</h3>
            <div className="flex gap-2 mt-2">
              {product.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 px-3 py-1 rounded text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Add to Cart Button */}
        
        <button 
              onClick={() => addToCart(product)}
              className="bg-[#2A254B] text-white py-3 px-6 text-sm lg:text-base"
            >
              Add to Cart
            </button>
      </div>
    </div>
  );
};

export default ProductPage;