import Heading from "@/components/Writing/Heading";
import SubTitle from "@/components/Writing/SubTitle";
import Paragraph from "@/components/Writing/Paragraph";
import Link from "next/link";

const App = () => {
  return (
    <main className="flex flex-col items-center pt-32 space-y-16 min-h-screen bg-gray-50">
      <div className="text-center">
        <Heading text="Welcome to GlobCamp" />
      </div>
      <div className="max-w-2xl text-center px-4">
        <Paragraph text="Discover the essential knowledge every JavaScript developer should know. Progress through our expertly crafted topics and challenge yourself with quizzes at the end of each lesson. Earn knowledge points for every correct answer and track your progress as you master JavaScript. Ready to begin?" />
      </div>
      <div className="max-w-lg text-center px-4">
        <Link href="" className="text-blue-500 hover:text-blue-700 transition-colors">
            <SubTitle text="Click here to start your learning journey!" />
        </Link>
      </div>
    </main>
  );
};

export default App;