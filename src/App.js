import React, { useState } from "react";
import "./App.css";

 import { Navbar } from "./components/Navbar";
 import { Footer } from "./components/Footer";
 import { Routespage } from "./components/Routespage";
function App() {
   const [darkTheme, setDarkTheme] = useState(false);
  return (
     <div className={darkTheme ? "dark" : " "}>
       <div className="bg-gray-500 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
         <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
         <Routespage />
         <Footer />
       </div>
    </div>
   
  );
}

export default App;
