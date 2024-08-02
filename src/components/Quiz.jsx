"use client";

import { useState } from "react";
import Link from "next/link";

const JSONData = [
  {
    question: "¿Qué es un contexto de ejecución en JavaScript?",
    choices: [
      "Una variable dentro de una función",
      "El entorno donde se evalúa y ejecuta el código",
      "Una estructura de datos",
      "Una función global",
    ],
    correctAnswer: "El entorno donde se evalúa y ejecuta el código",
  },
  {
    question:
      "¿Cuántos contextos de ejecución existen en una aplicación JavaScript?",
    choices: [
      "Solo uno, el contexto global",
      "Uno por cada función",
      "Uno por cada variable",
      "Dos, el global y el de función",
    ],
    correctAnswer: "Uno por cada función",
  },
  {
    question: "¿Qué significa 'hoisting' en JavaScript?",
    choices: [
      "Asignar valores a las variables",
      "Elevar las declaraciones de variables y funciones al principio del contexto de ejecución",
      "Ejecutar el código línea por línea",
      "Crear un nuevo contexto de ejecución",
    ],
    correctAnswer:
      "Elevar las declaraciones de variables y funciones al principio del contexto de ejecución",
  },
];

const Quiz = ({ questions = JSONData, nextTopicPath = "/" }) => {
  const [questionIndex, setQuestionIndex] = useState(0);

  const [isFinished, setIsFinished] = useState(false);

  const [correctChoices, setCorrectChoices] = useState(0);

  const [incorrectChoices, setIncorrectChoices] = useState(0);

  const currentQuestion = questions[questionIndex];

  const totalQuestions = questions.length;

  const handleIsCorrectChoice = (e) => {
    const selectedChoice = e.target.innerHTML;
    if (selectedChoice === currentQuestion.correctAnswer) {
      console.log("Es correcto");
      setCorrectChoices((prev) => prev + 1);
    } else {
      console.log("Le erraste pa.");
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
          <h1 className="text-4xl md:text-8xl font-black text-center mb-6">
            Resultados
          </h1>
          <div className="mb-3">
            <p className="text-3xl">Respuestas correctas: {correctChoices}</p>
          </div>
          <div className="mb-3">
            <p className="text-3xl">
              Respuestas incorrectas: {incorrectChoices}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-primary via-purple-100 to-primary p-1 m-1">
      <div className="flex flex-col h-full w-full bg-black p-6 rounded-xl text-indigo-300">
        <h1 className="text-6xl md:text-8xl font-black text-center mb-6">
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
          <h2 className="text-2xl md:text-4xl text-center text-pretty">
            {currentQuestion.question}
          </h2>
        </div>
        <section className="text-center h-auto flex flex-col justify-center items-center">
          <ul className="w-full md:w-3/4 md:text-2xl text-pretty">
            {currentQuestion.choices.map((choice, index) => (
              <li
                className="bg-gradient-to-br from-primary via-purple-100 to-primary p-1 w-full my-6 rounded-full"
                key={index}
              >
                <button
                  className="bg-black py-3 rounded-full w-full"
                  onClick={handleIsCorrectChoice}
                >
                  {choice}
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
