import LabelWithCheckbox from "@/components/LabelWithCheckbox";
import jsTopics from "@/utils/js-topics-and-questions.json";
import { LinkButton } from "../LinkButton";
export const IndexCard = ({ handleCheckboxChange }) => {
  return (
    <article className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white shadow-md rounded-lg">
      {jsTopics.map((topic) => (
        <LabelWithCheckbox
          key={topic.id}
          inputId={topic.id}
          inputOnClick={handleCheckboxChange}
          childrenText={<LinkButton href={`/content/JavaScript/${topic.path}`} title={topic.title}  />}
        />
      ))}
    </article>
  );
};

