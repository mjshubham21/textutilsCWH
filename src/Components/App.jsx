import React, { useState } from "react";
import "../app.css";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
import Alert from "./Alert";
function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "light";
    }
  };
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert />
      <div className="container">
        <TextForm heading="Enter The Text." />
      </div>
    </>
  );
}

export default App;
