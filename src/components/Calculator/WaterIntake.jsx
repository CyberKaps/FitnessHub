import React, { useState } from "react";

const WaterIntake = () => {
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("low");
  const [climate, setClimate] = useState("moderate");
  const [waterIntake, setWaterIntake] = useState(null);

  const calculateWaterIntake = () => {
    let baseIntake = weight * 35;

    const activityMultiplier = {
      low: 1.0,
      moderate: 1.2,
      high: 1.4,
    };
    baseIntake *= activityMultiplier[activityLevel];

    const climateMultiplier = {
      cold: 1.0,
      moderate: 1.1,
      hot: 1.2,
    };
    const totalIntake = (baseIntake * climateMultiplier[climate]) / 1000; 

    setWaterIntake(totalIntake.toFixed(2));
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg mt-10" id="water-intake-calculator">
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      <h2 className="text-2xl font-bold text-center mb-4">Water Intake Calculator</h2>
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
        <label className="block text-gray-700">Activity Level:</label>
        <select
          value={activityLevel}
          onChange={(e) => setActivityLevel(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
        >
          <option value="low">Low (little or no exercise)</option>
          <option value="moderate">Moderate (exercise 3-5 days/week)</option>
          <option value="high">High (daily exercise)</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Climate:</label>
        <select
          value={climate}
          onChange={(e) => setClimate(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
        >
          <option value="cold">Cold</option>
          <option value="moderate">Moderate</option>
          <option value="hot">Hot</option>
        </select>
      </div>
      <button
        onClick={calculateWaterIntake}
        className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
      >
        Calculate Water Intake
      </button>
      {waterIntake && (
        <div className="mt-4 text-center">
          <p className="text-lg">Recommended Daily Water Intake: <span className="font-semibold">{waterIntake} liters</span></p>
        </div>
      )}
    </div>
  );
};

export default WaterIntake;
