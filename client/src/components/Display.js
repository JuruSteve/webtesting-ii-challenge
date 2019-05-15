import React from "react";
import "./styles.css";
const Display = props => {
  const {
    stats: { ballCount, strikeCount }
  } = props;
  return (
    <div>
      <h3>Display</h3>
      <div className="count">
        <div className="balls">
          <h5>Balls Count</h5>
          <p data-testid="balls-count">{ballCount}</p>
        </div>
        <div className="stikes">
          <h5>Strikes Count</h5>
          <p data-testid="strikes-count">{strikeCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Display;
