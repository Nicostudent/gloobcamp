import Heading from "@/components/Writing/Heading";
import Paragraph from "@/components/Writing/Paragraph";
import { LinkButton } from "@/components/LinkButton";

const App = () => {
  return (
    <main className="flex flex-col justify-center items-center space-y-16 py-24 min-h-screen align-middle">
      <div className="text-center">
        <Heading>Welcome to GloobCamp</Heading>
      </div>
      <div className="px-4 max-w-2xl text-center">
        <Paragraph>
          Discover the essential knowledge every JavaScript developer should
          know. Progress through our expertly crafted topics and challenge
          yourself with quizzes at the end of each lesson. Earn knowledge points
          for every correct answer and track your progress as you master
          JavaScript. Ready to begin?
        </Paragraph>
      </div>
      <div className="flex flex-col justify-center items-center px-4 max-w-lg text-center">
        <Paragraph>Start your learning journey!</Paragraph>
        <LinkButton dark href={"/content"}>
          Click here
        </LinkButton>
      </div>
    </main>
  );
};

export default App;
