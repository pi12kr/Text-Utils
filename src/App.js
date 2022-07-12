import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import React, { useState } from "react";

function App() {
  const [Mode, setMode] = useState("light");

 const togglemode = () => {
    if (Mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
  return (
    <>
      <Navbar
        title="Textutils"
        about="About Us"
        mode={Mode}
        toggleMode={togglemode}
      />
      <div className="container my-3">
        {/* <TextForm heading="Enter the text to analyse" /> */}
        <About/>
      </div>
    </>
  );
}

export default App;
