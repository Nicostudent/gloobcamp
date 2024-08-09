"use client";
import { useState } from "react";

/**
 * 
 * TODO: it's important to notice that in this code the progress state it's being
 * updated in each render, even if the progress didn't not change
 * 
 * Other important thing to keep in mind is that the maths to calculate the progress 
 * could lead us to a bad calculation because of the division and the floating
 * point calculations. This is a very controlled environment but in a real world
 * project this hook will be used by a lot of devs, so we should validate the limit
 * to avoid division by 0.
 * 
 * Also separate the progress maths in a util file will be usefull, to keep the SRP
 */

const useProgress = (limit) => {
  //if(limit <= 0) throw new Error("Limit cannot be 0 or a negative number")
  const [progress, setProgress] = useState(0);

  // This could be in a util file
  /*const calculateNewProgress = (isChecked,percentage,prevProgress) => {
      let newProgress = isChecked
        ? prevProgress + percentage
        : prevProgress - percentage;

      if (newProgress > 100) newProgress = 100;
      if (newProgress < 0) newProgress = 0;

      return newProgress;
    }
  */

  const handleCheckboxChange = (event) => {
    const percentage = 100 / limit;
    const isChecked = event.target.checked;

    // setProgress((prevProgress) => calculateNewProgress(isChecked, percentage, prevProgress));

    setProgress((prevProgress) => {
      let newProgress = isChecked
        ? prevProgress + percentage
        : prevProgress - percentage;

      if (newProgress > 100) newProgress = 100;
      if (newProgress < 0) newProgress = 0;

      return newProgress;
    });
  };

  return { progress, handleCheckboxChange };
};

export default useProgress;
