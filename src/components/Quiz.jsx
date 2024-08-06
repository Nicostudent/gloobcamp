"use client";

import Link from "next/link";
import { useState } from "react";
import { LinkButton } from "./LinkButton";



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

  if (isFinished) {
    return (
      <div className="w-full rounded-xl bg-gradient-to-br from-primary via-purple-100 to-primary p-1 m-1">
        <div className="flex flex-col h-full w-full bg-black p-6 rounded-xl text-indigo-300 justify-center items-center text-center">
          <h1 className="text-2xl md:text-4xl font-black text-center mb-6">
            Resultados
          </h1>
          <div className="mb-3">
            <p className="text-xl ">Respuestas correctas: {correctChoices}</p>
          </div>
          <div className="mb-3">
            <p className="text-xl">
              Respuestas incorrectas: {incorrectChoices}
            </p>
          </div>
        </div>
        <LinkButton href={nextTopicPath} title={"Next Topic"}/>        
      </div>
    );
  }

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-primary via-purple-100 to-primary p-1 m-1">
      <div className="flex flex-col h-full w-full bg-black p-6 rounded-xl text-indigo-300">
        <h1 className="text-2xl md:text-4xl font-black text-center mb-6">
          ¡Quiz!
        </h1>
        <p className="text-end text-xl mb-3">
          Pregunta {questionIndex + 1} de {totalQuestions}
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <span className="bg-gradient-to-br from-primary via-purple-100 to-primary rounded-full inline-flex p-1 mx-3 w-fit text-4xl">
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
                className="bg-gradient-to-br from-primary via-purple-100 to-primary p-1 w-full my-6 rounded-full"
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
