import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [Text, setText] = useState("Enter your text here");

  const uppercase = () => {
    let newtext = Text.toUpperCase(Text);
    setText(newtext);
  };

  const lowercase = () => {
    let newtext = Text.toLowerCase(Text);
    setText(newtext);
  };
  const clear = () => {
    let newtext = "";
    setText(newtext);
  };

  const replace = () => {
    let newtext = Text.replace(/hello/gi, "hi");
    setText(newtext);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={Text}
            onChange={handleOnChange}
            id="MyBox"
            rows="7"
          ></textarea>
          <button className="btn btn-primary mx-2" onClick={uppercase}>
            Convert to uppercase
          </button>
          <button className="btn btn-primary mx-2" onClick={lowercase}>
            Convert to lowercase
          </button>
          <button className="btn btn-primary mx-2" onClick={clear}>
            Clear text
          </button>
          <button className="btn btn-primary mx-2" onClick={replace}>
            replace
          </button>
        </div>
      </div>
      <div className="container">
        <h1>Your text summary</h1>
        <p>
          {Text.split(" ").length} words and {Text.length} letters
        </p>
        <p>{0.004 * Text.split(" ").length} minutes read</p>
      </div>
    </>
  );
}
