import Heading from "@/components/Writing/Heading";
import SubTitle from "@/components/Writing/SubTitle";
import Paragraph from "@/components/Writing/Paragraph";
import jsTopics from "@/utils/js-topics-and-questions.json";
import Link from "next/link";
const Subject = () => {
  return (
    <>
      <Heading text="JavaScript" />
      <SubTitle text="Content" />

      <article className="grid grid-cols-4">
        {jsTopics.map((topic) => (
          <label key={topic.title} className="flex items-center gap-2">
            <input type="checkbox" id="cbox1" value="first_checkbox" />
            <Link href={topic.title}>{topic.title}</Link>
          </label>
        ))}
      </article>
    </>
  );
};

export default Subject;
