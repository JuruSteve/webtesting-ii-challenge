// @ts-nocheck
import React from "react";
import App from "./App";
import { render } from "react-testing-library";
import Dashboard from "./components/Dashboard";
import Display from "./components/Display";
import "react-testing-library/cleanup-after-each";

describe("<App />", () => {
  it("renders without crashing", () => {
    render(<App />);
  });
});

describe("<Display />", () => {
  it("renders the Display component", () => {
    const { getByText } = render(<Display />);
  });
  it("renders elements in Display component", () => {
    const { getByText } = render(<Display />);
    getByText(/balls count/i);
  });
});

describe("<Dashboard />", () => {
  it("renders the Dashboard component", () => {
    render(<Dashboard />);
  });
});
