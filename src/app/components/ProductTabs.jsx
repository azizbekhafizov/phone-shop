"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, ShoppingCart, Scale } from "lucide-react";

import iphone14 from "@/assets/products/iphone14.png";
import macbook from "@/assets/products/macbook.png";
import watch from "@/assets/products/watch.png";
import watch from '../../../public/assets/images/watch.png'

const tabs = ["New Arrivals", "Best Sellers", "Featured"];

const sampleProducts = [
  {
    id: 1,
    title: "iPhone 14 Pro",
    price: 1099,
    image: iphone14,
  },
  {
    id: 2,
    title: "MacBook Air M2",
    price: 1299,
    image: macbook,
  },
  {
    id: 3,
    title: "Apple Watch Ultra",
    price: 799,
    image: watch,
  },
];

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("New Arrivals");

  return (
    <section className="py-14 px-4 max-w-7xl mx-auto">
      {/* Tabs */}
      <div className="flex gap-4 justify-center mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 text-sm font-medium rounded-full transition ${
              activeTab === tab
                ? "bg-black text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sampleProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow hover:shadow-md p-4 transition relative group"
          >
            <Image
              src={product.image}
              alt={product.title}
              className="w-full h-[220px] object-contain mb-4"
              width={400}
              height={250}
            />
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-gray-500 text-sm mt-1">${product.price}</p>

            {/* Icons */}
            <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition">
              <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
                <Heart size={18} />
              </button>
              <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
                <Scale size={18} />
              </button>
              <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
                <ShoppingCart size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
