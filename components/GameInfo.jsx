import React from "react";

const GameInfo = ({ points }) => {
  return (
    <div className="flex flex-row items-stretch">
      <p>
        Points in this sitting:{" "}
        <span className=" text-lg font-bold">{points}</span>
      </p>
    </div>
  );
};

export default GameInfo;
