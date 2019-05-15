// @ts-nocheck
import React, { useState } from "react";
import "./App.css";
// import Dashboard from "./components/Dashboard";
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

function App() {
  const initialBallCount = 0;
  const initialStrikeCount = 0;
  const [ballCount, setBallCount] = useState(initialBallCount);
  const [strikeCount, setStrikeCount] = useState(initialStrikeCount);

  const updateBallCount = () => {
    if (ballCount < 3) {
      setBallCount(ballCount + 1);
    } else {
      setBallCount(0);
      setStrikeCount(0);
    }
  };

  const addFoul = () => {
    if (strikeCount < 2) {
      setStrikeCount(strikeCount + 1);
    }
  };

  return (
    <div className="App">
      <Dashboard
        updateBallCount={updateBallCount}
        updateStrikeCount={() => {
          if (strikeCount < 2) {
            setStrikeCount(strikeCount + 1);
          } else {
            setStrikeCount(0);
            setBallCount(0);
          }
        }}
        resetCounts={() => {
          setBallCount(0);
          setStrikeCount(0);
        }}
        addFoul={addFoul}
      />
      <Display stats={{ ballCount, strikeCount }} />
    </div>
  );
}

// const Dashboard = ()=>{

// }

export default App;
