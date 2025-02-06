"use client";

import { Product } from "../../../types/product";
import React, { useEffect, useState } from "react";
import {
  getCartItems,
  removeFromCart,
  updateCartQuantity,
} from "../../../actions/actions"
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import { FiShoppingBag, FiTrash2, FiChevronUp, FiChevronDown } from "react-icons/fi";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Remove Item?",
      text: "This will remove the item from your cart",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#64748b",
      confirmButtonText: "Remove",
      backdrop: "rgba(241, 245, 249, 0.8)",
      customClass: {
        confirmButton: "hover:scale-105 transition-transform",
        cancelButton: "hover:scale-105 transition-transform"
      }
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire({
          title: "Removed!",
          text: "Item has been removed from your cart",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
          background: "#fff",
          backdrop: false
        });
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.inventory,
      0
    );
  };
  const router = useRouter();

  const handleProceed = () => {
    Swal.fire({
      title: "Ready to Checkout?",
      text: "You'll be redirected to secure payment",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3b82f6",
      cancelButtonColor: "#64748b",
      confirmButtonText: "Continue to Payment",
      reverseButtons: true,
      customClass: {
        confirmButton: "hover:scale-105 transition-transform",
        cancelButton: "hover:scale-105 transition-transform"
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "succeess!",
          "Your order has been successfully processed!",
          "success",
        
        );
        router.push("/Checkout")
        setCartItems([]);
      }
    });
  };

  return (
    <div className="min-h-screen bg-slate-50/95 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <FiShoppingBag className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-slate-900">Your Cart</h1>
        </div>

        <div className="space-y-6">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item._id}
                className="group bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ease-out border border-slate-100"
              >
                <div className="flex gap-5">
                  {item.image && (
                    <div className="relative flex-shrink-0">
                      <Image
                        src={urlFor(item.image).url()}
                        width={120}
                        height={120}
                        alt={item.productName}
                        className="rounded-lg object-cover w-24 h-24"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-800">
                          {item.productName}
                        </h3>
                        <p className="text-blue-600 font-medium mt-1">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                      <button
                        onClick={() => handleRemove(item._id)}
                        className="text-slate-400 hover:text-red-500 transition-colors p-2 -mt-2 -mr-2"
                      >
                        <FiTrash2 className="w-5 h-5" />
                      </button>
                    </div>
                    
                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex items-center gap-3 bg-slate-50 rounded-lg px-3 py-2">
                        <button
                          onClick={() => handleQuantityChange(item._id, item.inventory - 1)}
                          disabled={item.inventory <= 1}
                          className="text-slate-500 hover:text-blue-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                        >
                          <FiChevronDown className="w-5 h-5" />
                        </button>
                        <span className="font-medium text-slate-800 w-6 text-center">
                          {item.inventory}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(item._id, item.inventory + 1)}
                          className="text-slate-500 hover:text-blue-600 transition-colors"
                        >
                          <FiChevronUp className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="ml-auto">
                        <p className="font-medium text-slate-800">
                          ${(item.price * item.inventory).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <div className="mb-4 text-slate-300">
                <FiShoppingBag className="w-16 h-16 mx-auto" />
              </div>
              <p className="text-slate-500 text-lg">Your cart is empty</p>
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="mt-8 bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <div className="flex justify-between items-center mb-4">
              <span className="text-slate-600">Subtotal</span>
              <span className="font-bold text-slate-900 text-xl">
                ${calculateTotal().toFixed(2)}
              </span>
            </div>
            <button
              onClick={handleProceed}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 px-6 rounded-lg font-medium hover:scale-[1.02] transition-transform duration-200"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;