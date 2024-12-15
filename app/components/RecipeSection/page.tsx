/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

const RecipeSection = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [diet, setDiet] = useState("");
  const [time, setTime] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const API_KEY = "c7166a85a3cc415cac34ffd31f336ce3";
  const API_URL = "https://api.spoonacular.com/recipes/complexSearch";

  const fetchRecipes = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL, {
        params: {
          apiKey: API_KEY,
          query: query || undefined,
          cuisine: cuisine || undefined,
          diet: diet || undefined,
          maxReadyTime: time || undefined,
          number: 10,
          offset: (page - 1) * 10,
        },
      });
      setRecipes(response.data.results);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, cuisine, diet, time, page]);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Search Recipes</h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 justify-center mb-6">
        <input
          type="text"
          placeholder="Search Recipes"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-gray-300 p-2 rounded-md"
        />
        <select
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
          className="border border-gray-300 p-2 rounded-md"
        >
          <option value="">Cuisine</option>
          <option value="Italian">Italian</option>
          <option value="Mexican">Mexican</option>
          <option value="Indian">Indian</option>
        </select>
        <select
          value={diet}
          onChange={(e) => setDiet(e.target.value)}
          className="border border-gray-300 p-2 rounded-md"
        >
          <option value="">Diet</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="gluten free">Gluten Free</option>
        </select>
        <select
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="border border-gray-300 p-2 rounded-md"
        >
          <option value="">Prep Time</option>
          <option value="15">Under 15 mins</option>
          <option value="30">Under 30 mins</option>
          <option value="60">Under 1 hour</option>
        </select>
      </div>

      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="flex w-52 flex-col gap-4">
              <div className="skeleton h-32 w-full bg-gray-200"></div>
              <div className="skeleton h-4 w-28 bg-gray-200"></div>
              <div className="skeleton h-4 w-full bg-gray-200"></div>
              <div className="skeleton h-4 w-full bg-gray-200"></div>
            </div>
          ))}
        </div>
      )}
      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {recipes.map((recipe: any) => (
            <div key={recipe.id} className="card bg-base-100 w-96 shadow-xl">
              <figure>
                <Image
                  height={300}
                  width={500}
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-40 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {recipe.title}
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>
                  Discover this delicious recipe and make your meal special!
                </p>
                <div className="card-actions justify-end">
                  <a
                    href={`https://spoonacular.com/recipes/${recipe.title
                      .replace(/ /g, "-")
                      .toLowerCase()}-${recipe.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-error hover:bg-red-600 hover:text-white"
                  >
                    View Recipe
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="join flex justify-center mt-6">
        <button
          className={`join-item btn ${page === 1 ? "btn-disabled" : ""}`}
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        >
          Previous
        </button>
        <button className="join-item btn btn-active">{page}</button>
        <button
          className="join-item btn"
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RecipeSection;
