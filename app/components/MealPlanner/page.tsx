"use client";
import React, { useState } from "react";

interface Meal {
  name: string;
  calories: number;
  protein: number; // grams
  carbs: number; // grams
  fat: number; // grams
}

interface DayPlan {
  [mealType: string]: Meal[];
}

const initialWeek: Record<string, DayPlan> = {
  Monday: { Breakfast: [], Lunch: [], Dinner: [] },
  Tuesday: { Breakfast: [], Lunch: [], Dinner: [] },
  Wednesday: { Breakfast: [], Lunch: [], Dinner: [] },
  Thursday: { Breakfast: [], Lunch: [], Dinner: [] },
  Friday: { Breakfast: [], Lunch: [], Dinner: [] },
  Saturday: { Breakfast: [], Lunch: [], Dinner: [] },
  Sunday: { Breakfast: [], Lunch: [], Dinner: [] },
};

const MealPlanner = () => {
  const [weekPlan, setWeekPlan] = useState(initialWeek);
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [mealType, setMealType] = useState("Breakfast");

  const addMeal = () => {
    const newMeal: Meal = {
      name: "Custom Meal",
      calories: 400,
      protein: 20,
      carbs: 40,
      fat: 15,
    };

    setWeekPlan((prev) => ({
      ...prev,
      [selectedDay]: {
        ...prev[selectedDay],
        [mealType]: [...prev[selectedDay][mealType], newMeal],
      },
    }));
  };

  const calculateTotals = (meals: Meal[]) => {
    return meals.reduce(
      (totals, meal) => ({
        calories: totals.calories + meal.calories,
        protein: totals.protein + meal.protein,
        carbs: totals.carbs + meal.carbs,
        fat: totals.fat + meal.fat,
      }),
      { calories: 0, protein: 0, carbs: 0, fat: 0 }
    );
  };

  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-6">Meal Planner</h1>

      {/* Day Selector */}
      <div className="flex justify-center gap-4 mb-4">
        {Object.keys(weekPlan).map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-4 py-2 rounded-md font-semibold ${
              selectedDay === day
                ? "bg-red-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Meal Type Selector */}
      <div className="flex justify-center gap-4 mb-4">
        {["Breakfast", "Lunch", "Dinner"].map((type) => (
          <button
            key={type}
            onClick={() => setMealType(type)}
            className={`px-4 py-2 rounded-md font-semibold ${
              mealType === type
                ? "bg-red-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Meal List */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">
          {selectedDay} - {mealType}
        </h2>
        <ul className="space-y-4">
          {weekPlan[selectedDay][mealType].map((meal, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 p-3 rounded-md"
            >
              <span>{meal.name}</span>
              <span>{meal.calories} kcal</span>
            </li>
          ))}
        </ul>
        <button
          onClick={addMeal}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Add Meal
        </button>
      </div>

      {/* Nutrition Totals */}
      <div className="mt-6">
        <h3 className="text-xl font-bold mb-2">Nutritional Totals</h3>
        <div className="flex flex-col gap-2">
          {Object.keys(weekPlan[selectedDay]).map((type) => {
            const totals = calculateTotals(weekPlan[selectedDay][type]);
            return (
              <div key={type} className="flex justify-between">
                <span>{type}</span>
                <span>
                  {totals.calories} kcal, {totals.protein}g protein,{" "}
                  {totals.carbs}g carbs, {totals.fat}g fat
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Share Button */}
      <div className="mt-6 text-center">
        <button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700">
          Share Meal Plan
        </button>
      </div>
    </div>
  );
};

export default MealPlanner;
