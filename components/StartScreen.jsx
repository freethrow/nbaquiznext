const StartScreen = ({ numQuestions, dispatch }) => {
  return (
    <div className="flex flex-col space-y-4 justify-center items-center min-h-full">
      <h2 className=" text-2xl mb-10">
        You will get {numQuestions} players to identify!
      </h2>
      <button
        className="btn btn-primary btn-lg my-10"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start!
      </button>
    </div>
  );
};

export default StartScreen;
