// import React, { useState, useEffect } from 'react';
// // import ProgressTab from './ProgressTab';


// const exercises = [
//     {
//         id: 1,
//         name: "Chair Squats",
//         description: "Improves lower body strength and stability.",
//         image: "https://media.istockphoto.com/id/1272257001/vector/exercises-that-can-be-done-at-home-using-a-sturdy-chair.jpg?s=612x612&w=0&k=20&c=oAISWJGpgW_U6wIBSjkG5hOVLoJA8WeAcVHiV5eCypA=",
//       },
//       {
//         id: 2,
//         name: "Seated Leg Lifts",
//         description: "Strengthens leg muscles and enhances balance.",
//         image: "https://cdn.autonomous.ai/static/upload/images/common/upload/20210611/5_Sitting_in_chair_leg_exercises_that_you_can_do_at_any_time_4efc43bb167.jpg", 
//       },
//       {
//         id: 3,
//         name: "Wall Push-Ups",
//         description: "Engages upper body muscles with reduced impact.",
//         image: "https://www.cancervic.org.au/images/CISS/1%20Standing%20wall%20push%20up.png",
//       },
//       {
//         id: 4,
//         name: "Heel-to-Toe Walk",
//         description: "Enhances balance and coordination for safer mobility.",
//         image: "https://link-to-heel-to-toe-walk-image.com",
//       },
//       {
//         id: 5,
//         name: "Overhead Arm Raise",
//         description: "Improves shoulder flexibility and arm strength.",
//         image: "https://link-to-overhead-arm-raise-image.com",
//       },
//       {
//         id: 6,
//         name: "Ankle Circles",
//         description: "Increases ankle mobility and stability.",
//         image: "https://link-to-ankle-circles-image.com",
//       },
// ];

// const ExerciseSection = () => {
//   // State to manage the counter visibility and count
//   const [counters, setCounters] = useState({});

//   // Effect to handle the automatic counting
//   useEffect(() => {
//     const intervals = {};

//     for (const id in counters) {
//       if (counters[id]?.isCounting) {
//         intervals[id] = setInterval(() => {
//           setCounters((prev) => ({
//             ...prev,
//             [id]: {
//               ...prev[id],
//               count: (prev[id]?.count || 0) + 1,
//             },
//           }));
//         }, 1000);
//       }
//     }

//     // Cleanup intervals on unmount or when counters change
//     return () => {
//       for (const id in intervals) {
//         clearInterval(intervals[id]);
//       }
//     };
//   }, [counters]);

