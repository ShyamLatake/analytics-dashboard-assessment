import { ReactNode } from "react";
import DashboardHeader from "../components/DashboardHeader";
import Sidebar from "./SideBar";

interface DashboardLayoutProps {
  children: ReactNode; 
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-screen bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <DashboardHeader />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar isVisible={false}  />

        {/* Main Content */}
        <main className="flex-1 md:p-4">
          {/* Render route-specific children */}
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
