import LabelWithCheckbox from "@/components/LabelWithCheckbox";
import jsTopics from "@/utils/js-topics-and-questions.json";
import { LinkButton } from "../LinkButton";
import Container from "@/components/Dashboard/Container";
const Card = ({ handleCheckboxChange, topics, selectedTopics }) => {
  return (
    <>
      <Container>
        {topics.map((topic) => (
          <LabelWithCheckbox
            key={topic.id}
            inputId={topic.id}
            inputOnClick={handleCheckboxChange}
            isChecked={!!selectedTopics[topic.id]}
            childrenText={
              <LinkButton href={`/content/javascript/${topic.path}`}>
                {topic.id}. {topic.title}
              </LinkButton>
            }
          />
        ))}
      </Container>
    </>
  );
};

export default Card;


