import React, { useState } from "react";

const Tdee = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("male");
  const [activityLevel, setActivityLevel] = useState("sedentary");
  const [tdee, setTDEE] = useState(null);

  const calculateTDEE = () => {
    let bmr;
    if (sex === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5; 
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161; 
    }

    const activityMultiplier = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9,
    };

    const totalTDEE = (bmr * activityMultiplier[activityLevel]).toFixed(2);
    setTDEE(totalTDEE);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg mt-10" id="tdee-calculator">
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      <h2 className="text-2xl font-bold text-center mb-4">TDEE Calculator</h2>
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
        <label className="block text-gray-700">Sex:</label>
        <select
          value={sex}
          onChange={(e) => setSex(e.target.value)}
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
          <option value="sedentary">Sedentary (little or no exercise)</option>
          <option value="light">Lightly active (light exercise/sports 1-3 days/week)</option>
          <option value="moderate">Moderately active (moderate exercise/sports 3-5 days/week)</option>
          <option value="active">Very active (hard exercise/sports 6-7 days a week)</option>
          <option value="veryActive">Super active (very hard exercise, physical job, or training twice a day)</option>
        </select>
      </div>
      <button
        onClick={calculateTDEE}
        className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
      >
        Calculate TDEE
      </button>
      {tdee && (
        <div className="mt-4 text-center">
          <p className="text-lg">
            Your Total Daily Energy Expenditure (TDEE): <span className="font-semibold">{tdee} calories</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Tdee;
