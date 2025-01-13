import { useEffect, useState } from "react";
import overViewData from "../assets/data/overview_data.json";
import EVLineChart from "@/components/charts/dashboard/EVLineChart";
import { EVData } from "@/utils/interfaces/dataHandling";




const Dashboard = () => {
  const [overviewData, setOverviewData] = useState<EVData | null>(null);

  useEffect(() => {
    setOverviewData(overViewData);
  
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-100">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r text-center from-blue-500 to-teal-400 ml-5 sm:text-left mb-8">
        Overview Board
      </h1>
      <div className="max-w-7xl mx-auto px-6 py-8">
        {overviewData ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Total EVs", value: overviewData.totalEVs, icon: "🚗" },
              {
                label: "Average Range",
                value: `${overviewData.averageRange.toFixed(2)} miles`,
                icon: "📏",
              },
              {
                label: "Average MSRP",
                value: `$${overviewData.averageMSRP.toFixed(2)}`,
                icon: "💵",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-white via-gray-100 to-white shadow-lg rounded-xl p-6 flex flex-col items-center transition-transform transform hover:scale-105"
              >
                <div className="text-4xl">{item.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-gray-800">
                  {item.label}
                </h3>
                <p className="text-2xl font-extrabold text-blue-600 mt-2">
                  {item.value}
                </p>
              </div>
            ))}
            <div className="bg-white shadow-lg rounded-xl p-6 transition-transform transform hover:scale-105">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                🚘 EV Types
              </h3>
              <ul className="mt-4 space-y-2">
                
                {Object.entries(overviewData.evTypes).filter(([city]) => city !== "undefined").map(([type, count]) => (
                  <li
                    key={type}
                    className="flex justify-between text-sm font-medium text-gray-700"
                  >
                    <span>{type || "Unknown"}</span>
                    <span className="text-blue-500">{count}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">Loading overview data...</p>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-6 py-4 space-y-12">
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-0">Total Electric Vehicles Over Time</h3>
          <p className="mb-4">This chart illustrates the growth of electric vehicles (EVs) from 1998 to 2024.</p>
          <EVLineChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
