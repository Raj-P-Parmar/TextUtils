import React from "react";

export default function About(props) {
  return (
    <>
      <div className="container mb-4 mt-4">
        <h2
          className="text-center"
          style={{
            backgroundColor: props.mode === "dark" ? "#343a40" : "#fff",
            color: props.mode === "dark" ? "#fff" : "#343a40",
          }}
        >
          About Us
        </h2>
        <div
          className="accordion container mt-3"
          id="accordionExample"
          style={{
            backgroundColor: props.mode === "dark" ? "#343a40" : "#fff",
            color: props.mode === "dark" ? "#fff" : "#343a40",
          }}
        >
          <div
            className="accordion-item"
            style={{
              color: props.mode === "dark" ? "#fff" : "#343a40",
              backgroundColor: props.mode === "dark" ? "#343a40" : "#fff",
            }}
          >
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{
                  color: props.mode === "dark" ? "#fff" : "#343a40",
                  backgroundColor: props.mode === "dark" ? "#343a40" : "#fff",
                  border: props.mode === "dark" ? "1px solid #fff" : "#343a40",
                }}
              >
                TextUtils
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
              style={{
                color: props.mode === "dark" ? "#fff" : "#343a40",
                backgroundColor: props.mode === "dark" ? "#343a40" : "#fff",
              }}
            >
              <div
                className="accordion-body"
                style={{
                  color: props.mode === "dark" ? "#fff" : "#343a40",
                  backgroundColor: props.mode === "dark" ? "#343a40" : "#fff",
                  border: props.mode === "dark" ? "1px solid #fff" : "#343a40",
                }}
              >
                <p>
                  TextUtils is a project to provide as many online computer
                  utilities to all users around the world as possible. The use
                  of utilities is and will be free of charge. These utilities
                  can be considered as accessories to Online Operating Systems.
                </p>
                <p>
                  The founder of TextUtils is Raj Parmar. Email:
                  rajpparmar1999@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
