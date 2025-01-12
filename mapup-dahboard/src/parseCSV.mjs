import Papa from 'papaparse';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Calculate __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let vehicleData;

// Function to convert CSV to JSON and save it locally
export const convertCSVToJSON = () => {
  try {
    // Resolve CSV file path using relative path from __dirname
    const csvFilePath = path.resolve(__dirname, './assets/Electric_Vehicle_Population_Data.csv');
    console.log('Resolved CSV Path:', csvFilePath);

    // Read CSV file
    const csvData = fs.readFileSync(csvFilePath, 'utf8');

    // Parse CSV
    const result = Papa.parse(csvData, {
      header: true,
      dynamicTyping: true,
    });

    vehicleData = result.data;

    // Ensure output directory exists
    const outputDir = path.resolve(__dirname, './assets/data/');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Write JSON data to file
    const outputPath = path.resolve(outputDir, 'vehicle_population_data.json');
    fs.writeFileSync(outputPath, JSON.stringify(vehicleData, null, 2));
    console.log('CSV converted to JSON successfully!');
    
    // Generate additional JSON files
    generateOverviewData();
    generateAnalyticsData();
    generateVehicleInsightsData();
    generateGeographicInsightsData();
    generateEligibilityData();
    generateEVsByLegislativeDistrict();
    generateEVsOverTime();
    generateAverageRangeByYear();
    generateGeographicInsightsDataCity();
    getEVAnalysisByMake();
    getPriceVsRangeAnalysis();
    
  } catch (error) {
    console.error('Error converting CSV to JSON:', error.message);
  }
};

// Function to generate Overview Data and store it in JSON
const generateOverviewData = () => {
  const totalEVs = vehicleData.length;

  const averageRange = vehicleData.reduce((sum, vehicle) => sum + (vehicle['Electric Range'] || 0), 0) / totalEVs;
  
  // Handle missing MSRP values by defaulting to 0 if not available
  const averageMSRP = vehicleData.reduce((sum, vehicle) => sum + (vehicle['Base MSRP'] || 0), 0) / totalEVs;

  // Handle EV types correctly
  const evTypes = vehicleData.reduce((acc, vehicle) => {
    const evType = vehicle['Electric Vehicle Type'];
    acc[evType] = (acc[evType] || 0) + 1;
    return acc;
  }, {});


  const overviewData = { totalEVs, averageRange, averageMSRP, evTypes };

  const outputPath = path.resolve(__dirname, './assets/data/overview_data.json');
  fs.writeFileSync(outputPath, JSON.stringify(overviewData, null, 2));

};

// Function to generate Analytics Data and store it in JSON
const generateAnalyticsData = () => {
  const electricRangeTrends = vehicleData.reduce((acc, vehicle) => {
    const year = vehicle['Model Year']; // Make sure this matches your data
    if (!acc[year]) acc[year] = [];
    acc[year].push(vehicle['Electric Range'] || 0); // Default to 0 if missing
    return acc;
  }, {});

  const msrpTrends = vehicleData.reduce((acc, vehicle) => {
    const year = vehicle['Model Year'];
    if (!acc[year]) acc[year] = [];
    acc[year].push(vehicle['Base MSRP'] || 0); // Default to 0 if missing
    return acc;
  }, {});

  const analyticsData = { electricRangeTrends, msrpTrends };

  const outputPath = path.resolve(__dirname, './assets/data/analytics_data.json');
  fs.writeFileSync(outputPath, JSON.stringify(analyticsData, null, 2));
  console.log('Analytics data saved!');
};

const getPriceVsRangeAnalysis = () => {
  const analysisData = [];

  vehicleData.forEach(vehicle => {
    const electricRange = vehicle["Electric Range"];
    const baseMSRP = vehicle["Base MSRP"];

    if (electricRange && baseMSRP > 0) {
      analysisData.push({ electricRange, baseMSRP });
    }
  });

  const outputPath = path.resolve(__dirname, './assets/data/price_vs_range.json');
  fs.writeFileSync(outputPath, JSON.stringify({ analysisData }, null, 2));
};

