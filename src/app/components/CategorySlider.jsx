"use client";

import { useState } from "react";
import {
  MdSmartphone,
  MdWatch,
  MdCameraAlt,
  MdHeadphones,
  MdComputer,
  MdSportsEsports,
} from "react-icons/md";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  { icon: <MdSmartphone size={36} />, label: "Phones" },
  { icon: <MdWatch size={36} />, label: "Smart Watches" },
  { icon: <MdCameraAlt size={36} />, label: "Cameras" },
  { icon: <MdHeadphones size={36} />, label: "Headphones" },
  { icon: <MdComputer size={36} />, label: "Computers" },
  { icon: <MdSportsEsports size={36} />, label: "Gaming" },
];

export default function CategorySlider() {
  const [current, setCurrent] = useState(categories);

  const handlePrev = () => {
    const last = current[current.length - 1];
    const rest = current.slice(0, -1);
    setCurrent([last, ...rest]);
  };

  const handleNext = () => {
    const [first, ...rest] = current;
    setCurrent([...rest, first]);
  };

  return (
    <div className="w-full px-4 md:px-10 py-8">
      <div className="flex items-center justify-between px-4 md:px-32 max-w-6xl mx-auto mb-6">
        <h2 className="text-xl md:text-2xl font-semibold">Browse By Category</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="p-2 hover:bg-gray-200 rounded-full"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={handleNext}
            className="p-2 hover:bg-gray-200 rounded-full"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </div>

      <div className="flex justify-center gap-4 flex-wrap">
        {current.map((cat, idx) => (
          <div
            key={idx}
            className="cursor-pointer flex flex-col items-center justify-center w-[140px] h-[120px] rounded-xl bg-[#f1f1f1] hover:bg-gray-300 transition"
          >
            <div>{cat.icon}</div>
            <p className="mt-2 text-sm font-medium">{cat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
