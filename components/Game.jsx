"use client";
import { useReducer, useEffect, useState } from "react";

import { useAuth } from "@clerk/clerk-react";

import StartScreen from "./StartScreen";
import Player from "./Player";

import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Timer from "./Timer";
import GameInfo from "./GameInfo";
import Loading from "./Loading";

const SECS_PER_QUESTION = 15;

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };

    case "initial":
      return {
        ...state,
        status: "loading",
      };

    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
        index: 0,
        answer: null,
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case "newAnswer":
      const player = state.questions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload == player.correct ? state.points + 10 : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };

    case "getHelp":
      return {
        ...state,
        points: state.points - 3,
      };

    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };

    case "finish":
      const data = {
        user_id: state.user_id,
        addscore: state.points,
      };
      const res = fetch(`${process.env.NEXT_PUBLIC_API_URL}/add-game`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      return {
        ...state,
        status: "finished",
      };

    default:
      throw new Error("Action Unknown");
  }
}

// loading, error, ready, active, finished

const Game = () => {
  const { userId } = useAuth();

  const initialState = {
    questions: [],
    status: "loading",
    index: 0,
    answer: null,
    points: 0,
    user_id: userId,
    secondsRemaining: null,
  };

  const [
    { status, questions, index, answer, points, user_id, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  const [gamesPlayed, setGamesPlayed] = useState(0);

  const numQuestions = questions.length;

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/players/5`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, [gamesPlayed]);

  return (
    <div className="h-full shadow-xl">
      <GameInfo points={points} />

      {status === "loading" && <Loading />}
      {status === "ready" && (
        <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
      )}
      {status === "active" && (
        <>
          <Progress index={index} numQuestions={numQuestions} />
          <Player
            player={questions[index]}
            dispatch={dispatch}
            answer={answer}
            index={index}
            numQuestions={numQuestions}
          />
          <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
        </>
      )}
      {status === "finished" && (
        <>
          <FinishScreen
            points={points}
            dispatch={dispatch}
            setGamesPlayed={setGamesPlayed}
            gamesPlayed={gamesPlayed}
            length={questions.length}
          />
        </>
      )}
      {status === "error" && <div>Error loading data</div>}
    </div>
  );
};

export default Game;