// Function to generate Vehicle Insights Data and store it in JSON
const generateVehicleInsightsData = () => {
  const makeModelSplit = vehicleData.reduce((acc, vehicle) => {
    const key = `${vehicle.make} ${vehicle.model}`;
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  const electricRangeDist = vehicleData.reduce((acc, vehicle) => {
    const range = vehicle.electric_range;
    acc.push(range);
    return acc;
  }, []);

  const vehicleInsightsData = { makeModelSplit, electricRangeDist };

  const outputPath = path.resolve(__dirname, './assets/data/vehicle_insights_data.json');
  fs.writeFileSync(outputPath, JSON.stringify(vehicleInsightsData, null, 2));
  console.log('Vehicle Insights data saved!');
};

// Function to generate Geographic Insights Data and store it in JSON
const generateGeographicInsightsData = () => {
  const countiesData = vehicleData.reduce((acc, vehicle) => {
    const county = vehicle["County"];
    acc[county] = (acc[county] || 0) + 1;
    return acc;
  }, {});

  const geographicInsightsData = { countiesData };

  const outputPath = path.resolve(__dirname, './assets/data/geographic_insights_data.json');
  fs.writeFileSync(outputPath, JSON.stringify(geographicInsightsData, null, 2));
  console.log('Geographic Insights data saved!');
};

const generateGeographicInsightsDataCity = () => {
  const citiesData = vehicleData.reduce((acc, vehicle) => {
    const city = vehicle["City"];
    acc[city] = (acc[city] || 0) + 1;
    return acc;
  }, {});

  const geographicInsightsDataCity = { citiesData };

  const outputPath = path.resolve(__dirname, './assets/data/geographic_insights_data_city.json');
  fs.writeFileSync(outputPath, JSON.stringify(geographicInsightsDataCity, null, 2));
  console.log('Geographic Insights data saved!');
};

// Function to generate Eligibility Data and store it in JSON
const generateEligibilityData = () => {
  const eligibleCount = vehicleData.filter(
    (vehicle) =>
      vehicle["Clean Alternative Fuel Vehicle (CAFV) Eligibility"] ===
      "Clean Alternative Fuel Vehicle Eligible"
  ).length;

  const ineligibleCount = vehicleData.length - eligibleCount;

  const eligibilityData = {
    eligible: eligibleCount,
    ineligible: ineligibleCount,
  };

  const outputPath = path.resolve(__dirname, './assets/data/eligibility_data.json');
  fs.writeFileSync(outputPath, JSON.stringify(eligibilityData, null, 2));
  console.log('Eligibility data saved to:', outputPath);
};

const generateAverageRangeByYear = () => {
  const rangeByYear = vehicleData.reduce((acc, vehicle) => {
    const year = vehicle["Model Year"];
    const range = vehicle["Electric Range"];

    if (!acc[year]) acc[year] = { totalRange: 0, count: 0 };
    acc[year].totalRange += range;
    acc[year].count += 1;

    return acc;
  }, {});

  const averageRangeByYear = Object.entries(rangeByYear).map(([year, { totalRange, count }]) => ({
    year: parseInt(year, 10),
    averageRange: totalRange / count,
  }));

  const outputPath = path.resolve(__dirname, './assets/data/average_range_by_year.json');
  fs.writeFileSync(outputPath, JSON.stringify({ averageRangeByYear }, null, 2));
};

const generateEVsOverTime = () => {
  const evCountsByYear = vehicleData.reduce((acc, vehicle) => {
    const year = vehicle["Model Year"];
    acc[year] = (acc[year] || 0) + 1;
    return acc;
  }, {});

  const evsOverTime = Object.entries(evCountsByYear).map(([year, count]) => ({
    year: parseInt(year, 10),
    totalEVs: count,
  }));

  const outputPath = path.resolve(__dirname, './assets/data/evs_over_time.json');
  fs.writeFileSync(outputPath, JSON.stringify({ evsOverTime }, null, 2));

};

const generateEVsByLegislativeDistrict = () => {
  const evCountsByDistrict = vehicleData.reduce((acc , vehicle) => {
    const district = vehicle["Legislative District"];
    acc[district] = (acc[district] || 0) + 1;
    return acc;
  }, {});

  const outputPath = path.resolve(__dirname, './assets/data/evs_by_legislative_district.json');
  fs.writeFileSync(outputPath, JSON.stringify({ evCountsByDistrict }, null, 2));
};

const getEVAnalysisByMake = () => {
  const makeAnalysis  = {};

  vehicleData.forEach(vehicle => {
    const make = vehicle.Make;
    if (make in makeAnalysis) {
      makeAnalysis[make] += 1;
    } else {
      makeAnalysis[make] = 1;
    }
  });

  const outputPath = path.resolve(__dirname, './assets/data/evs_make.json');
  fs.writeFileSync(outputPath, JSON.stringify({ makeAnalysis }, null, 2));
};

convertCSVToJSON();
