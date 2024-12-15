import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-red-600 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          <Link href="/">KitchenWhiz</Link>
        </div>

        {/* Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-white hover:text-gray-300 transition">
            Home
          </Link>
          <Link
            href="/recipes"
            className="text-white hover:text-gray-300 transition"
          >
            Recipes
          </Link>
          <Link
            href="/meal-planner"
            className="text-white hover:text-gray-300 transition"
          >
            Meal Planner
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-gray-300 transition"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-gray-300 transition"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
