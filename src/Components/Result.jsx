import React from "react";

const Result = ({ score, restartQuiz }) => {
  return (
    // <div>
    //   <h2>Your Score: {score}</h2>
    //   <button onClick={restartQuiz}>Restart Quiz</button>
    // </div>
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4" >Your Score: {score}</h2>
     
        <div className="mb-4">
          <input onClick={restartQuiz} type="submit" value='Restart Quiz' className="btn-grad btn-grad" />
          {/* <p onClick={restartQuiz} class="mt-4 text-sm text-gray-500">Restart Quiz</p> */}
        </div>
     
    </div>
  );
};

export default Result;

