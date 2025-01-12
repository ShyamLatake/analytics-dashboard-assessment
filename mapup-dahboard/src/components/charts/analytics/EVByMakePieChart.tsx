import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import makeData from "@/assets/data/evs_make.json";

const EVByMakePieChart: React.FC = () => {
  const above1000 = Object.entries(makeData.makeAnalysis)
    .filter(([make, count]) => count > 1000)
    .map(([make, count]) => ({ name: make, value: count }));

  // Combine data for makes with 1000 or fewer vehicles into "Others"
  const below1000 = Object.entries(makeData.makeAnalysis)
    .filter(([make, count]) => count <= 1000)
    .reduce((acc, [make, count]) => acc + count, 0);

  const data = [...above1000, { name: "Others", value: below1000 }];

  const COLORS = [
    "#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF6F61", "#8E44AD", "#1ABC9C", "#E74C3C", 
    "#F39C12", "#2ECC71", "#BDC3C7", "#3498DB", "#9B59B6", "#16A085", "#F1C40F", "#E67E22", 
    "#7F8C8D", "#34495E", "#2C3E50", "#95A5A6", "#D35400", "#C0392B", "#A3E4D7", "#A569BD"
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="60%"
          outerRadius={100}
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EVByMakePieChart;
