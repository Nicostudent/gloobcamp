"use client";
import { usePathname } from 'next/navigation';
import Sidebar from "@/components/Sidebar";

const contentPatterns = [/^\/content\/javascript/, /^\/content\/react/];

const ClientLayout = ({ children }) => {
  const pathname = usePathname();
  const showSidebar = contentPatterns.some(pattern => pattern.test(pathname));

  return (
    <div className="flex align-middle items-center border-4 border-red-500">
      {showSidebar && <Sidebar />}
      {children}
    </div>
  );
};

export default ClientLayout;
