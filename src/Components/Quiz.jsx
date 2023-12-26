import React, { useState } from "react";
import Question from "./Question";
import ReviewAnswers from "./ReviewAnswers";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResult, setShowResult] = useState(false)
  const [reviewMode, setReviewMode] = useState(false)
  const [answerStatus, setAnswerStatus] = useState({})
  const [error, setError] = useState(false)
  const { category } = useParams()  //category
  const navigate = useNavigate()

  const quizData = [
    {
      category: "React",
      question: "What of the following is used in React.js to increase performance?",
      options: ["Original DOM", "Virtual DOM", "Both A and B.", "None of the above."],
      correctAnswer: "Virtual DOM",
    },
    {
      category: "React",
      question: "Which of the following acts as the input of a class-based component?",
      options: ["Class", "Factory", "Render", "Props"],
      correctAnswer: "Props",
    },
    {
      category: "Node Js",
      question: " Which of the following tool is used to automate the various tasks of the Node.js application?",
      options: ["Express.js", "GruntJS", "NPM", "None of the above"],
      correctAnswer: "GruntJS",
    },
    {
      category: "React",
      question: "How many numbers of elements a valid react component can return?",
      options: ["1", "3", "5", "2"],
      correctAnswer: "1",
    },
    {
      category: "React",
      question: "What is a state in React?",
      options: ["A permanent storage.", "Internal storage of the component.", "External storage of the component.", "None of the above."],
      correctAnswer: "Internal storage of the component.",
    },
    {
      category: "React",
      question: "Which of the following option is correct in the case of the Babel?",
      options: ["Babel is a Compiler.", "Babel is a Transpilar.", "None of the above.", "Both A and B are correct."],
      correctAnswer: "Both A and B are correct.",
    },
    {
      category: "Node Js",
      question: "Which of the following types of applications can be built using Node.js?",
      options: ["Web Application.", "Chat Application.", "RESTful Service.", "All of the above."],
      correctAnswer: "All of the above.",
    },
    {
      category: "Node Js",
      question: "Which of the following is used to test if two nodes are equal?",
      options: ["==", "equal()", "isEqualNode()", "None of the above."],
      correctAnswer: "isEqualNode()",
    }
  ];

  const currentUser = useSelector((state) => state.userReducer.currentUser);
  console.log(currentUser, "userName");
  console.log("selected category", category);
  const filteredQuizData = quizData.filter((q) => q.category === category)
  const correctAnswers = filteredQuizData.map((question) => question.correctAnswer)

  console.log("filter data", filteredQuizData);

  const handleNextQuestion = () => {
    if (selectedAnswers[currentQuestion]) {
      setError(false);

      if (selectedAnswers[currentQuestion] === correctAnswers[currentQuestion]) {
        setScore((prevScore) => prevScore + 1);
      }

      if (currentQuestion < filteredQuizData.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {

        const newResult = { score: `${score}/${filteredQuizData.length}`, category: category };
        currentUser.userResults.push(newResult);
        localStorage.setItem("Users", JSON.stringify(currentUser));
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        setShowResult(true);
      }
    } else {
      setError(true);
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setError(false);
    }
  }


  const handleAnswer = (selectedOption) => {
    setSelectedAnswers((prevSelectedAnswers) => ({ ...prevSelectedAnswers, [currentQuestion]: selectedOption }))
  }


  const handleReview = () => {
    setReviewMode(true);

    const newAnswerStatus = {};
    for (let i = 0; i < filteredQuizData.length; i++) {
      const isCorrect = selectedAnswers[i] === correctAnswers[i];
      newAnswerStatus[i] = isCorrect;
    }
    setAnswerStatus(newAnswerStatus);
    setCurrentQuestion(0);
  }

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswers({});
    setShowResult(false);
    setReviewMode(false);
    setAnswerStatus({});
    setError(false);
  }

  const handleEnd = () => {
    navigate('/')
  }

  return (
    <>
      <Navbar />

      {!showResult && filteredQuizData.length > 0 ? (
        <div className="w-[92%] mx-auto">
          <Question
            question={filteredQuizData[currentQuestion]}
            handleAnswer={handleAnswer}
            selectedAnswer={selectedAnswers[currentQuestion]}
            reviewMode={reviewMode}
            isCorrect={answerStatus[currentQuestion]}
          />
          {error && <p style={{ color: "red", textAlign: "center", fontWeight: "bold", marginBottom: "15px" }}>Please select an answer.</p>}
          <div className="flex items-center justify-center">
            <button className="btn-grad2" onClick={handlePreviousQuestion} disabled={currentQuestion === 0}>
              Previous
            </button>
            {currentQuestion < filteredQuizData.length - 1 ? (
              <button className="btn-grad3" onClick={handleNextQuestion}>Next</button>
            ) : (
              <>
                <button className="btn-grad3" onClick={handleNextQuestion}>Finish</button>
              </>
            )}
          </div>
        </div>
      ) : (
        null
      )}
      {showResult && (
        <>
          <div className="max-w-md mx-auto mt-8 p-6">
            <h2 className="text-2xl font-bold mb-4 text-center">Your Score: {score}/ {filteredQuizData.length}</h2>

          </div>

          {reviewMode ? (
            <ReviewAnswers
              quizData={filteredQuizData}
              selectedAnswers={selectedAnswers}
              correctAnswers={correctAnswers}
            />
          ) : null}

        </>
      )}
      {showResult && (
        <div className="max-w-md mx-auto  p-6 flex justify-center">
          {reviewMode ? (
            <button onClick={handleEnd} className="btn-grad2 text-sm" >End</button>

          ) :
            <button onClick={handleReview} style={{ marginRight: "10px" }} className="btn-grad2 text-sm">
              Review Answers
            </button>
          }

          <button onClick={handleRestart} className="btn-grad3 text-sm" >Restart Quiz</button>

        </div>
      )}
    </>
  );
};

export default Quiz;