//   const handleDoThisClick = (id) => {
//     // Initialize the counter state for a specific exercise
//     setCounters((prev) => ({
//       ...prev,
//       [id]: {
//         ...prev[id],
//         isCounting: !prev[id]?.isCounting, // Toggle counting
//         count: prev[id]?.count || 0, // Keep the current count
//       },
//     }));
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Exercises for Seniors</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {exercises.map((exercise) => (
//           <div key={exercise.id} className="border rounded-lg p-4 shadow-md">
//             <img
//               src={exercise.image}
//               alt={exercise.title}
//               className="w-full h-48 object-cover rounded-md mb-2"
//             />
//             <h3 className="text-lg font-semibold">{exercise.title}</h3>
//             <p className="text-sm mb-4">{exercise.description}</p>
//             <div className="flex space-x-2">
//               <button className="bg-blue-500 text-white text-sm py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">
//                 Experience VR
//               </button>
//               <button
//                 onClick={() => handleDoThisClick(exercise.id)}
//                 className="bg-green-500 text-white text-sm py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200"
//               >
//                 {counters[exercise.id]?.isCounting ? 'Stop' : 'Do This'}
//               </button>
//             </div>

//             {/* Counter Section */}
//             {counters[exercise.id] && (
//               <div className="mt-4">
//                 <h4 className="text-md font-semibold">Count: {counters[exercise.id]?.count || 0}</h4>
//                 {/* You can remove the increment and decrement buttons as they're not needed anymore */}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ExerciseSection;














// import React, { useState, useEffect } from 'react';
// import { db } from '../firebase'; // Import your firebase config
// import { ref, set, get } from 'firebase/database'; // Import firebase functions

// const exercises = [
//   {
//     id: 1,
//     name: "Chair Squats",
//     description: "Improves lower body strength and stability.",
//     image: "https://media.istockphoto.com/id/1272257001/vector/exercises-that-can-be-done-at-home-using-a-sturdy-chair.jpg?s=612x612&w=0&k=20&c=oAISWJGpgW_U6wIBSjkG5hOVLoJA8WeAcVHiV5eCypA=",
//   },
//   {
//     id: 2,
//     name: "Seated Leg Lifts",
//     description: "Strengthens leg muscles and enhances balance.",
//     image: "https://cdn.autonomous.ai/static/upload/images/common/upload/20210611/5_Sitting_in_chair_leg_exercises_that_you_can_do_at_any_time_4efc43bb167.jpg",
//   },
//   {
//     id: 3,
//     name: "Wall Push-Ups",
//     description: "Engages upper body muscles with reduced impact.",
//     image: "https://www.cancervic.org.au/images/CISS/1%20Standing%20wall%20push%20up.png",
//   },
//   // Add other exercises as needed
// ];

// const ExerciseList = () => {
//   const [counters, setCounters] = useState({});

//   // Effect to handle the automatic counting
//   useEffect(() => {
//     const intervals = {};

//     for (const id in counters) {
//       if (counters[id]?.isCounting) {
//         intervals[id] = setInterval(() => {
//           setCounters((prev) => ({
//             ...prev,
//             [id]: {
//               ...prev[id],
//               count: (prev[id]?.count || 0) + 1,
//             },
//           }));
//         }, 1000);
//       }
//     }

//     return () => {
//       for (const id in intervals) {
//         clearInterval(intervals[id]);
//       }
//     };
//   }, [counters]);

//   const handleDoThisClick = (id) => {
//     setCounters((prev) => {
//       const newCount = (prev[id]?.count || 0);
//       const newIsCounting = !prev[id]?.isCounting;

//       if (newIsCounting) {
//         // Save count to Firebase when starting
//         set(ref(db, 'exerciseCounts/' + id), newCount + 1);
//       } else {
//         // Optionally, stop saving when counting stops
//         // Here, you could handle the final count if needed
//       }

//       return {
//         ...prev,
//         [id]: {
//           ...prev[id],
//           isCounting: newIsCounting,
//           count: newCount,
//         },
//       };
//     });
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Exercises for Seniors</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {exercises.map((exercise) => (
//           <div key={exercise.id} className="border rounded-lg p-4 shadow-md">
//             <img
//               src={exercise.image}
//               alt={exercise.title}
//               className="w-full h-48 object-cover rounded-md mb-2"
//             />
//             <h3 className="text-lg font-semibold">{exercise.name}</h3>
//             <p className="text-sm mb-4">{exercise.description}</p>
//             <div className="flex space-x-2">
//               <button className="bg-blue-500 text-white text-sm py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">
//                 Experience VR
//               </button>
//               <button
//                 onClick={() => handleDoThisClick(exercise.id)}
//                 className="bg-green-500 text-white text-sm py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200"
//               >
//                 {counters[exercise.id]?.isCounting ? 'Stop' : 'Do This'}
//               </button>
//             </div>

//             {/* Counter Section */}
//             {counters[exercise.id] && (
//               <div className="mt-4">
//                 <h4 className="text-md font-semibold">Count: {counters[exercise.id]?.count || 0}</h4>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ExerciseList;












import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Import your firebase config
import { ref, set } from 'firebase/database'; // Import firebase functions
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const exercises = [
  {
    id: 1,
    name: "Chair Squats",
    description: "Improves lower body strength and stability.",
    image: "https://media.istockphoto.com/id/1272257001/vector/exercises-that-can-be-done-at-home-using-a-sturdy-chair.jpg?s=612x612&w=0&k=20&c=oAISWJGpgW_U6wIBSjkG5hOVLoJA8WeAcVHiV5eCypA=",
  },
  {
    id: 2,
    name: "Seated Leg Lifts",
    description: "Strengthens leg muscles and enhances balance.",
    image: "https://cdn.autonomous.ai/static/upload/images/common/upload/20210611/5_Sitting_in_chair_leg_exercises_that_you_can_do_at_any_time_4efc43bb167.jpg",
  },
  {
    id: 3,
    name: "Wall Push-Ups",
    description: "Engages upper body muscles with reduced impact.",
    image: "https://www.cancervic.org.au/images/CISS/1%20Standing%20wall%20push%20up.png",
  },
  // Add other exercises as needed
];

const ExerciseList = () => {
  const [counters, setCounters] = useState({});

  // Effect to handle the automatic counting
  useEffect(() => {
    const intervals = {};

    for (const id in counters) {
      if (counters[id]?.isCounting) {
        intervals[id] = setInterval(() => {
          setCounters((prev) => ({
            ...prev,
            [id]: {
              ...prev[id],
              count: (prev[id]?.count || 0) + 1,
            },
          }));
        }, 1000);
      }
    }

    return () => {
      for (const id in intervals) {
        clearInterval(intervals[id]);
      }
    };
  }, [counters]);

  const handleDoThisClick = (id) => {
    setCounters((prev) => {
      const newCount = (prev[id]?.count || 0);
      const newIsCounting = !prev[id]?.isCounting;

      if (newIsCounting) {
        // Save count to Firebase when starting
        set(ref(db, 'exerciseCounts/' + id), newCount + 1);
      } else {
        // Optionally, stop saving when counting stops
        // Here, you could handle the final count if needed
      }

      return {
        ...prev,
        [id]: {
          ...prev[id],
          isCounting: newIsCounting,
          count: newCount,
        },
      };
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Exercises for Seniors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {exercises.map((exercise) => (
          <div key={exercise.id} className="border rounded-lg p-4 shadow-md">
            <img
              src={exercise.image}
              alt={exercise.title}
              className="w-full h-48 object-cover rounded-md mb-2"
            />
            <h3 className="text-lg font-semibold">{exercise.name}</h3>
            <p className="text-sm mb-4">{exercise.description}</p>
            <div className="flex space-x-2">
              {/* Use Link to navigate to the VR Experience page */}
              <Link to="/vr-experience">
                <button className="bg-blue-500 text-white text-sm py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">
                  Experience VR
                </button>
              </Link>
              <button
                onClick={() => handleDoThisClick(exercise.id)}
                className="bg-green-500 text-white text-sm py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200"
              >
                {counters[exercise.id]?.isCounting ? 'Stop' : 'Do This'}
              </button>
            </div>

            {/* Counter Section */}
            {counters[exercise.id] && (
              <div className="mt-4">
                <h4 className="text-md font-semibold">Count: {counters[exercise.id]?.count || 0}</h4>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseList;
