import React, { useState } from "react";

const Sleep = () => {
  const [wakeUpTime, setWakeUpTime] = useState("");
  const [sleepTimes, setSleepTimes] = useState([]);

  const calculateSleepTimes = () => {
    const wakeUpDate = new Date(`1970-01-01T${wakeUpTime}`);
    const sleepCycleDuration = 90;
    const cycles = 5; 

    const newSleepTimes = [];
    for (let i = 0; i <= cycles; i++) {
      const sleepTime = new Date(wakeUpDate.getTime() - (sleepCycleDuration * i + 30) * 60000); 
      newSleepTimes.push(sleepTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }

    setSleepTimes(newSleepTimes);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg mt-10">
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      <h2 className="text-2xl font-bold text-center mb-4">Sleep Calculator</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Wake-Up Time:</label>
        <input
          type="time"
          value={wakeUpTime}
          onChange={(e) => setWakeUpTime(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
        />
      </div>
      <button
        onClick={calculateSleepTimes}
        className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
      >
        Calculate Sleep Times
      </button>
      {sleepTimes.length > 0 && (
        <div className="mt-4 text-center">
          <h3 className="text-lg font-bold">Recommended Sleep Times:</h3>
          <ul className="list-disc list-inside mt-2">
            {sleepTimes.map((time, index) => (
              <li key={index} className="text-lg">{time}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sleep;
