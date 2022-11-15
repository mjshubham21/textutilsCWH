import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  // const handleCap = () => {
  //   let newText = text.toLocaleUpperCase;
  //   setText(newText);
  // };

  const handleClear = () => {
    let newText = "";
    setText(newText);
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "black" : "white",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
            }}
            onChange={handleChange}
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
          ></textarea>
        </div>
        <button onClick={handleUpClick} className="btn btn-primary mx-1">
          Convert To Upper.
        </button>
        <button onClick={handleLowClick} className="btn btn-primary mx-1">
          Convert To Lower.
        </button>
        {/* <button onClick={handleCap} className="btn btn-primary mx-1">
          Capitalize.
        </button> */}
        <button onClick={handleClear} className="btn btn-primary mx-1">
          Clear text.
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "black" : "white",
        }}
      >
        <h2>Text Summery</h2>
        <p>
          {text.split(" ").length} words & {text.length} charachters.
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read.</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

export default TextForm;
