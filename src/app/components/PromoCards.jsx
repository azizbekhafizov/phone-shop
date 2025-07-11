"use client";
import Image from "next/image";

export default function PromoCards() {
  return (
    <div className="flex flex-wrap justify-center gap-4">

      {/* Popular Products */}
      <div className="flex flex-col p-6 w-full sm:w-[360px] h-auto sm:h-[640px]" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="mb-4 flex justify-center">
          <Image
            src="/assets/images/popular.png"
            alt="Popular Products"
            width={250}
            height={250}
            className="object-contain"
          />
        </div>
        <h3 className="text-[28px] sm:text-[33px] font-[300] mb-3 mt-[-30px] sm:mt-[-55px]">
          Popular Products
        </h3>
        <p className="text-sm leading-[24px] font-medium mb-4 text-[#909090]">
          iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
        </p>
        <button className="block text-center w-full sm:w-[190px] h-[55px] border-2 rounded-[8px] transition border-black text-black hover:bg-black hover:text-white leading-[55px]">
          Shop Now
        </button>
      </div>

      {/* iPad Pro */}
      <div className="flex flex-col p-6 w-full sm:w-[360px] h-auto sm:h-[640px]" style={{ backgroundColor: "#F9F9F9" }}>
        <div className="mb-4 flex justify-center">
          <Image
            src="/assets/images/ipad.png"
            alt="iPad Pro"
            width={250}
            height={250}
            className="object-contain"
          />
        </div>
        <h3 className="text-[28px] sm:text-[33px] font-[300] mb-3 mt-4">
          iPad Pro
        </h3>
        <p className="text-sm leading-[24px] font-medium mb-4 text-[#909090]">
          iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
        </p>
        <button className="block text-center w-full sm:w-[190px] h-[55px] border-2 rounded-[8px] transition border-black text-black hover:bg-black hover:text-white leading-[55px]">
          Shop Now
        </button>
      </div>

      {/* Samsung Galaxy */}
      <div className="flex flex-col p-6 w-full sm:w-[360px] h-auto sm:h-[640px]" style={{ backgroundColor: "#EAEAEA" }}>
        <div className="mb-4 flex justify-center">
          <Image
            src="/assets/images/samsung.png"
            alt="Samsung Galaxy"
            width={250}
            height={250}
            className="object-contain"
          />
        </div>
        <h3 className="text-[28px] sm:text-[33px] font-[300] mb-3 mt-4">
          Samsung Galaxy
        </h3>
        <p className="text-sm leading-[24px] font-medium mb-4 text-[#909090]">
          iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
        </p>
        <button className="block text-center w-full sm:w-[190px] h-[55px] border-2 rounded-[8px] transition border-black text-black hover:bg-black hover:text-white leading-[55px]">
          Shop Now
        </button>
      </div>

      {/* Macbook Pro */}
      <div className="flex flex-col p-6 w-full sm:w-[360px] h-auto sm:h-[640px]" style={{ backgroundColor: "#2C2C2C" }}>
        <div className="mb-4 flex justify-center">
          <Image
            src="/assets/images/macboog.png"
            alt="Macbook Pro"
            width={250}
            height={250}
            className="object-contain"
          />
        </div>
        <h3 className="text-[28px] sm:text-[33px] font-[300] mb-3 text-white">
          Macbook Pro
        </h3>
        <p className="text-sm leading-[24px] font-medium mb-4 text-[#909090]">
          iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
        </p>
        <button className="block text-center w-full sm:w-[190px] h-[55px] border-2 rounded-[8px] transition border-white text-white hover:bg-white hover:text-black leading-[55px]">
          Shop Now
        </button>
      </div>

    </div>
  );
}
