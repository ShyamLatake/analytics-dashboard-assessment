import React, { useEffect, useState } from "react";
import trends from "../assets/data/analytics_data.json";
import { processTrendData } from "@/utils/chartHelpers";
import EVByTrendsLiveChart from "@/components/charts/analytics/EVByTrendsLiveChart";
import EVByPriceVsRange from "@/components/charts/analytics/EVByPriceVsRange";
import EVByMakePieChart from "@/components/charts/analytics/EVByMakePieChart";

const Analytics: React.FC = () => {
  const [msrpTrendsRaw, setMsrpTrendsRaw] = useState<Record<string, number[]>>(
    {}
  );
  const [electricRangeTrendsRaw, setElectricRangeTrendsRaw] = useState<
    Record<string, number[]>
  >({});

  useEffect(() => {
    setMsrpTrendsRaw(trends.msrpTrends);
    setElectricRangeTrendsRaw(trends.electricRangeTrends);
  }, []);

  const msrpTrends = processTrendData(msrpTrendsRaw);
  const electricRangeTrends = processTrendData(electricRangeTrendsRaw);
  return (
    <section id="analytics">
      <h2 className="text-2xl font-bold my-4 text-center md:text-left">Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-2">
        <div className="bg-white shadow rounded p-4">
          <h3 className="font-semibold mb-0">Price vs. Electric Range Analysis</h3>
          <p className="mb-2">This scatter plot visualizes the correlation between the base MSRP and the electric range of electric vehicles.</p>
          <div>
            <EVByPriceVsRange />
          </div>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h3 className="font-semibold mb-2">Market Share of Electric Vehicle Makes</h3>
          <p className="mb-2">This chart visualizes the distribution of electric vehicle makes, with individual slices representing makes with more than 1000 vehicles, and a combined "Others" slice for makes with fewer than 1000 vehicles.</p>

          <div className="p-4"> 
          <EVByMakePieChart />
             </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 m-2">
        {[
          {
            title: "Electric Range Trends",
            data: electricRangeTrends,
            color: "#8884d8",
          },
          { title: "MSRP Trends", data: msrpTrends, color: "#82ca9d" },
        ].map((chart, index) => (
          <div key={index} className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              {chart.title}
            </h2>
            {/* <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chart.data}>
                  <CartesianGrid stroke="#f0f0f0" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="value" stroke={chart.color} />
                </LineChart>
              </ResponsiveContainer> */}
            <EVByTrendsLiveChart data={chart.data} color={chart.color} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Analytics;
