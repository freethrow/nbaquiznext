import React from "react";

const HelpStats = ({ player }) => {
  const minpg = player["stats_2"]["Minutes per game"];
  const tpg = player["stats_2"]["Turnovers per game"];
  const spg = player["stats_2"]["Steals per game"];
  const bpg = player["stats_2"]["Blocks per game"];
  const threeppg = player["stats_2"]["3 point attempts per game"];

  return (
    <div className="flex flex-row justify-evenly min-w-full my-3">
      <div className="stats stats-vertical lg:stats-horizontal shadow ">
        <div className="stat">
          <div className="stat-title">Minutes per game</div>
          <div className="stat-value">{minpg}</div>
        </div>

        <div className="stat">
          <div className="stat-title">Turnovers per game</div>
          <div className="stat-value">{tpg}</div>
        </div>

        <div className="stat">
          <div className="stat-title">Steals per game</div>
          <div className="stat-value">{spg}</div>
        </div>

        <div className="stat">
          <div className="stat-title">Blocks per game</div>
          <div className="stat-value">{bpg}</div>
        </div>

        <div className="stat">
          <div className="stat-title">3-point attempts per game</div>
          <div className="stat-value">{threeppg}</div>
        </div>
      </div>
    </div>
  );
};

export default HelpStats;
