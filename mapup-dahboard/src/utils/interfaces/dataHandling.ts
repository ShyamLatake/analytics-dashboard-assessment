export type DatasetItem = {
    [key: string]: string | number | boolean; 
};
  
export interface DashboardPageProps {
    data: DatasetItem[];
}

export interface Record{
    ["VIN (1-10)"]: string;
  County: string;
  City: string;
  State: string;
  ["Postal Code"]: number;
  ["Model Year"]: number;
  Make: string;
  Model: string;
  ["Electric Vehicle Type"]: string;
  ["Clean Alternative Fuel Vehicle (CAFV) Eligibility"]: string;
  ["Electric Range"]: number;
  ["Base MSRP"]: number;
  ["Legislative District"]: number;
  ["DOL Vehicle ID"]: number;
  ["Vehicle Location"]: string;
  ["Electric Utility"]: string;
  ["2020 Census Tract"]: number;
}
  
export interface EVData {
  totalEVs: number;
  averageRange: number;
  averageMSRP: number;
  evTypes: {
    [key: string]: number;
  };
}

export interface TableData {
  VIN: string;
  County: string;
  City: string;
  State: string;
  "Postal Code": string;
}

export interface TableProps {
  data: TableData[];
  rowsPerPage?: number;
}

export interface CardProps {
    title: string;
    children: React.ReactNode;
    className?: string; 
}
