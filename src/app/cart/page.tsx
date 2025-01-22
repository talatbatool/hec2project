"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TiDeleteOutline } from "react-icons/ti";
import Header from "../components/Header";

interface CartItem {
  id: number;
  name: string;
  price: number;
  productImageUrl: string;
  quantity: number;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
         try {
          const storedCart = JSON.parse(
             localStorage.getItem("cart") || "[]"
           ) as CartItem[];
           const normalizedCart = storedCart.map((item) => ({
             ...item,
             quantity: item.quantity || 1,
           }));
           setCartItems(normalizedCart);
         } catch (error) {
           console.error("Error parsing localStorage data:", error);
           setCartItems([]); // Set empty cart if there's an issue
         }
       }, []);
    
       // Update localStorage with new cart data
       const updateLocalStorage = (updatedCart: CartItem[]) => {
         localStorage.setItem("cart", JSON.stringify(updatedCart));
       };
    
       // Handle quantity changes
       const handleQuantityChange = (index: number, quantity: number) => {
        const updatedItems = cartItems.map((item, i) =>
           i === index ? { ...item, quantity: Math.max(1, quantity) } : item
        );
        setCartItems(updatedItems);
         updateLocalStorage(updatedItems);
       };
    
       // Remove an item from the cart
      const handleRemoveItem = (index: number) => {
         const updatedItems = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedItems);
         updateLocalStorage(updatedItems);
         window.location.reload();
       };
    
       // Calculate subtotal for a single item
       const calculateSubtotal = (price: number, quantity: number) => {
        // Ensure price and quantity are valid numbers
         return (price * Math.max(1, quantity)).toFixed(2);
      };
    
       // Calculate the total amount
      const calculateTotal = () =>
        cartItems.reduce(
          (total, item) =>
            total + parseFloat(calculateSubtotal(item.price, item.quantity)),
          0
        );

  return (
    <div>
      <Header />
      <div className="w-[80%] mx-auto max-lg:w-[95%]">
        {cartItems.length > 0 ? (
          <>
            <div className="mt-20 mb-10">
              {/* Cart Table */}
              <div className="overflow-x-auto">
                <div className="grid grid-cols-5 items-center bg-gray-100 py-2 px-4 font-semibold text-gray-700 rounded-md">
                  <div>Product</div>
                  <div>Price</div>
                  <div>Quantity</div>
                  <div>Subtotal</div>
                  <div>Remove</div>
                </div>
                <hr />
                {cartItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-5 items-center py-4 px-4 bg-white shadow-sm mt-2 rounded-md"
                  >
                    <div className="flex items-center">
                      <Image
                        src={item.productImageUrl}
                        alt={item.name}
                        width={50}
                        height={50}
                        className="w-[100px] h-[100px] "
                      />
                      <h2 className="ml-4">{item.name}</h2>
                    </div>
                    <div>${item.price.toFixed(2)}</div>
                    <div>
                      <input
                        className="border text-center w-16 p-1"
                        type="number"
                        min={1}
                        value={item.quantity || 1}
                        onChange={(e) =>
                          handleQuantityChange(
                            index,
                            parseInt(e.target.value, 10) || 1
                          )
                        }
                      />
                    </div>
                    <div>${calculateSubtotal(item.price, item.quantity)}</div>
                    <div>
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleRemoveItem(index)}
                      >
                        <TiDeleteOutline className="text-2xl" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Summary Section */}
              <div className="flex flex-col gap-4 items-center lg:items-end my-10">
                <div className=" flex text-lg gap-8 font-medium">
                  <p>Subtotal:</p>
                    <p> ${calculateTotal().toFixed(2)}</p>
                </div>
                <div className="text-sm flex gap-8 justify-between w-full lg:w-auto">
                  <span  className="text-lg font-medium">Shipping:</span>
                  <span  className="text-lg font-medium" >$20.00</span>
                </div>
                <div className="text-lg font-semibold flex  gap-10 justify-between w-full lg:w-auto">
                  <span>Total:</span>
                  <span>${(calculateTotal() + 20).toFixed(2)}</span>
                </div>
                <Link href="/checkout"><button className="py-3 px-6 bg-[#2A254B] text-white rounded-md  font-medium hover:bg-[#1F1A3A] transition-colors duration-300 ease-in-out">
                  Go to Checkout
                </button></Link>
              </div>
            </div>
          </>
        ) : (
          <div className="mt-20 text-center">
            <h2 className="text-2xl font-bold">Your cart is empty!</h2>
            <Link
              href="/"
              className="text-blue-500 hover:underline mt-4 inline-block"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;