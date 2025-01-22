"use client"
import { useState, useEffect } from 'react';
import { createClient } from 'next-sanity';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  _id: string;
  title: string;
  productImageUrl: string;
  price: string;
  tags: string[];
}

const client = createClient({
  projectId: 'e60o0emy',
  dataset: 'production',
  useCdn: true,
});

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(
        `*[_type == "product"] {
          _id,
          title,
          "productImageUrl": productImage.asset->url,
          
          price,
          tags
        }`
      );
      setProducts(data);
    };
    
    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-64 w-full">
        <Image
          src="/Group 78 (6).png" // Replace with your shop banner image path
          alt="Shop Background"
          layout="fill"
          objectFit="cover"
          className="opacity-90"
        />
      </div>

      {/* Shop Content */}
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product._id} className="bg-white rounded-lg shadow p-4">
              <Link href={`/Shop/${product._id}`}>
              <Image
                src={product.productImageUrl}
                alt={product.title}
                width={300}
                height={200}
                className="rounded"
              />
              </Link>
      
              <h3 className="text-lg font-semibold mt-4">{product.title}</h3>
              
              <p className="text-gray-500">Product Description</p>
              <p className="text-gray-600 font-bold mt-2">{product.price}</p>
              
              <button
              className='w-full mt-4 bg-blue-200 text-white py-2 px-4 rounded hover:bg-blue-400 transition-colors duration-200'
              >Add to cart</button>
            </div>
            
          ))}
          
  
        </div>
      </div>
    </div>
  );
};

export default Shop;
