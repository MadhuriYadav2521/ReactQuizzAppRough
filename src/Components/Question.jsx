import React, { useState } from "react";
import { useSelector } from "react-redux";

const Question = ({ question, handleAnswer, selectedAnswer, isCorrect }) => {
  const userName = useSelector((state) => state.name);

  return (
    <div className="w-full flex items-center justify-center">

      <div className="w-full bg-white p-8 rounded flex flex-col md:flex-row items-center">

        <div className="w-full md:w-2/3 ">
          <div className=" bg-white p-8">
            <h3 className="text-xl font-bold mb-4">{question.question}</h3>
          </div>

        </div>

        <div className="w-full  md:w-2/3 ml-8 my-9 ">
          <form>
            {question.options.map((option, index) => (

              <div key={index}>
                <label
                  style={{
                    cursor: "pointer",
                    backgroundColor: selectedAnswer === option ? "lightsteelblue" : "white",
                    padding: "5px",
                    borderRadius: "5px",
                    display: "inline-block",
                    marginBottom: "5px",
                    
                  }}
                  className="text-lg"
                >
                  <input
                    type="radio"
                    name="option"
                    value={option}
                    checked={selectedAnswer === option}
                    onChange={() => !isCorrect && handleAnswer(option)}
                    style={{ marginRight: "5px" }}
                    disabled={isCorrect !== undefined}
                    
                  />
                  {option}
                </label>
              </div>
            ))}
          </form>

        </div>

      </div>

    </div>

  )
}

export default Question;
