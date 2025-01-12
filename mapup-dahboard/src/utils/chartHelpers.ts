export const getChartColors = (length: number): string[] => {
    const colors = [
      'rgba(255, 99, 132, 0.6)',
      'rgba(54, 162, 235, 0.6)',
      'rgba(255, 206, 86, 0.6)',
      'rgba(75, 192, 192, 0.6)',
      'rgba(153, 102, 255, 0.6)',
      'rgba(255, 159, 64, 0.6)',
    ];
    return Array.from({ length }, (_, i) => colors[i % colors.length]);
};

export const processTrendData = (trendData: Record<string, number[]>): { year: number; value: number }[] => {
  return Object.entries(trendData).map(([year, values]) => ({
    year: Number(year),
    value: values.reduce((sum, val) => sum + val, 0) / values.length, 
  }));
};
