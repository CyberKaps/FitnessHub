import React, { useEffect, useState } from 'react';
import { db } from '../firebase'; // Import your firebase config
import { ref, onValue } from 'firebase/database'; // Import firebase functions

const ProgressTab = () => {
  const [exerciseCounts, setExerciseCounts] = useState([]);

  useEffect(() => {
    const countsRef = ref(db, 'exerciseCounts/');
    onValue(countsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setExerciseCounts(Object.values(data));
      }
    });
  }, []);

  const totalExercises = exerciseCounts.reduce((sum, count) => sum + count, 0);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Progress Overview</h2>
      <div className="bg-gray-200 rounded-lg shadow-lg p-4">
        <h3 className="text-lg font-semibold mb-2">Total Exercises Completed: {totalExercises}</h3>
        <div className="space-y-2">
          {exerciseCounts.map((count, index) => (
            <div key={index} className="flex justify-between items-center">
              <span>Exercise {index + 1}</span>
              <div className="relative w-1/2 h-4 bg-gray-300 rounded">
                <div
                  className="absolute top-0 left-0 h-full bg-blue-600 rounded"
                  style={{ width: `${(count / 10) * 100}%` }} // Assuming each exercise has a target of 10
                ></div>
              </div>
              <span className="ml-2">{count}/10</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressTab;
