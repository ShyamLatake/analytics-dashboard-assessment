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
  
  interface ChartData {
    year: number;  // Change year to number instead of string
    value: number;
  }
  interface EVByTrendsLiveChartProps {
    data: ChartData[];  
    color: string;   
  }
  
  const EVByTrendsLiveChart: React.FC<EVByTrendsLiveChartProps> = ({ data, color }) => {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#f0f0f0" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke={color} />
        </LineChart>
      </ResponsiveContainer>
    );
  };
  
  export default EVByTrendsLiveChart;
  