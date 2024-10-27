import React from 'react';

const VRExperience = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">VR Exercise Experience</h2>
      {/* Add your VR content here */}
      
      <div className='h-screen'>
      <iframe name="sub-owm-lra" src="https://framevr.io/qef-qvm-srs" height="100%" width="100%" allow="camera;microphone;display-capture;xr-spatial-tracking" scrolling="no" frameBorder="0"></iframe>

      </div>
      
    </div>
  );
};

export default VRExperience;