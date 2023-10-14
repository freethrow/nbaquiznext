const FinishScreen = ({ points, dispatch, gamesPlayed, setGamesPlayed }) => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Ok, you had a score.</h1>
          <p className="py-6 text-4xl">{points} points!</p>
          <button
            className="btn btn-primary"
            onClick={() => {
              dispatch({ type: "initial" });
              setGamesPlayed(gamesPlayed + 1);
            }}
          >
            Play Again!
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinishScreen;
