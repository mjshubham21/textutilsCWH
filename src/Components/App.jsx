import React, { useState } from "react";
import "../app.css";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
import Alert from "./Alert.jsx";
import About from "./About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "light";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      {" "}
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container">
          <Routes>
            {" "}
            {/*Switch */}
            <Route path="/about" element={<About />}>
              <About />
            </Route>
            <Route path="/" element={<TextForm />}>
              <TextForm
                showAlert={showAlert}
                heading="Enter The Text."
                mode={mode}
              />
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
