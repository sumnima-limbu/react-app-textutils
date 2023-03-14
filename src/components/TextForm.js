import React, { useState } from "react";

function TextForm(props) {
  const handleUpClick = () => {
    // console.log("uppercase button is clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    console.log("Lowercase button is clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");
  //   text = "New text"; // Wrong way to change the state
  //   setText("new Text"); // Correct way to change the state
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

export default TextForm;
