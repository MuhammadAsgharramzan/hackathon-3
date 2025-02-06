import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";
import { addToCart } from "../../../../actions/actions";
import Swal from "sweetalert2";
import { Product } from "../../../../types/product";
import AddToCartButton from "../../components/addToCart";

interface Props {
  params: {
    slug: string;
  };
}

export default async function page({ params }: Props) {
  const { slug } = params;

  // Fetch product data from Sanity
  const data = await client.fetch(`
    *[_type == "product" && slug.current == "${slug}"]{
      _id,
      productName,
      price,
      inventory,
      colors,
      status,
      description,
      "slug": slug.current,
      "image": image
    }
  `);

  const product = data[0];

  // Debugging: Check if product data is fetched correctly
  console.log("Product Data:", product);

  const handleAddToCart =(e: React.MouseEvent, product: Product) => {
      e.preventDefault()
      Swal.fire({
        position: "top-right",
        icon: "success",
        title: `${product.productName} added to cart`,
        showConfirmButton: false,
        timer: 1000
  
      })
      addToCart(product)
    }

  // Handle missing product
  if (!product) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold text-red-600">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Main Image */}
        <div className="w-full md:w-1/2 lg:w-2/5">
          {product.image?.asset ? (
            <div className="relative aspect-square w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src={urlFor(product.image).url()}
                alt={product.productName}
                fill
                className="object-cover"
                priority
              />
            </div>
          ) : (
            <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
              <p className="text-gray-500">No image available</p>
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 lg:w-3/5">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {product.productName}
          </h1>
          <p className="text-2xl text-gray-800 font-semibold mb-4">
            ${product.price}
          </p>
          <p className="text-md text-gray-600 mb-2">
            <span className="font-medium">Status:</span> {product.status}
          </p>
          <p className="text-md text-gray-600 mb-2">
            <span className="font-medium">Colors:</span> {product.colors}
          </p>
          <p className="text-md text-gray-600 mb-6">
            <span className="font-medium">Description:</span>{" "}
            {product.description}
          </p>

          {/* Add to Cart Button */}
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}