import React from "react";
import "./styles.css";
const Display = () => {
  return (
    <div>
      <h3>Display</h3>
      <div className="count">
        <div className="balls">
          <h5>Balls Count</h5>
          <p>0</p>
        </div>
        <div className="stikes">
          <h5>Strikes Count</h5>
          <p>0</p>
        </div>
      </div>
    </div>
  );
};

export default Display;
