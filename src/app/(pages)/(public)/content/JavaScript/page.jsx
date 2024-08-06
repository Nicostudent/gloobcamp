"use client";
import Heading from "@/components/Writing/Heading";
import SubTitle from "@/components/Writing/SubTitle";

import jsTopics from "@/utils/js-topics-and-questions.json";
import Card from "@/components/Dashboard/Card";

import ProgressBar from "@/components/ProgressBar";
import useProgress from "@/hooks/useProgress";
import CompletedContent from "@/components/Dashboard/CompletedContent";

const Subject = () => {
  const { progress, handleCheckboxChange } = useProgress(jsTopics.length);
  const PROGRESS_MAX_VALUE = 10;
  const PROGRESS_VALUE = progress.toFixed();

  if (PROGRESS_VALUE >= PROGRESS_MAX_VALUE) {
    return <CompletedContent title={"JavaScript"} />;
  }

  return (
    <section className="space-y-4 py-24">
      <Heading>JavaScript</Heading>
      <SubTitle>Content</SubTitle>
      <ProgressBar progress={progress} />
      <Card handleCheckboxChange={handleCheckboxChange} />
    </section>
  );
};

export default Subject;
