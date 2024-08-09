"use client";
import Heading from "@/components/Writing/Heading";
import SubTitle from "@/components/Writing/SubTitle";

import jsTopics from "@/utils/js-topics-and-questions.json";
import Card from "@/components/Dashboard/Card";

import ProgressBar from "@/components/ProgressBar";
import useProgress from "@/hooks/useProgress";
import CompletedContent from "@/components/Dashboard/CompletedContent";
import { useState } from "react";
import Input from "@/components/Input";

const Subject = () => {
  const [searchTopic, setSearchTopic] = useState('');
  
  const { progress, selectedTopics, handleCheckboxChange } = useProgress(jsTopics.length);
  const PROGRESS_MAX_VALUE = 100;
  const PROGRESS_VALUE = progress.toFixed();
  
  if (PROGRESS_VALUE >= PROGRESS_MAX_VALUE) {
    return <CompletedContent title={"JavaScript"} />;
  }
  
  const filteredTopics = jsTopics.filter((topic) => topic.title.toLocaleLowerCase().includes(searchTopic.toLocaleLowerCase()));

  return (
    <section className="space-y-4 py-10">
      <Heading>JavaScript</Heading>
      <SubTitle>Content</SubTitle>
      <Input
        className='lg-w-1/3 md:w-1/4'
        type="text"
        value={searchTopic}
        onChange={(e) => setSearchTopic(e.target.value)}
        placeholder="Search..."
      />
      {filteredTopics.length === 0 ? <p className="text-center">Not page found</p> : 
      (
        <>
          <ProgressBar progress={progress} />
          <Card handleCheckboxChange={handleCheckboxChange} topics={filteredTopics} selectedTopics={selectedTopics} />
        </>
      )}
    </section>
  );
};

export default Subject;


