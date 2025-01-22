export default function CheckoutPage() {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10">
        <div className="w-full max-w-7xl bg-white shadow-md rounded-lg p-8">
          {/* Header Image */}
          <div className="w-full mb-6">
            <img
              src="/Group 78 (1).png" // Replace this with the path to your image
              alt="Checkout Page Banner"
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
          <h1 className="text-3xl font-bold mb-6">Checkout</h1>
          <p className="text-sm text-gray-500 mb-8">
            <span className="text-gray-700">Home</span> &gt; Checkout
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Billing Details Section */}
            <div>
              <h2 className="text-xl font-semibold mb-6">Billing Details</h2>
              <form className="space-y-4">
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-indigo-200"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-indigo-200"
                  />
                </div>
                {/* Company Name */}
                <input
                  type="text"
                  placeholder="Company Name (Optional)"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-indigo-200"
                />
                {/* Country Selector */}
                <select
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-indigo-200"
                >
                  <option>Sri Lanka</option>
                  <option>India</option>
                  <option>USA</option>
                </select>
                {/* Address */}
                <input
                  type="text"
                  placeholder="Street Address"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-indigo-200"
                />
                {/* City and Province */}
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Town / City"
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-indigo-200"
                  />
                  <select
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-indigo-200"
                  >
                    <option>Western Province</option>
                    <option>Southern Province</option>
                    <option>Central Province</option>
                  </select>
                </div>
                {/* Zip Code */}
                <input
                  type="text"
                  placeholder="ZIP Code"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-indigo-200"
                />
                {/* Phone */}
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-indigo-200"
                />
                {/* Email */}
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-indigo-200"
                />
                {/* Additional Info */}
                <textarea
                  placeholder="Additional Information"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-indigo-200"
                />
              </form>
            </div>
  
            {/* Product Summary Section */}
            <div>
              <h2 className="text-xl font-semibold mb-6">Product</h2>
              <div className="border border-gray-300 rounded-md p-4 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span></span>
                  <span className="font-semibold"></span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-lg">Total</span>
                  <span className="font-bold text-lg text-green-500">
                    
                  </span>
                </div>
              </div>
  
              {/* Payment Methods */}
              <div className="space-y-4">
                <h3 className="font-medium">Payment Method:</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="payment"
                      className="mr-2 focus:ring-indigo-500"
                    />
                    Direct Bank Transfer
                  </label>
                  <p className="text-sm text-gray-500 ml-6">
                    Make your payment directly into our bank account. Your order
                    will not be shipped until the funds have cleared in our
                    account.
                  </p>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="payment"
                      className="mr-2 focus:ring-indigo-500"
                    />
                    Cash On Delivery
                  </label>
                </div>
              </div>
  
              {/* Place Order Button */}
              <button className="mt-6 w-full bg-gray-100 text-black py-3 rounded-md hover:bg-indigo-700">
                Place Order
              </button>
            </div>
          </div>
  
          {/* Footer Image */}
          <div className="w-full mt-10">
            <img
              src="/Frame 161.png" // Replace this with the path to your image
              alt="Footer Image"
              className="w-full h-40 object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    );
  }