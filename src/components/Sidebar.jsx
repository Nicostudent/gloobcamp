import jsTopics from "@/utils/js-topics-and-questions.json";
import Link from "next/link";

const Sidebar = () => {
  return (
    <>
      <aside className="w-64  overflow-y-scroll py-14 border-4 border-blue-500 relative left-0">
        <nav className="flex h-full flex-col p-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contenido</h2>
          <ul className="space-y-2">
            {jsTopics.map((topic) => {
              return (
                <li key={topic.id} className="hover:bg-gray-300 rounded-md">
                  <Link
                    href={`/content/javascript/${topic.path}`}
                    className="block p-2 text-gray-800 text-xs"
                  >
                    {topic.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
