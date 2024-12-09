


import Image from "next/image";

export default function BrowseRange() {
  return (
    <section className="text-center p-6">
      <h1 className="text-3xl font-bold mb-2">Browse The Range</h1>
      <p className="text-gray-500 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="flex justify-center items-center gap-8">
        {/* Dining Section */}
        <div className="relative group">
          <Image
            src="/image 106.png"
            alt="Dining Room"
            width={300}
            height={400}
            className="rounded-lg object-cover"
          />
          <p className="mt-2 font-semibold text-gray-700">Dining</p>
        </div>

        {/* Living Section */}
        <div className="relative group">
          <Image
            src="/image 100.png"
            alt="Living Room"
            width={300}
            height={400}
            className="rounded-lg object-cover"
          />
          <p className="mt-2 font-semibold text-gray-700">Living</p>
        </div>

        {/* Bedroom Section */}
        <div className="relative group">
          <Image
            src="/image 101.png"
            alt="Bedroom"
            width={300}
            height={400}
            className="rounded-lg object-cover"
          />
          <p className="mt-2 font-semibold text-gray-700">Bedroom</p>
        </div>
      </div>
    </section>
  );
}