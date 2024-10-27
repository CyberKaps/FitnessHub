import React, { useState } from "react";

const Bmr = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("male");
  const [bmr, setBMR] = useState(null);

  const calculateBMR = () => {
    let bmrValue;

    if (sex === "male") {
      bmrValue = 10 * weight + 6.25 * height - 5 * age + 5; 
    } else {
      bmrValue = 10 * weight + 6.25 * height - 5 * age - 161; 
    }

    setBMR(bmrValue.toFixed(2));
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg mt-10">
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      <h2 className="text-2xl font-bold text-center mb-4">BMR Calculator</h2>
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
      <button
        onClick={calculateBMR}
        className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
      >
        Calculate BMR
      </button>
      {bmr && (
        <div className="mt-4 text-center">
          <p className="text-lg">
            Your Basal Metabolic Rate (BMR): <span className="font-semibold">{bmr} calories/day</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Bmr;
