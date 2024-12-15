import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/premium-photo/two-hamburgers-french-fries-sauces-red-background-fast-food-top-view_157927-7560.jpg)",
        }}
      >
        <div className="hero-overlay bg-red-600 bg-opacity-70"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-lg">
            <h1 className="mb-5 text-6xl font-bold">Welcome to KitchenWhiz</h1>
            <p className="mb-5 text-lg">
              Discover delicious recipes, plan your meals, and make cooking
              effortless. Your kitchen companion is here!
            </p>
            <button className="px-6 py-3 bg-white text-red-600 font-semibold rounded-md hover:bg-gray-200 transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
