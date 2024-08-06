"use client";
import Heading from "@/components/Writing/Heading";
import { LinkButton } from "@/components/LinkButton";
import Paragraph from "@/components/Writing/Paragraph";

const page = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen">
      <Heading>Welcome</Heading>
      <Paragraph>Choose your content</Paragraph>

      <div className="flex justify-between items-center gap-8">
        <LinkButton dark href={"/content/javascript"}>
          JavaScript
        </LinkButton>
        <LinkButton dark href={"/content/react"}>
          ReactJS
        </LinkButton>
      </div>
    </section>
  );
};
export default page;
