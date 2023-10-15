const NextButton = ({ dispatch, answer, index, numQuestions }) => {
  if (answer === null) {
    return (
      <button
        className="btn btn-active btn-secondary cursor-not-allowed m-2"
        disabled={true}
      >
        Next Player
      </button>
    );
  }

  if (index < numQuestions - 1) {
    return (
      <button
        className=" btn btn-secondary btn-lg m-2"
        onClick={() => {
          dispatch({ type: "nextQuestion" });
        }}
      >
        Next Player
      </button>
    );
  }

  if (index === numQuestions - 1) {
    return (
      <button
        className="btn btn-active btn-secondary m-2 font-black"
        onClick={() => {
          dispatch({ type: "finish" });
        }}
      >
        Finish
      </button>
    );
  }
};

export default NextButton;
