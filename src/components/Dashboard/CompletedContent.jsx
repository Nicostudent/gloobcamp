import React from "react";
import Heading from "@/components/Writing/Heading";
import Paragraph from "@/components/Writing/Paragraph";
import JSConfetti from "js-confetti";
import { LinkButton } from "../LinkButton";

const CompletedContent = ({ title }) => {
  const jsConfetti = new JSConfetti();
  return (
    jsConfetti.addConfetti() && (
      <section className="flex flex-col justify-center items-center space-y-4 py-24 h-screen">
        <Heading>{title}</Heading>
        <Paragraph>
          Congratulations, you have completed all the topics!
        </Paragraph>
        <LinkButton dark href="/content">
          View other contents
        </LinkButton>
      </section>
    )
  );
};

export default CompletedContent;
