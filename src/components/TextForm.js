import React, { useRef, useState } from "react";

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

  const handleCopyClick = () => {
    console.log("clipboard is clicked");
    alert("Text is copied to Clipboard.");
    navigator.clipboard.writeText(text);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handleDowClick = () => {
    console.log("download is clicked");
    alert("Text is downloaded.");
    fileDownload(text, download.txt);
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  const textAreaRef = useRef(null);
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
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>
          Copy to Clipboard
        </button>
        <button className="btn btn-primary mx-1" onClick={handleDowClick}>
          Download
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
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
