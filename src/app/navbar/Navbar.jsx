"use client";

import { useState } from "react";
import Link from "next/link";
import { FaSearch, FaHeart, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const wishlistCount = 0;
  const cartCount = 0;

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-md text-black">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-wide text-black">
          cyber
        </Link>

        {/* Search */}
        <div className="hidden lg:flex items-center border border-gray-300 gap-3 px-4 py-1 rounded-2xl bg-white mx-6 flex-grow max-w-xl transition-all duration-300">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none w-full h-[40px] placeholder-gray-500 text-black"
          />
        </div>

        {/* Nav links */}
        <nav className="hidden lg:flex items-center gap-6 text-base font-medium">
          {["home", "shop", "contact"].map((item) => (
            <Link
              key={item}
              href={item === "home" ? "/" : `/${item}`}
              className="hover:text-gray-700 transition duration-300 capitalize"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4 ml-4">
          <Link href="/wishlist" className="relative hover:text-red-500 transition duration-300">
            <FaHeart className="text-xl" />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {wishlistCount}
              </span>
            )}
          </Link>

          <Link href="/cart" className="relative hover:text-green-600 transition duration-300">
            <FaShoppingCart className="text-xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Language Switcher */}
          <select className="bg-white border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none">
            <option value="en">EN</option>
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
          </select>

          {/* Mobile menu toggle */}
          <button className="lg:hidden ml-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <div className="flex items-center border border-gray-300 px-3 py-2 rounded-md">
              <FaSearch className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-transparent outline-none placeholder-gray-500 text-black"
              />
            </div>

            {["home", "shop", "contact"].map((item) => (
              <Link
                key={item}
                href={item === "home" ? "/" : `/${item}`}
                onClick={() => setMenuOpen(false)}
                className="block text-base capitalize hover:text-gray-700 transition duration-300"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
