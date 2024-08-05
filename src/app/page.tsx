import Heading from "@/components/Writing/Heading";
import SubTitle from "@/components/Writing/SubTitle";
import Paragraph from "@/components/Writing/Paragraph";
import Link from "next/link"

const App = () => {
  return (
    <main >
      <div className="pt-64 text-center">
        <Heading text="Welcome to GlobCamp" />
      </div>
      <div className="flex flex-row space-x-32 items-start min-h-screen">
      <div className="pt-20 ml-64 size-64 ">
        <Paragraph text="Discover the essential knowledge every JavaScript developer should know. Progress through our expertly crafted topics and challenge yourself with quizzes at the end of each lesson. Earn knowledge points for every correct answer and track your progress as you master JavaScript. Ready to begin? " />
      </div>
      <div className="pt-20 size-64">
        <Link href="" className="pt-64 text-center" >
            <SubTitle text="Click here to start your learning journey!" />
        </Link>
      </div>
      </div>
    </main>
  );
};

export default App;