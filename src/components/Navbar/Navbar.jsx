import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { FiHome } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Exercises", link: "/exercises" },
  { id: 3, name: "Events", link: "/events" },
  { id: 4, name: "Progress", link: "/progress" },
  { id: 5, name: "Profile", link: "/profile" },
];

const CalculatorLinks = [
  { id: 1, name: "BMI Calculator", link: "/bmi-calculator" },
  { id: 2, name: "Calories Calculator", link: "/calories-calculator" },
  { id: 3, name: "Macro Calculator", link: "/macro-calculator" },
  { id: 4, name: "Heart Rate Calculator", link: "/heart-rate-calculator" },
  { id: 5, name: "Body Fat Calculator", link: "/body-fat-calculator" },
  { id: 6, name: "Water Intake Calculator", link: "/water-intake-calculator" },
  { id: 7, name: "Protein Calculator", link: "/protein-calculator" },
  { id: 8, name: "TDEE Calculator", link: "/tdee-calculator" },
  { id: 9, name: "BMR Calculator", link: "/bmr-calculator" },
  { id: 10, name: "Sleep Calculator", link: "/sleep-calculator" },
];

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="shadow-md bg-white dark:bg-slate-800 dark:text-white duration-200 relative z-40">
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <Link to="/" className="font-bold text-xl items-center flex gap-1">
              <FiHome size="40" />
              FitnessHub
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-lg border py-1 px-2 text-sm focus:outline-none"
              />
              <IoMdSearch className="absolute top-1/2 right-3 transform -translate-y-1/2" />
            </div>

            <DarkMode />
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <Link to={data.link} className="px-4 hover:text-primary duration-200">
                {data.name}
              </Link>
            </li>
          ))}

          <li className="group relative cursor-pointer">
            <Link to="#" className="flex items-center gap-[2px] py-2">
              Calculators
              <FaCaretDown className="transition duration-200 group-hover:rotate-180" />
            </Link>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {CalculatorLinks.map((calc) => (
                  <li key={calc.id}>
                    <Link to={calc.link} className="inline-block w-full rounded-md p-2 hover:bg-primary/20">
                      {calc.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
