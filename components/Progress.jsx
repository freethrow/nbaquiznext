const Progress = ({ index, numQuestions }) => {
  return (
    <div>
      Player <span className=" font-bold">{index + 1}</span> of{" "}
      <span className=" font-bold">{numQuestions}</span>
    </div>
  );
};

export default Progress;
