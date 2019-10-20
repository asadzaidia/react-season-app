import React from "react";
import "./SeasonDisplay.css";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.let, new Date().getMonth());
  const text =
    season === "winter" ? "Its a cold weather" : "Lets get to the beach";
  const icon = season === "winter" ? "snowflake" : "sun";

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${icon} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${icon} icon`} />
    </div>
  );
};

export default SeasonDisplay;
