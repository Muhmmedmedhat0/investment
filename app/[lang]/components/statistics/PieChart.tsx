'use client';

import React, { FC } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  labels: string[];
  data: number[];
  backgroundColor: string[];
}

const PieChart: FC<PieChartProps> = ({ labels, data, backgroundColor }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: '%',
        data,
        backgroundColor,
        borderWidth: 1,
        hoverOffset: 10,
      },
    ],
  };

  return (
    <div>
      <Doughnut data={chartData} />
    </div>
  );
};

export default PieChart;
