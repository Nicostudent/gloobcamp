"use client";
import Heading from "@/components/Writing/Heading";
import { LinkButton } from "@/components/LinkButton";
import Paragraph from "@/components/Writing/Paragraph";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Heading text="Wellcome" />
      <Paragraph text="Choose your content" />
      <div className="flex justify-between items-center mt-20 gap-20">
        <div className="border-2 rounded-lg  p-4 px-6 ">
          <LinkButton href={"/content/JavaScript"} title={"Javascript"} />
        </div>
        <div className="border-2 rounded-lg  p-4 px-6 ">
          <LinkButton href={"/content/React"} title={"React"} />
        </div>
      </div>
    </div>
  );
};
export default page;
