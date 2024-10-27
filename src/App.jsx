import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer/Footer";
import Bmi from "./components/Calculator/Bmi";
import Calories from "./components/Calculator/Calories";
import HeartRate from "./components/Calculator/HeartRate";
import BodyFat from "./components/Calculator/BodyFat";
import Macro from "./components/Calculator/Macro";
import WaterIntake from "./components/Calculator/WaterIntake";
import Protein from "./components/Calculator/Protein";
import Tdee from "./components/Calculator/Tdee";
import Bmr from "./components/Calculator/Bmr";
import Sleep from "./components/Calculator/Sleep";
import Auth from "./components/Auth"; 
// import VRExerciseViewer from "./components/VR/VRExerciseViewer";
import ExerciseList from "./components/ExerciseList";
import Events from "./components/Events";
import ProgressTab from './components/ProgressTab';
import VRExperience from './components/VRExperience';


const App = () => {

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar /> 
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Hero />
                <Footer />
              </div>
            }
          />
          <Route path="/auth" element={<Auth />} />
          {/* <Route path="/" element={<UserDashboard />} /> */}
          {/* <Route path="/vr/:exercise" element={<VRExerciseViewer />} /> */}
          <Route path="/exercises" element={<ExerciseList />} />
          <Route path="/progress" element={<ProgressTab />} />
          <Route path="/events" element={<Events />} />
          <Route path="/vr-experience" element={<VRExperience />} />


          <Route path="/bmi-calculator" element={<Bmi />} />
          <Route path="/calories-calculator" element={<Calories />} />
          <Route path="/heart-rate-calculator" element={<HeartRate />} />
          <Route path="/body-fat-calculator" element={<BodyFat />} />
          <Route path="/macro-calculator" element={<Macro />} />
          <Route path="/water-intake-calculator" element={<WaterIntake />} />
          <Route path="/protein-calculator" element={<Protein />} />
          <Route path="/tdee-calculator" element={<Tdee />} />
          <Route path="/bmr-calculator" element={<Bmr />} />
          <Route path="/sleep-calculator" element={<Sleep />} />
        </Routes>

      </div>
    </Router>
  );
};

export default App;
