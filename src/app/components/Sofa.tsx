import Image from "next/image";
import React from "react";

export default function ProductDetailExtraInfoSection() {
  return (
    <section className="flex flex-col items-center justify-center">
      {/* Existing Content */}
      <div className="flex gap-[53px]">
        <p className="text-customGray text-normal md:text-[24px] font-semibold">
          Description
        </p>
        <p className="text-customGray text-normal md:text-[24px]">
          Additional Information
        </p>
        <p className="text-customGray text-normal md:text-[24px]">
          Reviews [5]
        </p>
      </div>
      <div className="mt-[37px]">
        <p className="text-customGray text-normal">
          Embodying the raw, wayward spirit of rock &apos;n&apos; roll, the
          Kilburn portable active stereo speaker takes the unmistakable look and
          sound of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p className="text-customGray text-normal mt-[30px]">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine-tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-[37px]">
        <div className="flex flex-col bg-primary-light rounded-[8px] justify-center items-center">
          <Image
            src="/Group 107.png"
            alt="product"
            width={200}
            height={200}
            className="w-full object-cover"
          />
        </div>
        <div className="flex flex-col bg-primary-light rounded-[8px] justify-center items-center">
          <Image
            src="/Group 107.png"
            alt="product"
            width={200}
            height={200}
            className="w-full object-cover"
          />
        </div>
      </div>

     
      {/* Related Products Section */}
      <div className="w-full mt-[50px]">
        <h2 className="text-[28px] font-bold text-center mb-[30px]">
          Related Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Product 1 */}
          <div className="flex flex-col items-center border rounded-md p-4">
            <Image
              src="/image 2 (1).png" // Replace with actual image path
              alt="Syltherine"
              width={200}
              height={200}
              className="object-cover rounded-md"
            />
            <p className="mt-2 font-semibold text-lg">Syltherine</p>
            <p className="text-customGray text-sm">Stylish cafe chair</p>
            <p className="text-red-500 font-bold">Rp 2.500.000</p>
          </div>

          {/* Product 2 */}
          <div className="flex flex-col items-center border rounded-md p-4">
            <Image
              src="/image 2 (1).png" // Replace with actual image path
              alt="Leviosa"
              width={200}
              height={200}
              className="object-cover rounded-md"
            />
            <p className="mt-2 font-semibold text-lg">Leviosa</p>
            <p className="text-customGray text-sm">Stylish cafe chair</p>
            <p className="text-red-500 font-bold">Rp 2.500.000</p>
          </div>

          {/* Product 3 */}
          <div className="flex flex-col items-center border rounded-md p-4">
            <Image
              src="/image 3.png" // Replace with actual image path
              alt="Lolito"
              width={200}
              height={200}
              className="object-cover rounded-md"
            />
            <p className="mt-2 font-semibold text-lg">Lolito</p>
            <p className="text-customGray text-sm">Luxury big sofa</p>
            <p className="text-red-500 font-bold">Rp 7.000.000</p>
          </div>

          {/* Product 4 */}
          <div className="flex flex-col items-center border rounded-md p-4">
            <Image
              src="/Images (8).png" // Replace with actual image path
              alt="Respira"
              width={200}
              height={200}
              className="object-cover rounded-md"
            />
            <p className="mt-2 font-semibold text-lg">Respira</p>
            <p className="text-customGray text-sm">
              Outdoor bar table and stool
            </p>
            <p className="text-red-500 font-bold">Rp 500.000</p>
          </div>
        </div>
        <button className="mt-6 px-6 py-2 border rounded-md text-primary border-primary">
          Show More
        </button>
      </div>
    </section>
  );
}
