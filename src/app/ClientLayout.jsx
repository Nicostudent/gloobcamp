"use client";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar";

const contentPatterns = [/^\/content\/javascript/, /^\/content\/react/];

const ClientLayout = () => {
  const pathname = usePathname();
  const showSidebar = contentPatterns.some((pattern) => pattern.test(pathname));

  return (
    <div className="flex  absolute items-center border-4 border-red-500">
      {showSidebar && (
        <div className="relative left-0">
          <Sidebar />
        </div>
      )}
    </div>
  );
};

export default ClientLayout;
