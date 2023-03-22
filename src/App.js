import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Components/main";
import RecpieDetails from "./Components/Recpiedetails";
import "./App.css";
import "./Responsive.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:MealId" element={<RecpieDetails />} />
      </Routes>
    </>
  );
}

export default App;
