
                    
    // pages/blog.js
    import Image from 'next/image';
    
    export default function Blog() {
      return (
        <div className="bg-gray-100">
          {/* Banner Section */}
          <div className="relative w-full h-64 md:h-96">
            <Image
              src="/Group 78 (2).png" // Ensure this image is saved in the public folder
              alt="Blog Banner"
              layout="fill"
              objectFit="cover"
              className="rounded-b-lg"
            />
            
            
            
          </div>
    
          {/* Blog Content */}
          <div className="max-w-7xl mx-auto py-10 px-4">
            <div className="flex flex-col md:flex-row">
              {/* Main Content */}
              <div className="w-full md:w-2/3">
                {/* Post 1 */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <Image
                    src="/Rectangle 68.png" // Replace with your own blog post image
                    alt="Post 1"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                  <h2 className="text-2xl font-semibold mt-4">
                    Going all-in with millennial design
                  </h2>
                  <p className="text-gray-500 text-sm mt-2">Admin | 14 Oct 2022 | Wood</p>
                  <p className="text-gray-700 mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                  </p>
                  <a
                    href="#"
                    className="text-blue-500 hover:underline mt-4 block"
                  >
                    Read more
                  </a>
                </div>
    
                {/* Post 2 */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <Image
                    src="/Rectangle 68 (1).png" // Replace with your own blog post image
                    alt="Post 2"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                  <h2 className="text-2xl font-semibold mt-4">
                    Exploring new ways of decorating
                  </h2>
                  <p className="text-gray-500 text-sm mt-2">Admin | 14 Oct 2022 | Handmade</p>
                  <p className="text-gray-700 mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                  </p>
                  <a
                    href="#"
                    className="text-blue-500 hover:underline mt-4 block"
                  >
                    Read more
                  </a>
                </div>
    
                {/* New Post */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <Image
                    src="/Rectangle 68 (2).png" // Save this image in the public folder
                    alt="Handmade pieces"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                  <h2 className="text-2xl font-semibold mt-4">
                    Handmade pieces that took time to make
                  </h2>
                  <p className="text-gray-500 text-sm mt-2">Admin | 14 Oct 2022 | Wood</p>
                  <p className="text-gray-700 mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                  </p>
                  <a
                    href="#"
                    className="text-blue-500 hover:underline mt-4 block"
                  >
                    Read more
                  </a>
                </div>
              </div>
    
              {/* Sidebar */}
              <div className="w-full md:w-1/3 md:pl-6 mt-10 md:mt-0">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold">Categories</h3>
                  <ul className="mt-4 space-y-2">
                    <li>
                      <a href="#" className="text-gray-700 hover:underline">
                        Crafts (2)
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-700 hover:underline">
                        Design (8)
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-700 hover:underline">
                        Handmade (7)
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-700 hover:underline">
                        Interior (1)
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-700 hover:underline">
                        Wood (6)
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                  <h3 className="text-xl font-semibold">Recent Posts</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-gray-700 hover:underline">
                        Going all-in with millennial design
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-700 hover:underline">
                        Exploring new ways of decorating
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-700 hover:underline">
                        Handmade pieces that took time to make
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-700 hover:underline">
                        Modern home in Milan
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-700 hover:underline">
                        Colorful office redesign
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
        
       
        
    
       
        
      
    
    
    
  




