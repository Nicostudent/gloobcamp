import JSConfetti from "js-confetti";

export const useConfetti = () => {
  const jsConfetti = new JSConfetti();

  return jsConfetti.addConfetti();
};
