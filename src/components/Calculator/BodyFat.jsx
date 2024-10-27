import React, { useState } from "react";

const BodyFat = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState("");
  const [waist, setWaist] = useState("");
  const [bodyFat, setBodyFat] = useState(null);

  const calculateBodyFat = () => {
    if (age && weight && waist) {
      let bodyFatPercentage;
      if (gender === "male") {
        bodyFatPercentage = (495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height))) - 450;
      } else {
        bodyFatPercentage = (495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.221 * Math.log10(height))) - 450;
      }
      setBodyFat(bodyFatPercentage.toFixed(2));
    } else {
      setBodyFat("Please fill in all fields");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg mt-10" id="body-fat-calculator">
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      <h2 className="text-2xl font-bold text-center mb-4">Body Fat Calculator</h2>
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
        <label className="block text-gray-700">Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Waist Circumference (cm):</label>
        <input
          type="number"
          value={waist}
          onChange={(e) => setWaist(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
        />
      </div>
      <button
        onClick={calculateBodyFat}
        className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
      >
        Calculate Body Fat Percentage
      </button>
      {bodyFat && (
        <div className="mt-4 text-center">
          <p className="text-lg">Body Fat Percentage: <span className="font-semibold">{bodyFat}%</span></p>
        </div>
      )}
    </div>
  );
};

export default BodyFat;
