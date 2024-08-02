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

  const currentQuestion = questions[questionIndex];

  const totalQuestions = questions.length;

  const isLastQuestion = questionIndex + 1 === totalQuestions;

  const handleClick = (e) => {
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
        <div className="flex flex-col h-full w-full bg-black p-6 rounded-xl text-indigo-300 justify-center items-center">
          <h1 className="text-6xl md:text-8xl font-black text-center mb-6">
            ¡Bien hecho!
          </h1>
          <div className="mb-3">
            <p className="text-3xl">Respuestas correctas: 1</p>
          </div>
          <div className="mb-3">
            <p className="text-3xl">Respuestas incorrectas: 1</p>
          </div>
          <div className="bg-gradient-to-br from-primary via-purple-100 to-primary rounded-full p-1 inline-flex my-3 w-fit">
            <Link
              className="bg-black px-12 py-3 rounded-full text-xl md:text-2xl"
              href={nextTopicPath}
            >
              Siguiente lección
            </Link>
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
        <p className="text-end mb-3">
          Pregunta {questionIndex + 1} de {totalQuestions}
        </p>
        <h2 className="text-3xl md:text-4xl ">
          <div className="bg-gradient-to-br from-primary via-purple-100 to-primary rounded-full inline-flex p-1 mb-6 mx-3">
            <button className="bg-black  rounded-full px-4">
              {questionIndex + 1}
            </button>
          </div>
          {currentQuestion.question}
        </h2>
        <section className="text-center h-auto flex flex-col justify-center items-center">
          <ul className="w-3/4 md:text-2xl">
            {currentQuestion.choices.map((choice, index) => (
              <li
                className="bg-gradient-to-br from-primary via-purple-100 to-primary p-1 w-full my-6 rounded-full"
                key={index}
              >
                <button className="bg-black py-3 rounded-full w-full">
                  {choice}
                </button>
              </li>
            ))}
          </ul>
        </section>
        <div className="self-end bg-gradient-to-br from-primary via-purple-100 to-primary rounded-full p-1 mb-3">
          <button
            className="bg-black  px-12 py-3 rounded-full text-xl md:text-2xl"
            onClick={handleClick}
          >
            {isLastQuestion ? "Finalizar" : "Siguiente"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
