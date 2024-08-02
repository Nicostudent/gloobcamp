import sidebarContent from "@/utils/sidebar-content.json";
import Link from "next/link";

const Sidebar = () => {
  return (
    <>
      <aside className="h-screen w-64 bg-gray-200 border-gray-300">
        <nav className="flex h-full flex-col p-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contenido</h2>
          <ul className="space-y-2">
            {sidebarContent.map((content) => {
              return (
                <li key={content.name} className="hover:bg-gray-300 rounded-md">
                  <Link
                    href={content.path}
                    className="block p-2 text-gray-800 text-sm"
                  >
                    {content.title}
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
