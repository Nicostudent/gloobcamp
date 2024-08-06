import LabelWithCheckbox from "@/components/LabelWithCheckbox";
import jsTopics from "@/utils/js-topics-and-questions.json";
import { LinkButton } from "../LinkButton";
import Container from "@/components/Dashboard/Container";
const Card = ({ handleCheckboxChange }) => {
  return (
    <>
      <Container>
        {jsTopics.map((topic) => (
          <LabelWithCheckbox
            key={topic.id}
            inputId={topic.id}
            inputOnClick={handleCheckboxChange}
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
