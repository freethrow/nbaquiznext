import React from "react";

const Statistics = ({ player }) => {
  const ppg = player["stats_1"]["Points per game"];
  const apg = player["stats_1"]["Assists per game"];
  const rpg = player["stats_1"]["Rebounds per game"];
  const ftpg = player["stats_1"]["Freethrows per game"];

  return (
    <div className="flex flex-row justify-evenly min-w-full my-3">
      <div className="stats stats-vertical lg:stats-horizontal shadow">
        <div className="stat">
          <div className="stat-title">Points per game</div>
          <div className="stat-value">{ppg}</div>
        </div>

        <div className="stat">
          <div className="stat-title">Rebounds per game</div>
          <div className="stat-value">{rpg}</div>
        </div>

        <div className="stat">
          <div className="stat-title">Assists per game</div>
          <div className="stat-value">{apg}</div>
        </div>

        <div className="stat">
          <div className="stat-title">Free throws per game</div>
          <div className="stat-value">{ftpg}</div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
