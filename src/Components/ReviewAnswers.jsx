import React from "react";

const ReviewAnswers = ({ quizData, selectedAnswers, correctAnswers }) => {
  return (
    <div className="w-[95%] sm:w-[90%] mx-auto my-3 ">
      <h2  className="text-2xl font-bold mb-4">Review Answers</h2>
      {quizData.map((question, index) => (
        <div key={index} className="mb-3">
          <p className="font-semibold">{index+1}. {question.question}</p>
          <p> <span className="font-semibold mr-2">Your Answer:</span> {selectedAnswers[index]}</p>
          <p><span className="font-semibold mr-2">Correct Answer:</span> {correctAnswers[index]}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ReviewAnswers;

