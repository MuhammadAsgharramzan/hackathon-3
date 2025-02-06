// components/AddToCartButton.tsx
"use client";

import { Product } from "../../../types/product";
import { addToCart } from "../../../actions/actions";
import Swal from "sweetalert2";

export default function AddToCartButton({ product }: { product: Product }) {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.productName} added to cart`,
      showConfirmButton: false,
      timer: 1000
    });
    addToCart(product);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
    >
      Add to Cart
    </button>
  );
}