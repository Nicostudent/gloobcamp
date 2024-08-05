import Heading from "@/components/Writing/Heading";
import SubTitle from "@/components/Writing/SubTitle";
import Paragraph from "@/components/Writing/Paragraph";
import Link from "next/link";

const App = () => {
  return (
    <main className="flex flex-col items-center space-y-16 bg-gray-50 pt-32 min-h-screen">
      <div className="text-center">
        <Heading text="Welcome to GlobCamp" />
      </div>
      <div className="px-4 max-w-2xl text-center">
        <Paragraph text="Discover the essential knowledge every JavaScript developer should know. Progress through our expertly crafted topics and challenge yourself with quizzes at the end of each lesson. Earn knowledge points for every correct answer and track your progress as you master JavaScript. Ready to begin?" />
      </div>
      <div className="px-4 max-w-lg text-center">
        <Link href="" className="text-blue-500 hover:text-blue-700 transition-colors">
            <SubTitle text="Click here to start your learning journey!" />
        </Link>
      </div>
    </main>
  );
};

export default App;