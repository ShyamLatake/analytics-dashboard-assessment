import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import geographicInsightsDataCity from "@/assets/data/geographic_insights_data_city.json";

const EVByCityLineChart: React.FC = () => {
  const transformedData = Object.entries(geographicInsightsDataCity.citiesData)
  .filter(([city]) => city !== "undefined")
  .map(([city, count]) => ({
    city,
    count,
  }));


  console.log("transformedData", transformedData);
  return (
    <div className="md:m-6">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={transformedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="city" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="count" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EVByCityLineChart;
