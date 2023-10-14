import { useEffect } from "react";

const Timer = ({ dispatch, secondsRemaining }) => {
  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;
  if (secondsRemaining === 0) {
    dispatch({ type: "finish" });
  }
  useEffect(() => {
    const timerId = setInterval(function () {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(timerId);
  }, []);
  return (
    <div className=" w-full mx-auto mt-10 flex flex-col items-center justify-center">
      <progress
        className="progress progress-error w-3/4"
        value={secondsRemaining}
        max="150"
      ></progress>
      <span>
        Seconds remaining: {mins < 10 && 0}
        {mins}:{secs < 10 && 0}
        {secs}
      </span>
    </div>
  );
};

export default Timer;
