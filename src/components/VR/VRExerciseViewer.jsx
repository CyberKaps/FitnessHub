// // src/components/VRExerciseViewer.jsx
// import React from 'react';
// import { Canvas } from '@react-three/fiber';
// import { VRButton } from '@react-three/xr';
// import ExerciseViewer from '../../ExerciseViewer';  // Make sure path is correct
// import { useParams } from 'react-router-dom';

// const VRExerciseViewer = () => {
//   const { exercise } = useParams();

//   return (
//     <>
//       <VRButton />
//       <Canvas vr style={{ height: '100vh', width: '100%' }}>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />
//         <ExerciseViewer exercise={exercise} />
//       </Canvas>
//     </>
//   );
// };

// export default VRExerciseViewer;
