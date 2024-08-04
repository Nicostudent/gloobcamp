"use client";
import Heading from "@/components/Writing/Heading";
import Paragraph from "@/components/Writing/Paragraph";
import SubTitle from "@/components/Writing/SubTitle";
import jsTopics from "@/utils/js-topics-and-questions.json";
import Link from "next/link";
import { useState } from "react";
import { useConfetti } from "@/utils/useConfetti.js";
const Subject = () => {
  const [progress, setProgress] = useState(0);
  const limit = jsTopics.length;
  const percentage = 100 / limit;

  console.log(percentage);
  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      setProgress((progress) => progress + percentage);
    } else {
      setProgress((progress) => progress - percentage);
    }
  };

  if (progress >= 100) {
    return (
      useConfetti(),
      (
        <section>
          <Heading text="JavaScript" />
          <SubTitle text="Content" />
          <Paragraph text="Congratulations, you have completed all the topics!" />
        </section>
      )
    );
  }

  return (
    <section>
      <Heading text="JavaScript" />
      <SubTitle text="Content" />

      <article className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white shadow-md rounded-lg">
        {jsTopics.map((topic) => (
          <label
            key={topic.id}
            className="flex items-center gap-4 hover:bg-slate-100 py-4 rounded-md duration-100 ease-in-out"
          >
            <input
              type="checkbox"
              id={topic.id}
              className="m-4 accent-primary size-4"
              onClick={handleCheckboxChange}
            />
            <Link href={topic.id}>
              <p className="py-2 lg:max-w-28 text-sm text-tertiary sm:text-md hover:text-secondary hover:underline duration-100 ease-in-out">
                {topic.id}. {topic.title}
              </p>
            </Link>
          </label>
        ))}
      </article>

      <article>
        <progress
          id="progress-bar"
          value={progress}
          max="100"
          className="progress-filled:bg-primary progress-unfilled:bg-slate-300 mt-12 progress-unfilled:rounded-lg progress-filled:rounded-lg w-full"
        ></progress>
      </article>
    </section>
  );
};

export default Subject;
