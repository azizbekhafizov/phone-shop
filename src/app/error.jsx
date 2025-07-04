"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Xatolik:", error);
  }, [error]);

  return (
    <div className="h-screen flex items-center justify-center flex-col text-center px-4">
      <h1 className="text-4xl font-bold text-red-600 mb-2">Xatolik yuz berdi</h1>
      <p className="text-gray-500 mb-4 max-w-md">
        Noma'lum xatolik sodir bo‘ldi. Iltimos, qaytadan urinib ko‘ring.
      </p>
      <button
        onClick={() => reset()}
        className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
      >
        Qayta yuklash
      </button>
    </div>
  );
}
