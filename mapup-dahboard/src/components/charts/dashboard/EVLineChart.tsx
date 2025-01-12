import evsOverTime from "@/assets/data/evs_over_time.json";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface EVData {
  year: number | null;
  totalEVs: number;
}


const EVLineChart: React.FC = () => {

    const filteredData: EVData[] = evsOverTime.evsOverTime.filter(
    (entry) => entry.year !== null
  );

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={filteredData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" label={{ value: "Year", position: "insideBottom", dy: 10 }} />
        <YAxis label={{ value: "Total EVs", angle: -90, position: "insideLeft" }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="totalEVs" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default EVLineChart;
