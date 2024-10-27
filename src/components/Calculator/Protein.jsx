import React, { useState } from "react";

const Protein = () => {
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("sedentary");
  const [goal, setGoal] = useState("maintain");
  const [proteinIntake, setProteinIntake] = useState(null);

  const calculateProteinIntake = () => {
    let proteinPerKg;

    if (activityLevel === "sedentary") {
      proteinPerKg = goal === "lose" ? 1.2 : goal === "gain" ? 1.6 : 1.0;
    } else if (activityLevel === "active") {
      proteinPerKg = goal === "lose" ? 1.4 : goal === "gain" ? 1.8 : 1.2;
    } else { 
      proteinPerKg = goal === "lose" ? 1.6 : goal === "gain" ? 2.0 : 1.4;
    }

    const totalIntake = (weight * proteinPerKg).toFixed(2);
    setProteinIntake(totalIntake);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg mt-10">
      
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      <h2 className="text-2xl font-bold text-center mb-4">Protein Intake Calculator</h2>
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
          <option value="sedentary">Sedentary (little or no exercise)</option>
          <option value="active">Active (light exercise/sports 1-3 days/week)</option>
          <option value="very active">Very Active (hard exercise/sports 3-5 days/week)</option>
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
          <option value="gain">Gain Muscle</option>
          <option value="lose">Lose Weight</option>
        </select>
      </div>
      <button
        onClick={calculateProteinIntake}
        className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
      >
        Calculate Protein Intake
      </button>
      {proteinIntake && (
        <div className="mt-4 text-center">
          <p className="text-lg">
            Recommended Daily Protein Intake: <span className="font-semibold">{proteinIntake} grams</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Protein;
