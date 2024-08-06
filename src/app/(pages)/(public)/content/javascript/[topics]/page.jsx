"use client";
import ContentPage  from "@/components/ContentPage.jsx";
import jsTopics from "@/utils/js-topics-and-questions.json";
import Quiz from "@/components/Quiz";
import EndTopic  from "@/components/EndTopic";

const TopicPage = ({ params: { topics } }) => {
  const topicData = jsTopics.find((t) => t.path === `/${topics}`);

  if (`/${topics}` === "/end") {
    return <EndTopic />;
  }

  if (!topicData) {
    return <div>Topic not found</div>;
  }


  return (
    <div>
      <ContentPage title={topicData.title} content={topicData.content}>
        <Quiz
          questions={topicData.questions}
          nextTopicPath={`/content/javascript/${topicData.next}`}
        />
      </ContentPage>
    </div>
  );
};

export default TopicPage;
