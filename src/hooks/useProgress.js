"use client";
import { useState } from "react";

const useProgress = (limit) => {
  const [progress, setProgress] = useState(0);
  const [selectedTopics, setSelectedTopics] = useState({});

  const handleCheckboxChange = (event) => {
    const percentage = 100 / limit;
    const isChecked = event.target.checked;
    const topicId = event.target.id;

    setProgress((prevProgress) => {
      let newProgress = isChecked
        ? prevProgress + percentage
        : prevProgress - percentage;

      if (newProgress > 100) newProgress = 100;
      if (newProgress < 0) newProgress = 0;

      return newProgress;
    });

    setSelectedTopics((prevSelected) => ({
      ...prevSelected,
      [topicId]: isChecked
    }));
  };

  return { progress, selectedTopics, handleCheckboxChange };
};

export default useProgress;
