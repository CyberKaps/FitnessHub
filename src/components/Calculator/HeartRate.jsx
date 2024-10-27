import React, { useState } from "react";

const HeartRate = () => {
  const [age, setAge] = useState("");
  const [restingHR, setRestingHR] = useState("");
  const [heartRate, setHeartRate] = useState(null);

  const calculateHeartRate = () => {
    if (age && restingHR) {
      const maxHeartRate = 220 - age;
      const reserve = maxHeartRate - restingHR;
      const moderate = (reserve * 0.5 + +restingHR).toFixed(0);
      const intense = (reserve * 0.85 + +restingHR).toFixed(0);
      setHeartRate({ moderate, intense });
    } else {
      setHeartRate("Please enter valid age and resting heart rate");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg mt-10" id="heart-rate-calculator">
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      <h2 className="text-2xl font-bold text-center mb-4">Heart Rate Calculator</h2>
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
        <label className="block text-gray-700">Resting Heart Rate (bpm):</label>
        <input
          type="number"
          value={restingHR}
          onChange={(e) => setRestingHR(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
        />
      </div>
      <button
        onClick={calculateHeartRate}
        className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
      >
        Calculate Heart Rate Zones
      </button>
      {heartRate && typeof heartRate === "object" && (
        <div className="mt-4 text-center">
          <p className="text-lg">Moderate Zone: <span className="font-semibold">{heartRate.moderate} bpm</span></p>
          <p className="text-lg">Intense Zone: <span className="font-semibold">{heartRate.intense} bpm</span></p>
        </div>
      )}
      {typeof heartRate === "string" && (
        <p className="text-red-500 text-center mt-4">{heartRate}</p>
      )}
    </div>
  );
};

export default HeartRate;
