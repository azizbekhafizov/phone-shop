"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { fetchCategoryProducts } from "../lib/api";
import { useStorage } from "../contexts/StorageContext";
import Link from "next/link"; 

const TABS = [
  { id: 1, label: "Phones", category: "smartphones" },
  { id: 2, label: "Laptops", category: "laptops" },
  { id: 3, label: "Watches", category: "womens-watches" },
];

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [products, setProducts] = useState([]);

  const { wishlist, toggleWishlist, addToCart } = useStorage();

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchCategoryProducts(activeTab.category, 8);
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    };
    load();
  }, [activeTab]);

  const isInWishlist = (id) => wishlist.some((item) => item.id === id);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Tabs */}
      <div className="flex space-x-6 border-b mb-6">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 ${
              activeTab.id === tab.id
                ? "border-b-2 border-black font-semibold"
                : "text-gray-400"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <div className="relative w-[268px] h-[432px] rounded-[9px] shadow-sm hover:shadow-md transition bg-[#F6F6F6] cursor-pointer">
              <button
                className="absolute top-3 right-3 z-10"
                onClick={(e) => {
                  e.preventDefault(); // Link ichida
                  toggleWishlist(product);
                }}
              >
                <Heart
                  className={`w-6 h-6 ${
                    isInWishlist(product.id)
                      ? "text-red-500 fill-red-500"
                      : "text-gray-400"
                  }`}
                />
              </button>

              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-[220px] h-[220px] mx-auto mt-12 object-contain"
              />

              <h3 className="text-[18px] leading-[24px] text-center font-medium mt-2">
                {product.title}
              </h3>
              <p className="text-[24px] leading-[24px] text-center mt-4 font-semibold">
                ${product.price}
              </p>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  addToCart(product);
                }}
                className="w-[188px] h-[48px] bg-black text-white rounded-[8px] flex justify-center items-center m-auto mt-7"
              >
                Buy Now
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
