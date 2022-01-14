import React, { useState } from "react";
import { syllable } from "syllable";

export default function TextForm(props) {
  const convertUpper = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase!", "success");
  };
  const convertLower = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase!", "success");
  };
  const clearText = () => {
    setText("");
    props.showAlert("Cleared all text!", "success");
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const removeExtraSpaces = () => {
    setText(text.split(/[ ]+/).join(" "));
    props.showAlert("Removed extra spaces!", "success");
  };
  // const totalCharacters = () => {};
  const [text, setText] = useState("Enter text");
  return (
    <div
      className="container mt-5"
      style={{ color: props.mode === "dark" ? "#fff" : "#343a40" }}
    >
      <div className="mb-3">
        <h2> {props.heading}</h2>
        <textarea
          className="form-control"
          value={text}
          id="text-box"
          rows="10"
          onChange={handleChange}
          style={{
            color: props.mode === "dark" ? "#fff" : "#343a40",
            backgroundColor: props.mode === "dark" ? "#343a40" : "#fff",
          }}
        ></textarea>
      </div>
      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-1 my-1"
        onClick={convertUpper}
      >
        Convert to Uppercase
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-1 my-1"
        onClick={convertLower}
      >
        Convert to Lowercase
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-1 my-1"
        onClick={clearText}
      >
        Clear text
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-1 my-1"
        onClick={removeExtraSpaces}
      >
        Remove Extra Spaces
      </button>

      <div
        className="card mt-3"
        style={{
          color: props.mode === "dark" ? "#fff" : "#343a40",
          backgroundColor: props.mode === "dark" ? "#343a40" : "#fff",
          border: props.mode === "dark" ? "1px solid #fff" : "",
        }}
      >
        <div className="card-body">
          <h5 className="card-title">Text Analyzer</h5>
          <p className="card-text">
            Number of characters :{" "}
            {
              text
                .split(" ")
                .filter((word) => word.length !== 0)
                .join("").length
            }
          </p>
          <p className="card-text">
            Number of words :{" "}
            {text.split(" ").filter((word) => word.length !== 0).length}
          </p>
          <p className="card-text">
            Number of lines : {text.length === 0 ? 0 : text.split("\n").length}
          </p>
          <p className="card-text">
            Number of sentence :{" "}
            {text.length === 0 ? 0 : text.split(".").length}
          </p>
          <p className="card-text">
            Number of syllables : {text.length === 0 ? 0 : syllable(text)}
          </p>
        </div>
      </div>
    </div>
  );
}
