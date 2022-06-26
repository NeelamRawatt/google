import React from "react";

import { Link } from "react-router-dom";
import { Search } from "./Search";
export const Navbar = ({ darkTheme, setDarkTheme }) => {
  // padding | paddingbottom
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-2xl bg-blue-500 font-bold text-white py-2 px-2 rounded dark:bg-gray-500 dark:text-gray-900">
            Google🔎
          </p>
        </Link>
        <button
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
          className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-2xl"
        >
          {/* if darktheme is there then show btn text as light or else show buttontheme as Dark */}
          {darkTheme ? "Light 💡 " : "Dark 🌙 "}
        </button>
      </div>
      <Search />
    </div>
  );
};
