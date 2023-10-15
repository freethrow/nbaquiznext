const PlayersOptions = ({ player, dispatch, answer }) => {
  let hasAnswered = false;
  if (answer !== null) {
    hasAnswered = true;
  }

  return (
    <div className="grid md:grid-cols-5 grid-cols-1 w-3/4 mx-auto my-5">
      {player.choices.map((option, index) => (
        <button
          className={`btn btn-success m-2 ${
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
