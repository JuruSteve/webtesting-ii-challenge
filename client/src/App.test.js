// @ts-nocheck
import React from "react";
import App from "./App";
import { render, fireEvent, getByTestId } from "react-testing-library";
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
    const stats = {
      balls: 0,
      strikes: 0
    };
    const { getByText } = render(<Display stats={stats} />);
  });
  it("renders elements in Display component", () => {
    const stats = {
      ballCount: 0,
      strikeCount: 0
    };
    const { getAllByTestId } = render(<Display stats={stats} />);
    const ballsCount = parseInt(
      getAllByTestId("balls-count").map(n => n.textContent)[0]
    );
    const strikesCount = parseInt(
      getAllByTestId("strikes-count").map(n => n.textContent)[0]
    );
    expect(ballsCount).toBe(0);
    expect(strikesCount).toBe(0);
  });

  it("resets balls and strikes to 0 when a player get walked  (reaches 4 balls)", () => {
    const { getAllByText, getByTestId } = render(<App />);
    const button = getAllByText(/balls/i).filter(
      b => b.nodeName === "BUTTON"
    )[0];
    const strikeButton = getAllByText(/strike/i).filter(
      b => b.nodeName === "BUTTON"
    )[0];
    fireEvent.click(button);
    let heading = parseInt(getByTestId("balls-count").innerHTML);
    expect(heading).toBe(1);

    fireEvent.click(button);

    heading = parseInt(getByTestId("balls-count").innerHTML);
    expect(heading).toBe(2);

    fireEvent.click(button);

    heading = parseInt(getByTestId("balls-count").innerHTML);
    expect(heading).toBe(3);

    fireEvent.click(strikeButton);
    let strikeCount = parseInt(getByTestId("strikes-count").innerHTML);
    expect(strikeCount).toBe(1);

    fireEvent.click(button);
    heading = parseInt(getByTestId("balls-count").innerHTML);
    expect(heading).toBe(0);

    strikeCount = parseInt(getByTestId("strikes-count").innerHTML);
    expect(strikeCount).toBe(0);
    console.log(strikeCount);
  });

  it("resets strikes and balls to 0 when a player strikes out (reaches 3)", () => {
    const { getAllByText, getByTestId } = render(<App />);
    const button = getAllByText(/balls/i).filter(
      b => b.nodeName === "BUTTON"
    )[0];
    const strikeButton = getAllByText(/strike/i).filter(
      b => b.nodeName === "BUTTON"
    )[0];
    fireEvent.click(button);
    let heading = parseInt(getByTestId("balls-count").innerHTML);
    expect(heading).toBe(1);

    fireEvent.click(strikeButton);
    let strikeCount = parseInt(getByTestId("strikes-count").innerHTML);
    expect(strikeCount).toBe(1);

    fireEvent.click(strikeButton);
    strikeCount = parseInt(getByTestId("strikes-count").innerHTML);
    expect(strikeCount).toBe(2);

    fireEvent.click(strikeButton);

    strikeCount = parseInt(getByTestId("strikes-count").innerHTML);
    expect(strikeCount).toBe(0);

    heading = parseInt(getByTestId("balls-count").innerHTML);

    expect(heading).toBe(0);
    console.log(strikeCount, heading);
  });

  it("resets strikes  and balls to 0 when a player hits", () => {
    const { getAllByText, getByTestId } = render(<App />);
    const button = getAllByText(/balls/i).filter(
      b => b.nodeName === "BUTTON"
    )[0];
    const strikeButton = getAllByText(/strike/i).filter(
      b => b.nodeName === "BUTTON"
    )[0];
    const hitButton = getAllByText(/hit/i).filter(
      b => b.nodeName === "BUTTON"
    )[0];

    fireEvent.click(button);
    let heading = parseInt(getByTestId("balls-count").innerHTML);
    expect(heading).toBe(1);

    fireEvent.click(strikeButton);
    let strikeCount = parseInt(getByTestId("strikes-count").innerHTML);
    expect(strikeCount).toBe(1);

    fireEvent.click(hitButton);
    strikeCount = parseInt(getByTestId("strikes-count").innerHTML);
    expect(strikeCount).toBe(0);

    heading = parseInt(getByTestId("balls-count").innerHTML);
    expect(heading).toBe(0);
  });

  it("adds strikes up to 2 when a foul occurs", () => {
    const { getAllByText, getByTestId } = render(<App />);
    const button = getAllByText(/foul/i).filter(
      b => b.nodeName === "BUTTON"
    )[0];
    fireEvent.click(button);
    let heading = parseInt(getByTestId("strikes-count").innerHTML);
    expect(heading).toBe(1);
  });
});

// describe("<Dashboard />", () => {
//   it("renders the Dashboard component", () => {
//     render(<Dashboard />);
//   });
// });
