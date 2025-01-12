import React from "react";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import priceVsRange from "@/assets/data/price_vs_range.json"; 

const EVByPriceVsRange: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart>
        <CartesianGrid />
        <XAxis type="number" dataKey="baseMSRP" name="Base MSRP" unit="$" />
        <YAxis type="number" dataKey="electricRange" name="Electric Range" unit="miles" />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter name="EV Data" data={priceVsRange.analysisData} fill="#8884d8" shape="circle" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default EVByPriceVsRange;
