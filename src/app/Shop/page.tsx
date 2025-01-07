import Image from 'next/image';

export default function Shop() {
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
          {/* Product 1 */}
          <div className="bg-white rounded-lg shadow p-4">
            <Image
              src="/Images (9).png"
              alt="Product 1"
              width={300}
              height={200}
              className="rounded"
            />
            <h3 className="text-lg font-semibold mt-4">Syltherine</h3>
            <p className="text-gray-500">Product Description</p>
            <p className="text-gray-600 font-bold mt-2">Rp 2.500.000</p>
          </div>

          {/* Product 2 */}
          <div className="bg-white rounded-lg shadow p-4">
            <Image
              src="/Featured Products.png"
              alt="Product 2"
              width={300}
              height={200}
              className="rounded"
            />
            <h3 className="text-lg font-semibold mt-4">leviosa</h3>
            <p className="text-gray-500">Product Description</p>
            <p className="text-gray-600 font-bold mt-2">Rp 2.500.000</p>
          </div>

          {/* Product 3 */}
          <div className="bg-white rounded-lg shadow p-4">
            <Image
              src="/Images (4).png"
              alt="Product 3"
              width={300}
              height={200}
              className="rounded"
            />
            <h3 className="text-lg font-semibold mt-4">lotilo</h3>
            <p className="text-gray-500">Product Description</p>
            <p className="text-gray-600 font-bold mt-2">Rp 2.500.000</p>
          </div>

           {/* Product 4 */}
           <div className="bg-white rounded-lg shadow p-4">
            <Image
              src="/Images (8).png"
              alt="Product 1"
              width={300}
              height={200}
              className="rounded"
            />
            <h3 className="text-lg font-semibold mt-4">Respiro</h3>
            <p className="text-gray-500">Product Description</p>
            <p className="text-gray-600 font-bold mt-2">Rp 2.500.000</p>
          </div>
           {/* Product 5 */}
           <div className="bg-white rounded-lg shadow p-4">
            <Image
              src="/Images (9).png"
              alt="Product 1"
              width={300}
              height={200}
              className="rounded"
            />
            <h3 className="text-lg font-semibold mt-4">Syltherine</h3>
            <p className="text-gray-500">Product Description</p>
            <p className="text-gray-600 font-bold mt-2">Rp 2.500.000</p>
          </div>

 {/* Product 6 */}
          <div className="bg-white rounded-lg shadow p-4">
            <Image
              src="/image 2 (1).png"
              alt="Product 1"
              width={300}
              height={200}
              className="rounded"
            />
            <h3 className="text-lg font-semibold mt-4">Leviosa</h3>
            <p className="text-gray-500">Product Description</p>
            <p className="text-gray-600 font-bold mt-2">Rp 2.500.000</p>
          </div>

          {/* Product 7 */}
          <div className="bg-white rounded-lg shadow p-4">
            <Image
              src="/Images (4).png"
              alt="Product 2"
              width={300}
              height={200}
              className="rounded"
            />
            <h3 className="text-lg font-semibold mt-4">Lotilo</h3>
            <p className="text-gray-500">Product Description</p>
            <p className="text-gray-600 font-bold mt-2">Rp 2.500.000</p>
          </div>

          {/* Product 8 */}
          <div className="bg-white rounded-lg shadow p-4">
            <Image
              src="/Images (8).png"
              alt="Product 3"
              width={300}
              height={200}
              className="rounded"
            />
            <h3 className="text-lg font-semibold mt-4">Product Name 3</h3>
            <p className="text-gray-500">Product Description</p>
            <p className="text-gray-600 font-bold mt-2">Rp 2.500.000</p>
          </div>

           {/* Product 9 */}
           <div className="bg-white rounded-lg shadow p-4">
            <Image
              src="/Images (9).png"
              alt="Product 1"
              width={300}
              height={200}
              className="rounded"
            />
            <h3 className="text-lg font-semibold mt-4">Sytherine</h3>
            <p className="text-gray-500">Product Description</p>
            <p className="text-gray-600 font-bold mt-2">Rp 2.500.000</p>
          </div>
           {/* Product 10 */}
           <div className="bg-white rounded-lg shadow p-4">
            <Image
              src="/image 2 (1).png"
              alt="Product 1"
              width={300}
              height={200}
              className="rounded"
            />
            <h3 className="text-lg font-semibold mt-4">Leviosa</h3>
            <p className="text-gray-500">Product Description</p>
            <p className="text-gray-600 font-bold mt-2">Rp 2.500.000</p>
          </div> {/* Product 11 */}
          <div className="bg-white rounded-lg shadow p-4">
            <Image
              src="/Images (4).png"
              alt="Product 1"
              width={300}
              height={200}
              className="rounded"
            />
            <h3 className="text-lg font-semibold mt-4">Lolito</h3>
            <p className="text-gray-500">Product Description</p>
            <p className="text-gray-600 font-bold mt-2">Rp 2.500.000</p>
          </div>

          {/* Product 12 */}
          <div className="bg-white rounded-lg shadow p-4">
            <Image
              src="/Images (8).png"
              alt="Product 2"
              width={300}
              height={200}
              className="rounded"
            />
            <h3 className="text-lg font-semibold mt-4">Respira</h3>
            <p className="text-gray-500">Product Description</p>
            <p className="text-gray-600 font-bold mt-2">Rp 2.500.000</p>
          </div>

          {/* Product 13 */}
          <div className="bg-white rounded-lg shadow p-4">
            <Image
              src="/Images (9).png"
              alt="Product 3"
              width={300}
              height={200}
              className="rounded"
            />
            <h3 className="text-lg font-semibold mt-4">Syltherine</h3>
            <p className="text-gray-500">Product Description</p>
            <p className="text-gray-600 font-bold mt-2">Rp 2.500.000</p>
          </div>

           {/* Product 14 */}
           <div className="bg-white rounded-lg shadow p-4">
            <Image
              src="/image 2 (1).png"
              alt="Product 1"
              width={300}
              height={200}
              className="rounded"
            />
            <h3 className="text-lg font-semibold mt-4">Leviosa</h3>
            <p className="text-gray-500">Product Description</p>
            <p className="text-gray-600 font-bold mt-2">Rp 2.500.000</p>
          </div>
           {/* Product 15 */}
           <div className="bg-white rounded-lg shadow p-4">
            <Image
              src="/image 3.png"
              alt="Product 1"
              width={300}
              height={200}
              className="rounded"
            />
            <h3 className="text-lg font-semibold mt-4">Lolito</h3>
            <p className="text-gray-500">Product Description</p>
            <p className="text-gray-600 font-bold mt-2">Rp 2.500.000</p>

          </div>   {/* Product 16 */}
           <div className="bg-white rounded-lg shadow p-4">
            <Image
              src="/Images (8).png"
              alt="Product 1"
              width={300}
              height={200}
              className="rounded"
            />
            <h3 className="text-lg font-semibold mt-4">Respira</h3>
            <p className="text-gray-500">Product Description</p>
            <p className="text-gray-600 font-bold mt-2">Rp 2.500.000</p>
          </div>
         






          {/* Repeat for all 16 products */}
          {/* Add the same structure for products 4 to 16 */}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 gap-4">
          <button className="px-4 py-2 bg-gray-200 rounded">1</button>
          <button className="px-4 py-2 bg-gray-200 rounded">2</button>
          <button className="px-4 py-2 bg-gray-200 rounded">3</button>
          <button className="px-4 py-2 bg-gray-200 rounded">Next</button>
        </div>
      </div>
    </div>
  );
}
