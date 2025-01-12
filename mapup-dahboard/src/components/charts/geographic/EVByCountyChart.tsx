import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import geographic_insights_data from "@/assets/data/geographic_insights_data.json";

const EVByCountyChart = () => {
  const chartData = Object.entries(geographic_insights_data.countiesData)
    .filter(([key]) => key !== "undefined")
    .map(([county, totalEVs]) => ({
      County: county,
      TotalEVs: totalEVs,
    }));

  return (
    <div className="my-8">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="County" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="TotalEVs" fill="#4caf50" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EVByCountyChart;
