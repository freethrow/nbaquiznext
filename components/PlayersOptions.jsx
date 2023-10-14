const PlayersOptions = ({ player, dispatch, answer }) => {
  let hasAnswered = false;
  if (answer !== null) {
    hasAnswered = true;
  }

  return (
    <div className="grid grid-cols-5 w-3/4 mx-auto">
      {player.choices.map((option, index) => (
        <button
          className={`btn btn-success mx-2 ${
            answer == index ? "btn-secondary" : ""
          } ${
            hasAnswered
              ? index == player["correct"]
                ? "btn  btn-primary"
                : "btn  btn-error"
              : ""
          }`}
          // disabled={hasAnswered}
          key={index}
          onClick={() =>
            dispatch({
              type: "newAnswer",
              payload: index,
            })
          }
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default PlayersOptions;
