// pages/index.js
import React from 'react';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header
        className="h-48 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Group 78 (3).png')", 
        }}
      >
        
      </header>

      {/* Product Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between items-center mb-6">
          
          
          
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">
            Add A Product
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Card 1 */}
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <img
              src="/Group 160.png" 
              alt="Asgaard Sofa"
              className="w-full"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">Asgaard Sofa</h2>
              <p className="text-yellow-500 font-semibold">Rs. 250,000.00</p>
              <p className="text-gray-600 text-sm">4.7 ★ (244 Reviews)</p>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <img
              src="/Group 157.png" 
              alt="Outdoor Sofa Set"
              className="w-full"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">Outdoor Sofa Set</h2>
              <p className="text-yellow-500 font-semibold">Rs. 224,000.00</p>
              <p className="text-gray-600 text-sm">4.2 ★ (125 Reviews)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="container mx-auto px-4 py-8 bg-white shadow-md rounded-lg">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 p-2 text-left">General</th>
              <th className="border border-gray-200 p-2 text-left">Asgaard Sofa</th>
              <th className="border border-gray-200 p-2 text-left">Outdoor Sofa Set</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Row */}
            <tr>
              <td className="border border-gray-200 p-2">Model Number</td>
              <td className="border border-gray-200 p-2">TFCBULGRBL85RHS</td>
              <td className="border border-gray-200 p-2">DTUBLGRBL568</td>
            </tr>
            <tr>
              <td className="border border-gray-200 p-2">Upholstery Material</td>
              <td className="border border-gray-200 p-2">Fabric + Cotton</td>
              <td className="border border-gray-200 p-2">Fabric + Cotton</td>
            </tr>
            <tr>
              <td className="border border-gray-200 p-2">Weight</td>
              <td className="border border-gray-200 p-2">45 KG</td>
              <td className="border border-gray-200 p-2">65 KG</td>
            </tr>
            <tr>
              <td className="border border-gray-200 p-2">Warranty</td>
              <td className="border border-gray-200 p-2">1 Year</td>
              <td className="border border-gray-200 p-2">1.2 Year</td>
            </tr>
            <tr>
              <td className="border border-gray-200 p-2">Model Number</td>
              <td className="border border-gray-200 p-2">TFCBULGRBL85RHS</td>
              <td className="border border-gray-200 p-2">DTUBLGRBL568</td>
            </tr>
            <tr>
              <td className="border border-gray-200 p-2">Upholstery Material</td>
              <td className="border border-gray-200 p-2">Fabric + Cotton</td>
              <td className="border border-gray-200 p-2">Fabric + Cotton</td>
            </tr>
            <tr>
              <td className="border border-gray-200 p-2">Weight</td>
              <td className="border border-gray-200 p-2">45 KG</td>
              <td className="border border-gray-200 p-2">65 KG</td>
            </tr>
            <tr>
              <td className="border border-gray-200 p-2">Warranty</td>
              <td className="border border-gray-200 p-2">1 Year</td>
              <td className="border border-gray-200 p-2">1.2 Year</td>
            </tr> <tr>
              <td className="border border-gray-200 p-2">Model Number</td>
              <td className="border border-gray-200 p-2">TFCBULGRBL85RHS</td>
              <td className="border border-gray-200 p-2">DTUBLGRBL568</td>
            </tr>
            <tr>
              <td className="border border-gray-200 p-2">Upholstery Material</td>
              <td className="border border-gray-200 p-2">Fabric + Cotton</td>
              <td className="border border-gray-200 p-2">Fabric + Cotton</td>
            </tr>
            <tr>
              <td className="border border-gray-200 p-2">Weight</td>
              <td className="border border-gray-200 p-2">45 KG</td>
              <td className="border border-gray-200 p-2">65 KG</td>
            </tr>
            <tr>
              <td className="border border-gray-200 p-2">Warranty</td>
              <td className="border border-gray-200 p-2">1 Year</td>
              <td className="border border-gray-200 p-2">1.2 Year</td>
            </tr>


            {/* Add more rows as per your data */}
          </tbody>
        </table>
      </section>
    </div>
  );
}
