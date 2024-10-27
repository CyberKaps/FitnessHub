import React, { useState } from "react";

const Bmi = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      setMessage(getBmiMessage(bmiValue));
    } else {
      setMessage("Please enter valid weight and height");
    }
  };

  const getBmiMessage = (bmiValue) => {
    if (bmiValue < 18.5) return "Underweight";
    if (bmiValue < 24.9) return "Normal weight";
    if (bmiValue < 29.9) return "Overweight";
    return "Obesity";
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg mt-10" id="bmi-calculator">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      <h2 className="text-2xl font-bold text-center mb-4">BMI Calculator</h2>
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
      <button
        onClick={calculateBMI}
        className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
      >
        Calculate BMI
      </button>
      {bmi && (
        <div className="mt-4 text-center">
          <p className="text-lg">Your BMI: <span className="font-semibold">{bmi}</span></p>
          <p className="text-md text-gray-700 mt-1">{message}</p>
        </div>
      )}
    </div>
  );
};

export default Bmi;
