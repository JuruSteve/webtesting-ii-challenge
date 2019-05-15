import React from "react";

const Dashboard = ({
  updateBallCount,
  addFoul,
  updateStrikeCount,
  resetCounts
}) => {
  return (
    <div>
      <h3>Dashboard</h3>
      <div className="btn">
        <button data-testid="ball-count" onClick={updateBallCount}>
          Balls
        </button>
        <button onClick={resetCounts}>Hit</button>
        <button onClick={addFoul}>Foul</button>
        <button onClick={updateStrikeCount}>Strike</button>
      </div>
    </div>
  );
};

export default Dashboard;
