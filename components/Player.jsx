import { useState } from "react";

import Statistics from "./Statistics";
import HelpStats from "./HelpStats";

import NextButton from "./NextButton";
import PlayersOptions from "./PlayersOptions";

const Player = ({ player, dispatch, answer, index, numQuestions }) => {
  const [help, setHelp] = useState(null);

  return (
    <div>
      <Statistics player={player} />

      {help === index && <HelpStats player={player} />}

      <div className="options">
        <PlayersOptions player={player} dispatch={dispatch} answer={answer} />
      </div>
      <div className=" flex flex-row items-stretch w-3/4 mx-auto">
        <NextButton
          dispatch={dispatch}
          answer={answer}
          index={index}
          numQuestions={numQuestions}
        />
        {help !== index && answer == null && (
          <>
            <button
              className="btn btn-active btn-secondary m-2"
              disabled={help === index}
              onClick={() => {
                dispatch({ type: "getHelp" });
                setHelp(index);
              }}
            >
              Get help (lose 3 points)
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Player;
