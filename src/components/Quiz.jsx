"use client";

import { useState } from "react";
import { LinkButton } from "./LinkButton";
import CustomButton from "./CustomButton";
import Link from "next/link";

const Quiz = ({ questions, nextTopicPath }) => {
  const [questionIndex, setQuestionIndex] = useState(0);

  const [isFinished, setIsFinished] = useState(false);

  const [correctChoices, setCorrectChoices] = useState(0);

  const [incorrectChoices, setIncorrectChoices] = useState(0);

  const currentQuestion = questions[questionIndex];

  const totalQuestions = questions.length;

  const handleIsCorrectChoice = (e) => {
    const selectedChoice = e.target.innerHTML;
    if (selectedChoice === currentQuestion.correctAnswer) {
      setCorrectChoices((prev) => prev + 1);
    } else {
      setIncorrectChoices((prev) => prev + 1);
    }

    if (questionIndex < totalQuestions) {
      setQuestionIndex((prev) => prev + 1);
    }

    if (questionIndex + 1 === totalQuestions) {
      setIsFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setQuestionIndex(0);
    setCorrectChoices(0);
    setIncorrectChoices(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="w-full rounded-xl bg-gradient-to-br from-primary via-purple-100 to-primary p-1 m-1">
        <div className="flex flex-col h-full w-full bg-black p-6 rounded-xl text-indigo-300 justify-center items-center text-center">
          <h1 className="text-2xl md:text-4xl font-black text-center mb-3">
            Quiz Result!
          </h1>
          <div className="mb-3">
            <p className="text-xl">Correct Answers: {correctChoices}</p>
          </div>
          <div className="mb-3">
            <p className="text-xl">Incorrect Answers: {incorrectChoices}</p>
          </div>
          <div className="flex justify-center flex-col items-center md:flex-row">
            <button
              className="w-fit p-3  text-center font-semibold rounded-md text-white hover:opacity-90 bg-primary md:mx-3 mb-3 md:mb-0"
              onClick={handleRestartQuiz}
            >
              Try again
            </button>
            <Link
              href={nextTopicPath}
              className="w-fit p-3  text-center font-semibold rounded-md text-white hover:opacity-90 bg-primary"
            >
              Next Topic
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-primary via-purple-100 to-primary p-1 m-1">
      <div className="flex flex-col h-full w-full bg-black p-6 rounded-xl text-indigo-300">
        <h1 className="text-2xl md:text-4xl font-black text-center mb-6">
          ¡Quiz!
        </h1>
        <p className="text-center md:text-end text-xl mb-3">
          {questionIndex + 1} of {totalQuestions} Questions
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <span className="bg-gradient-to-br from-primary via-purple-100 to-primary rounded-full inline-flex p-1 mx-3 w-fit text-4xl mb-3 md:mb-0">
            <button className="bg-black  rounded-full px-4">
              {questionIndex + 1}
            </button>
          </span>
          <h2 className="text-xl md:text-2xl text-center text-pretty">
            {currentQuestion.question}
          </h2>
        </div>
        <section className="text-center h-auto flex flex-col justify-center items-center">
          <ul className="w-full md:w-3/4 md:text-xl text-pretty">
            {currentQuestion.choices.map((choices, index) => (
              <li
                className="bg-gradient-to-br from-primary via-purple-100 to-primary p-1 w-full my-6 rounded-full hover:font-bold hover:animate-pulse"
                key={index}
              >
                <button
                  className="bg-black py-3 rounded-full w-full"
                  onClick={handleIsCorrectChoice}
                >
                  {choices}
                </button>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Quiz;
