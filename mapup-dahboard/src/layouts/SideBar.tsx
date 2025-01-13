import React from 'react';
import { FaHome, FaChartBar } from 'react-icons/fa';

interface SidebarProps {
  isVisible: boolean; 
}

const Sidebar: React.FC<SidebarProps> = ({ isVisible }) => {
  return (
    <aside
      className={`fixed top-0 left-0 h-[40vh] border-2 w-64 bg-white-800 border-indigo-500/50 text-white rounded-2xl p-4 m-6 z-20 transform transition-transform duration-300 ease-in-out 
        ${isVisible ? "translate-x-0" : "-translate-x-[130%]"} md:translate-x-0 md:relative`}
    >
      <nav className="flex flex-col space-y-6">
      <ul>
        <li>
          <a
            href="/"
            className="flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 hover:bg-gray-200 hover:text-gray-800 active:bg-gray-300"
          >
            <FaHome className="text-xl text-gray-500 transition-colors duration-300 group-hover:text-gray-800" />
            <span className="text-gray-600 group-hover:text-gray-800 font-medium">Dashboard</span>
          </a>
        </li>
        <li>
          <a
            href="/analytics"
            className="flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 hover:bg-gray-200 hover:text-gray-800 active:bg-gray-300"
          >
            <FaChartBar className="text-xl text-gray-500 transition-colors duration-300 group-hover:text-gray-800" />
            <span className="text-gray-600 group-hover:text-gray-800 font-medium">Analytics</span>
          </a>
        </li>
        <li>
          <a
            href="/geographic"
            className="flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 hover:bg-gray-200 hover:text-gray-800 active:bg-gray-300"
          >
            <FaChartBar className="text-xl text-gray-500 transition-colors duration-300 group-hover:text-gray-800" />
            <span className="text-gray-600 group-hover:text-gray-800 font-medium">Geographic Insights</span>
          </a>
        </li>
      </ul>
    </nav>
    </aside>
  );
};

export default Sidebar;
