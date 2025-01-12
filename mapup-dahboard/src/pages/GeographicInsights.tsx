/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import viehcalData from "../assets/data/vehicle_population_data.json";

import Table from "@/components/ui/Table";
import EVByCountyChart from "@/components/charts/geographic/EVByCountyChart";
import EVByCityLineChart from "@/components/charts/geographic/EVByCityLineChart";

const GeographicInsights: React.FC = () => {
  const [vehicalData, setVehicalData] = useState<any | null>(null);
  useEffect(() => setVehicalData(viehcalData), []);

  return (
    <section id="geographic-insights" className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Geographic Insights</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 bg-white shadow rounded p-4">
        <div className="overflow-x-auto">
          <Table data={vehicalData || []} rowsPerPage={10} />
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold mb-2 text-center">Electric Vehicle Distribution by County</h2>
          <p className="text-gray-600 text-center mb-6">
            This bar chart illustrates the number of electric vehicles (EVs) registered in each county, highlighting the geographic trends in EV adoption.
          </p>
          <EVByCountyChart />
        </div>
      </div>
      <div id="charts" className="mt-8">
        <div className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4">EV Distribution by City</h2>
      <p className="text-sm text-gray-600 mb-4">
        This chart represents the distribution of electric vehicles (EVs) across different cities.
      </p>
          <EVByCityLineChart />
        </div>
      </div>
    </section>
  );
};

export default GeographicInsights;
