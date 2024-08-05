"use client";
import Heading from "@/components/Writing/Heading";
import Paragraph from "@/components/Writing/Paragraph";
import SubTitle from "@/components/Writing/SubTitle";
import jsTopics from "@/utils/js-topics-and-questions.json";
import ProgressBar from "@/components/ProgressBar";
import JSConfetti from "js-confetti";
import {IndexCard} from "@/components/IndexCard/IndexCard";
import useProgress from "@/utils/useProgress";

const Subject = () => {
  const { progress, handleCheckboxChange } = useProgress(jsTopics.length);
  console.log(jsTopics.length);

  const jsConfetti = new JSConfetti();

  if (progress >= 100) {
    return (
      jsConfetti.addConfetti() && (
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
      <ProgressBar progress={progress} />
      <IndexCard handleCheckboxChange={handleCheckboxChange} />
    </section>
  );
};

export default Subject;
