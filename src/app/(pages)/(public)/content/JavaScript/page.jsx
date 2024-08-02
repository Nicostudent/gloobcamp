import Heading from "@/components/Writing/Heading";
import SubTitle from "@/components/Writing/SubTitle";
import Paragraph from "@/components/Writing/Paragraph";
import jsTopics from "@/utils/js-topics-and-questions.json";
const Subject = () => {
  return (
    <>
      <Heading text="JavaScript" />
      <SubTitle text="Content" />

      <article className="grid grid-cols-4">
        {jsTopics.map((topic) => (
          <p key={topic.title} className="text-sm text-tertiary">
            {topic.title}
          </p>
        ))}
      </article>
    </>
  );
};

export default Subject;
