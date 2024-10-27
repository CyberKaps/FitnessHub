import React, { useState } from "react";

const MacroCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [activityLevel, setActivityLevel] = useState("sedentary");
  const [goal, setGoal] = useState("maintain");
  const [macros, setMacros] = useState(null);

  const calculateMacros = () => {
    let bmr;
    if (gender === "male") {
      bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else {
      bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
    }

    const activityMultiplier = {
      sedentary: 1.2,
      lightly_active: 1.375,
      moderately_active: 1.55,
      very_active: 1.725,
    };
    const dailyCalories = bmr * activityMultiplier[activityLevel];

    let adjustedCalories;
    if (goal === "lose") {
      adjustedCalories = dailyCalories - 500; 
    } else if (goal === "gain") {
      adjustedCalories = dailyCalories + 500; 
    } else {
      adjustedCalories = dailyCalories; 
    }

    const proteinGrams = ((adjustedCalories * 0.25) / 4).toFixed(0);
    const carbGrams = ((adjustedCalories * 0.5) / 4).toFixed(0);
    const fatGrams = ((adjustedCalories * 0.25) / 9).toFixed(0);

    setMacros({ protein: proteinGrams, carbs: carbGrams, fats: fatGrams });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg mt-10" id="macro-calculator">
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      <h2 className="text-2xl font-bold text-center mb-4">Macro Calculator</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Gender:</label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Activity Level:</label>
        <select
          value={activityLevel}
          onChange={(e) => setActivityLevel(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
        >
          <option value="sedentary">Sedentary</option>
          <option value="lightly_active">Lightly Active</option>
          <option value="moderately_active">Moderately Active</option>
          <option value="very_active">Very Active</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Goal:</label>
        <select
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
        >
          <option value="maintain">Maintain Weight</option>
          <option value="lose">Lose Weight</option>
          <option value="gain">Gain Muscle</option>
        </select>
      </div>
      <button
        onClick={calculateMacros}
        className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
      >
        Calculate Macros
      </button>
      {macros && (
        <div className="mt-4 text-center">
          <p className="text-lg">Protein: <span className="font-semibold">{macros.protein}g</span></p>
          <p className="text-lg">Carbohydrates: <span className="font-semibold">{macros.carbs}g</span></p>
          <p className="text-lg">Fats: <span className="font-semibold">{macros.fats}g</span></p>
        </div>
      )}
    </div>
  );
};

export default MacroCalculator;
