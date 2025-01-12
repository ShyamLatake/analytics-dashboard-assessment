import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const PieChart = ({ data, labels }: { data: number[]; labels: string[] }) => {
  const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
      },
    ],
  };

  return <Pie data={chartData} />;
};

export default PieChart;