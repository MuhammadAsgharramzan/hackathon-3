"use client";

import { Product } from "../../../types/product";
import React, {useEffect, useState} from "react"
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import { FiShoppingCart, FiStar, FiHeart } from "react-icons/fi";
import Link from "next/link";
import { addToCart } from "../../../actions/actions";
import { client } from "@/sanity/lib/client";


const ProductCards = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `
          *[_type == "product"] {
            _id,
            productName,
            description,
            price,
            inventory,
            colors,
            status,
            "slug": slug.current,
            "image": image,
            rating,
            discount
          }
        `;
        const data = await client.fetch(query);
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    e.stopPropagation();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${product.productName} added to cart`,
      showConfirmButton: false,
      timer: 1000,
      background: "#f8fafc",
    });
    addToCart(product);
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-200 rounded-lg h-64 w-full" />
              <div className="mt-4 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            href={`/product/${product.slug}`}
            key={product._id}
            className="group relative block bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            {/* Product Badges */}
            <div className="absolute top-3 right-3 z-10 flex gap-2">
              {product.discount && (
                <span className="bg-red-500 text-white px-3 py-1 text-sm rounded-full">
                  -{product.discount}%
                </span>
              )}
              <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-gray-100 transition-colors">
                <FiHeart className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Product Image */}
            <div className="relative aspect-square bg-gray-100">
              {product.image?.asset ? (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.productName}
                  fill
                  className="object-cover w-full h-full transition-transform group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">
                  <FiShoppingCart className="w-12 h-12" />
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="p-4">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold text-gray-900">
                  {product.productName}
                </h3>
                {product.rating && (
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <FiStar className="w-4 h-4 text-yellow-400" />
                    {product.rating}
                  </div>
                )}
              </div>
              
              <div className="mt-4 flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  {product.discount && (
                    <span className="block text-sm text-gray-500 line-through">
                      ${(product.price * (1 + product.discount/100)).toFixed(2)}
                    </span>
                  )}
                </div>

                <button
                  onClick={(e) => handleAddToCart(e, product)}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all"
                >
                  <FiShoppingCart className="w-5 h-5" />
                  <span className="text-sm font-medium">Add</span>
                </button>
              </div>

              {product.status === "out-of-stock" && (
                <div className="mt-3 text-sm text-red-600">
                  Out of Stock
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;